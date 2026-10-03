#!/usr/bin/env python3
"""Fail if monetisation is switched on without a public id, or if a secret-like value is committed."""
import json, sys
from pathlib import Path
p = Path("monetization.json")
cfg = json.loads(p.read_text())
bad = []
pairs = [
    ("donations", "donation_url"),
    ("monthly_support", "monthly_support_url"),
    ("publications", "store_url"),
    ("memberships", "membership_url"),
    ("advertising", "adsense_publisher_id"),
    ("newsletter", "newsletter_url"),
    ("analytics", "analytics_id"),
]
for flag, key in pairs:
    if flag == "donations" and cfg.get("payid"):
        continue
    if cfg.get(flag) and not str(cfg.get(key) or "").strip():
        bad.append(f"{flag} is true but {key} is empty")
blob = p.read_text()
for needle in ("sk_live_", "sk_test_", "whsec_", "BEGIN PRIVATE", "AKIA"):
    if needle in blob:
        bad.append("secret-like value: " + needle)
if bad:
    print("\n".join(bad))
    sys.exit(1)
print("monetization.json: switches that are on have a value; no secret-like token found")
