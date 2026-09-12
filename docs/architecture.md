# Architecture
```text
Marketing OS frontend → Backend API → Database → Integrations (Meta, Dropbox, Telegram, AI Providers)
                                      ↓
                              Background jobs / automations
```
VS Code is only the development environment. The future deployed backend will run independently 24/7. Integrations will be added behind the backend, while AI is reserved for reasoning tasks rather than simple data processing.
