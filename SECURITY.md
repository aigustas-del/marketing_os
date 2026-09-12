# Local security rule

This project follows a local-only secret policy:

1. Never put passwords, API keys, access tokens, private keys, FTP credentials, or Hostinger credentials in source files, README files, screenshots, chat messages, commits, or GitHub.
2. Store local development secrets only in an ignored `.env` or `.env.local` file on the owner’s computer, or in the operating system’s credential manager.
3. Keep the committed `.env.example` file limited to empty variable names and placeholders. It must never contain real values.
4. Before committing, inspect `git status` and review the diff for secrets. If a secret is ever exposed, revoke and rotate it immediately.
5. External connections should read secrets from environment variables at runtime. The application must not print secret values to logs or return them from API responses.

The assistant may help configure code that reads a secret by variable name, but secrets should remain on the owner’s computer and should not be pasted into chat.

## Local setup

Create `.env.local` on the local machine and fill in values there. It is ignored by Git:

```text
HOSTINGER_HOST=
HOSTINGER_USERNAME=
HOSTINGER_PASSWORD=
HOSTINGER_PORT=22
```

Use a secure local deployment tool or Hostinger’s File Manager. Do not commit this file or share its contents.
