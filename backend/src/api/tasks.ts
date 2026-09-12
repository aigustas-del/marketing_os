import { Router } from 'express';
import { randomUUID } from 'node:crypto';
import { requireDatabase } from '../db.js';

export const tasksRouter = Router();
const statuses = ['Backlog', 'Planned', 'In Progress', 'Waiting', 'Done'];
const priorities = ['Low', 'Medium', 'High'];

tasksRouter.get('/', async (_req, res, next) => {
  try { const db = requireDatabase(); const [rows] = await db.query('SELECT id,title,description,status,priority,due_date AS dueDate,category FROM tasks ORDER BY due_date IS NULL, due_date'); res.json({ data: rows }); } catch (error) { next(error); }
});

tasksRouter.post('/', async (req, res, next) => {
  try {
    const { title, description = '', status = 'Backlog', priority = 'Medium', dueDate = null, category = 'General' } = req.body;
    if (!title || !statuses.includes(status) || !priorities.includes(priority)) return res.status(400).json({ error: 'Invalid task fields' });
    const id = randomUUID(); const db = requireDatabase();
    await db.execute('INSERT INTO tasks (id,title,description,status,priority,due_date,category) VALUES (?,?,?,?,?,?,?)', [id, title, description, status, priority, dueDate, category]);
    res.status(201).json({ data: { id, title, description, status, priority, dueDate, category } });
  } catch (error) { next(error); }
});

tasksRouter.patch('/:id', async (req, res, next) => {
  try {
    const allowed = ['title', 'description', 'status', 'priority', 'dueDate', 'category'];
    const entries = Object.entries(req.body).filter(([key]) => allowed.includes(key));
    if (!entries.length) return res.status(400).json({ error: 'No editable fields supplied' });
    if (entries.some(([key, value]) => (key === 'status' && !statuses.includes(String(value))) || (key === 'priority' && !priorities.includes(String(value))))) return res.status(400).json({ error: 'Invalid task fields' });
    const columns = entries.map(([key]) => key === 'dueDate' ? 'due_date' : key); const db = requireDatabase();
    await db.query(`UPDATE tasks SET ${columns.map((column) => `\`${column}\` = ?`).join(', ')} WHERE id = ?`, [...entries.map(([, value]) => value), req.params.id]);
    res.json({ data: { id: req.params.id, ...Object.fromEntries(entries) } });
  } catch (error) { next(error); }
});
