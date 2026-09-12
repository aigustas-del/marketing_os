# Marketing OS chronology

This file records meaningful project actions in order. Secrets and credential values must never be recorded here.

## 2026-09-13

- Confirmed the Hostinger temporary site and deployed the static React frontend through SFTP/SSH.
- Generated a local Ed25519 SSH key at `C:\Users\AigustasButkus\.ssh\marketing_os_hostinger_ed25519`; only the public key was added to Hostinger.
- Added local-only secret handling rules in `SECURITY.md` and strengthened `.gitignore`.
- Documented the Hostinger deployment workflow and future system design.
- Added MySQL schema for tasks, campaigns, content items, and events in `docs/database.sql`.
- Added the initial database connection layer and Tasks API: `GET /api/tasks`, `POST /api/tasks`, and `PATCH /api/tasks/:id`.
- Kept the frontend static-hosting compatible by bundling CSS into the JavaScript build.
- Checked the project and temporary Hostinger site for an existing database configuration; none is present yet, so no database schema was applied.
