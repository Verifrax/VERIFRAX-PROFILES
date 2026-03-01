"use strict";

const fs = require("fs");
const path = require("path");

function die(msg) { console.error(msg); process.exit(1); }

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); }
  catch (e) { die(`E_PROFILE_JSON_INVALID ${p}: ${e.message}`); }
}

const schema = readJson(path.join(".verifrax","profile.schema.json"));

function assert(cond, msg) { if (!cond) die(msg); }

function pat(re, s) { return re.test(String(s)); }

function validateOne(p, obj) {
  assert(obj && typeof obj === "object" && !Array.isArray(obj), `E_PROFILE_SCHEMA ${p}: root object required`);

  const keys = Object.keys(obj);
  for (const k of keys) assert(Object.prototype.hasOwnProperty.call(schema.properties, k), `E_PROFILE_SCHEMA ${p}: extra field '${k}'`);
  for (const req of schema.required) assert(Object.prototype.hasOwnProperty.call(obj, req), `E_PROFILE_SCHEMA ${p}: missing '${req}'`);

  assert(typeof obj.id === "string" && pat(/^[a-z0-9][a-z0-9._-]*$/, obj.id), `E_PROFILE_SCHEMA ${p}: id invalid`);
  assert(typeof obj.version === "string" && pat(/^v[0-9]+\.[0-9]+\.[0-9]+$/, obj.version), `E_PROFILE_SCHEMA ${p}: version invalid`);
  assert(typeof obj.scope === "string" && obj.scope.trim().length >= 3, `E_PROFILE_SCHEMA ${p}: scope invalid`);

  assert(Array.isArray(obj.required_fields) && obj.required_fields.length >= 1, `E_PROFILE_SCHEMA ${p}: required_fields invalid`);
  for (const f of obj.required_fields) assert(typeof f === "string" && f.trim(), `E_PROFILE_SCHEMA ${p}: required_fields contains empty`);

  assert(Array.isArray(obj.rejection_codes) && obj.rejection_codes.length >= 1, `E_PROFILE_SCHEMA ${p}: rejection_codes invalid`);
  for (const c of obj.rejection_codes) assert(typeof c === "string" && pat(/^E_[A-Z0-9_]+$/, c), `E_PROFILE_SCHEMA ${p}: bad rejection code '${c}'`);

  assert(obj.policy && typeof obj.policy === "object" && !Array.isArray(obj.policy), `E_PROFILE_SCHEMA ${p}: policy object required`);

  // hard requirement: policy must have rules (or nested policy.rules) to avoid "vibes profiles"
  const pol = (obj.policy.policy && typeof obj.policy.policy === "object") ? obj.policy.policy : obj.policy;
  assert(Array.isArray(pol.rules) && pol.rules.length > 0, `E_PROFILE_SCHEMA ${p}: policy.rules required non-empty array`);
}

function walk(dir, out=[]) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith(".")) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.isFile() && ent.name.endsWith(".profile.json")) out.push(p);
  }
  return out;
}

const profiles = walk(".");
assert(profiles.length > 0, "E_PROFILE_NONE: no *.profile.json files found");

const seenIds = new Map(); // id -> versions set
for (const p of profiles) {
  const obj = readJson(p);
  validateOne(p, obj);
  const key = obj.id;
  const ver = obj.version;
  if (!seenIds.has(key)) seenIds.set(key, new Set());
  const set = seenIds.get(key);
  assert(!set.has(ver), `E_PROFILE_DUP_VERSION ${p}: duplicate version for id=${key} version=${ver}`);
  set.add(ver);
}

console.log(`OK: validated ${profiles.length} profiles`);
