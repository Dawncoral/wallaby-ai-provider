# Changelog

## 0.1.2 (2026-11-05)

- Add GitHub Actions Trusted Publishing with OIDC. The workflow installs
  dependencies, checks the provider exports, and publishes on `v*` tags or
  manual dispatch, without long-lived npm tokens. Runtime code and model
  pass-through behavior are unchanged.
