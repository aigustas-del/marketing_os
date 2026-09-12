# Marketing OS system design

## Delivery order

1. **Core workspace** — MySQL persistence and CRUD APIs for tasks, content, campaigns, events.
2. **Planning relationships** — connect content, tasks, events, and campaigns with IDs and timelines.
3. **Analytics ingestion** — store normalized daily metrics independently of any provider.
4. **Integrations** — add Meta, Dropbox, and Telegram adapters behind the backend; credentials remain server-side.
5. **AI reasoning** — create queued jobs that read structured internal data and write recommendations, never direct provider calls from the browser.
6. **Automation** — scheduled jobs for sync, refresh, health checks, and reports.

## Runtime rule

The browser talks only to the backend API. The backend owns database access, credentials, integrations, validation, and job execution. The static frontend can remain on Hostinger while the API runs on a Node-capable Hostinger plan or VPS.

## Data flow

```text
Browser → API routes → validation → services → MySQL
                         ↓
                  integration adapters
                         ↓
                   job queue / AI jobs
```

External provider data is normalized into internal records. Provider-specific IDs are retained for syncing, but the UI depends on Marketing OS models rather than Meta, Dropbox, or Telegram response formats.

## API conventions

- JSON responses use `{ data }` for successful resources and `{ error }` for failures.
- Dates are ISO `YYYY-MM-DD` or ISO timestamps.
- Every write endpoint validates input and returns HTTP 400 for invalid data.
- Integration secrets are read from server environment variables only.
- Destructive actions require explicit API calls and are never triggered by background sync automatically.
