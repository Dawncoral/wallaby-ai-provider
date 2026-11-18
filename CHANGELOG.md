# Changelog

## 0.1.3 (2026-11-18)

- Correct the README pricing table: K3.1 Pro is $1.80 input / $9.00 output / $0.18 cache hit, and K3 is $2.55 / $12.75 / $0.255 per 1M tokens. Runtime code is unchanged.

## 0.1.2 (2026-11-05)

- Add GitHub Actions Trusted Publishing with OIDC. The workflow installs
  dependencies, checks the provider exports, and publishes on `v*` tags or
  manual dispatch, without long-lived npm tokens. Runtime code and model
  pass-through behavior are unchanged.
