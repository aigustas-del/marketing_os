# Integration plan

## Meta

OAuth and provider credentials stay in the backend. A sync job will fetch Instagram/Facebook account data, store normalized metrics, and retain the provider object ID for future reconciliation. The browser never calls Meta directly.

## Dropbox

The first adapter will list approved asset folders and store links/references on content items. Marketing OS will not copy or delete Dropbox files automatically.

## Telegram

The first adapter will support drafting and explicitly sending approved content. Publishing requires a deliberate user action until the workflow is proven.

## AI provider

AI receives structured snapshots and produces recommendations or plans. It does not perform simple aggregation, own business data, or receive credentials. Every AI request is recorded as an `AIJob` with input type and status.
