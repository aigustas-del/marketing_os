-- Marketing OS initial schema for Hostinger MySQL.
-- Run after creating an empty database. No user or organization tables are needed.
CREATE TABLE tasks (
  id CHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  status ENUM('Backlog','Planned','In Progress','Waiting','Done') NOT NULL DEFAULT 'Backlog',
  priority ENUM('Low','Medium','High') NOT NULL DEFAULT 'Medium',
  due_date DATE NULL,
  category VARCHAR(100) NOT NULL DEFAULT 'General',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE campaigns (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  objective TEXT NOT NULL,
  start_date DATE NULL,
  end_date DATE NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'Planning',
  target VARCHAR(255) NOT NULL DEFAULT '',
  performance VARCHAR(255) NOT NULL DEFAULT '',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE content_items (
  id CHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  platform VARCHAR(50) NOT NULL,
  content_type VARCHAR(50) NOT NULL,
  planned_publish_date DATE NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'Idea',
  campaign_id CHAR(36) NULL,
  asset_reference VARCHAR(500) NOT NULL DEFAULT '',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE SET NULL
);

CREATE TABLE events (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  event_date DATE NULL,
  venue VARCHAR(255) NOT NULL DEFAULT '',
  status VARCHAR(50) NOT NULL DEFAULT 'Planning',
  campaign_id CHAR(36) NULL,
  notes TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE SET NULL
);

CREATE INDEX idx_tasks_status_due ON tasks(status, due_date);
CREATE INDEX idx_content_publish_date ON content_items(planned_publish_date);
CREATE INDEX idx_events_date ON events(event_date);
