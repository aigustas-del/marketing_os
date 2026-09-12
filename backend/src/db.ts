import mysql from 'mysql2/promise';

export const pool = process.env.DATABASE_URL
  ? mysql.createPool(process.env.DATABASE_URL)
  : null;

export function requireDatabase() {
  if (!pool) throw Object.assign(new Error('DATABASE_URL is not configured'), { status: 503 });
  return pool;
}
