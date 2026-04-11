# VERIFRAX-PROFILES

Deterministic profile corpus for the governed Verifrax verification system.

## Proof artifacts

This repository is part of the VERIFRAX proof perimeter.

- **ARTIFACT-0006**
- **ARTIFACT-0005**
- **ARTIFACT-0004**
- **ARTIFACT-0003**
- **ARTIFACT-0002**
- **ARTIFACT-0001**

**Canonical public proof surface:** https://proof.verifrax.net  
**Canonical proof publication repository:** https://github.com/Verifrax/proof  
**Canonical evidence root:** https://github.com/Verifrax/VERIFRAX

## Terminal planes

- **[ANAGNORIUM](https://github.com/Verifrax/ANAGNORIUM)** — terminal recognition
- **[REGRESSORIUM](https://github.com/Verifrax/REGRESSORIUM)** — terminal recourse

## Status

* Layer: profile and policy-constraint surface
* Repository class: governed profile surface
* Upstream authored source: `VERIFRAX`
* Adjacent derived specification surface: `VERIFRAX-SPEC`
* Public verifier dependency: `VERIFRAX-verify` at `https://verify.verifrax.net/`
* Artifact-chain relevance: supports interpretation boundaries needed by `artifact-0005`
* npm package: `@verifrax/verifrax-profiles`
* Public host ownership: none claimed as sole host surface in this README
* Package status: public npm package `@verifrax/verifrax-profiles@0.1.0`
* License: Apache License Version 2.0

## One-sentence role

VERIFRAX-PROFILES publishes deterministic verification profiles that constrain how evidence is interpreted by verifier surfaces and chain readers without changing the authored specification or replacing upstream protocol authority.

## What this repository is

VERIFRAX-PROFILES is the profile corpus of the stack.

It exists to provide:

* deterministic profile definitions
* profile schemas and validation constraints
* explicit acceptance thresholds where the system uses them
* domain- or use-case-specific constraint overlays
* verifier-consumable profile material for public inspection and stable interpretation
* profile-side support for artifact-chain legibility, including artifact-0005 dependency context

This repository is a constrained policy surface.

It narrows interpretation within declared boundaries.

It does not author the specification it constrains.

## What this repository is not

VERIFRAX-PROFILES is not:

* the upstream authored protocol repository
* the derived specification publication repository
* the governance root
* the authority issuance repository
* the governed execution runtime
* the public verifier UI
* the proof publication repository
* the intake repository
* the evidence-root registry
* the seal archive surface

VERIFRAX-PROFILES does not:

* author normative source material
* replace VERIFRAX as upstream authority
* replace VERIFRAX-SPEC as the derived specification publication surface
* issue authority objects
* emit CORPIFORM receipts
* register artifact truth at the evidence root
* own the public verifier surface
* transform a profile into a new specification

A profile can constrain a verification path without being allowed to rewrite the protocol.

## Normative direction

The load-bearing direction is fixed:

* VERIFRAX authors normative source material.
* VERIFRAX-SPEC publishes derived specification artifacts from VERIFRAX.
* VERIFRAX-PROFILES publishes deterministic profile constraints that do not change the spec.
* Derived artifacts are not upstream authority.
* Governance authority is external and bound through AUCTORISEAL plus the governed repo set in `.github`.

If profiles are treated as spec authorship, the stack collapses into role ambiguity.

## Stack position

Read the system in this order when tracing authority and interpretation:

1. `.github` — governance root and governed repo boundary
2. `AUCTORISEAL` — authority issuance and public authority object publication
3. `CORPIFORM` — governed execution and receipt emission
4. `VERIFRAX` — authored source, evidence root, verification boundary, artifact registration
5. `VERIFRAX-SPEC` — derived publication of specification artifacts
6. `VERIFRAX-PROFILES` — deterministic profile constraints that do not change the spec
7. `VERIFRAX-verify` — public verification surface

VERIFRAX-PROFILES therefore sits downstream from authored and derived specification surfaces and upstream of profile-aware verification interpretation.

## Profile boundary

A profile is a bounded interpretive constraint layer.

That means:

* the specification stays upstream
* the profile must remain explicit about what it constrains
* the profile cannot mutate authored source truth
* the profile cannot impersonate authority
* the profile cannot silently widen or narrow interpretation without visible definition

If a profile disagrees with authored protocol truth, the profile is wrong.

If a profile claims to replace the specification, the repository is wrong.

## Relationship to the public verifier

Artifact-0005 and the public verifier both make this repository load-bearing.

### Why artifact-0005 matters here

Artifact-0005 is the chain boundary that must connect:

* public canonical authority
* governed execution
* recorded receipt
* evidence registration
* verifier-visible interpretation

VERIFRAX-PROFILES does not create artifact-0005.

But VERIFRAX-PROFILES must remain aligned with the same interpretation boundary that artifact-0005 relies on.

If profile language drifts, the same artifact can appear to validate differently across readers and verifier surfaces.

This repository must therefore mention artifact-0005 as an active chain dependency without falsely claiming that artifact-0005 is completed or sealed here.

### Why the verifier matters here

`VERIFRAX-verify` is the public verifier surface at `https://verify.verifrax.net/`.

That public surface may need profile-aware interpretation.

VERIFRAX-PROFILES must therefore stay connected to:

* authored source in VERIFRAX
* derived publication in VERIFRAX-SPEC
* public verification at VERIFRAX-verify
* evidence-root semantics that artifact-0005 depends on

But it must not claim ownership of the public verifier UI.

## Relationship to specification

This repository is subordinate to both authored and derived specification surfaces.

The correct relationship is:

* VERIFRAX defines authored protocol truth
* VERIFRAX-SPEC publishes derived specification artifacts
* VERIFRAX-PROFILES constrains interpretation under declared profiles
* profiles do not change the spec

That last line is not optional. It is the hard boundary that prevents profile drift from becoming protocol drift.

## Relationship to evidence

VERIFRAX-PROFILES is not the evidence root.

It may be referenced by evidence interpretation workflows, but it must not:

* register artifacts as official chain members
* present itself as the authoritative artifact index
* claim receipt registration authority
* replace VERIFRAX evidence surfaces
* treat profile selection as evidence finality by itself

Its role is interpretive support, not evidence sovereignty.

## Inputs and outputs

### Inputs consumed by this repository

This repository consumes:

* authored normative material from VERIFRAX
* derived publication context from VERIFRAX-SPEC
* verifier-facing interpretation needs
* declared domain constraints that can be represented as deterministic profiles

### Outputs produced by this repository

This repository produces:

* profile definitions
* profile schemas
* explicit constraint surfaces
* profile examples where materially true
* stable reference material for verifier-aware interpretation

It does not produce authority, execution, proof publication, or artifact registration.

## Public-surface relationship

This README should avoid false host claims.

It is correct to link adjacent public surfaces such as:

* `https://verify.verifrax.net/` — public verifier
* `https://proof.verifrax.net/` — proof publication
* `https://api.verifrax.net/` — execution surface
* `https://auctoriseal.verifrax.net/` — authority surface
* `https://corpiform.verifrax.net/` — runtime reference surface

It is not correct to claim that VERIFRAX-PROFILES solely owns those surfaces.

## Drift rule

A profile repository fails when any of these happen:

* it implies that profiles rewrite the spec
* it contradicts VERIFRAX-authored source
* it contradicts VERIFRAX-SPEC derived publication
* it omits verifier linkage
* it omits artifact-0005 chain relevance
* it claims evidence-root authority it does not hold
* it presents profile choice as if it were authority issuance or execution permission

## Reader rule

Read this repository after VERIFRAX and VERIFRAX-SPEC and before using profile-aware interpretation in verifier-facing contexts.

If a reader starts here, this README must still direct them back to VERIFRAX as upstream authored source and to VERIFRAX-SPEC as derived publication surface.

## Canonical related repositories

* [`.github`](https://github.com/Verifrax/.github) — governance root
* [`VERIFRAX`](https://github.com/Verifrax/VERIFRAX) — authored normative source and evidence root
* [`VERIFRAX-SPEC`](https://github.com/Verifrax/VERIFRAX-SPEC) — derived specification publication
* [`AUCTORISEAL`](https://github.com/Verifrax/AUCTORISEAL) — authority issuance/reference
* [`CORPIFORM`](https://github.com/Verifrax/CORPIFORM) — governed execution and receipts
* [`VERIFRAX-verify`](https://github.com/Verifrax/VERIFRAX-verify) — public verifier UI
* [`VERIFRAX-DOCS`](https://github.com/Verifrax/VERIFRAX-DOCS) — explanatory documentation surface

## CI and governance expectations

Any workflow, badge, or status language here must prove profile-surface integrity rather than decorate it.

This repository should only claim checks that are real for:

* identity alignment with repository truth
* profile-schema consistency
* drift detection against authored and derived sources
* determinism where declared
* reference integrity to adjacent repositories and public surfaces

README prose must not substitute for profile-validation integrity.


## Verifrax system path labels

The governed Verifrax path that this README must stay compatible with is:

1. `.github` — organization governance and governed repository boundary
2. `AUCTORISEAL` — authority issuance and public authority reference
3. `CORPIFORM` — governed execution and receipt emission
4. `VERIFRAX` — authored protocol, evidence root, and artifact-chain registration boundary
5. `VERIFRAX-SPEC` — derived specification publication surface
6. `VERIFRAX-PROFILES` — deterministic profile-constraint surface
7. `VERIFRAX-SAMPLES` — pinned sample and reproducibility surface
8. `VERIFRAX-verify` — public verification repository and UI boundary
9. `VERIFRAX-DOCS` — explanatory documentation surface
10. `cicullis` — enforcement boundary
11. `proof` — proof publication surface
12. `SIGILLARIUM` — seal and archive reference surface
13. `apply` — intake surface

The live host-label map that must remain explicit and non-contradictory is:

* `https://api.verifrax.net/` — execution surface
* `https://proof.verifrax.net/` — proof publication surface
* `https://auctoriseal.verifrax.net/` — authority issuance and authority reference surface
* `https://corpiform.verifrax.net/` — runtime and receipt reference surface
* `https://cicullis.verifrax.net/` — enforcement reference surface
* `https://verify.verifrax.net/` — public verification surface
* `https://sigillarium.verifrax.net/` — seal and archive reference surface
* `https://apply.verifrax.net/` — intake surface
* `https://docs.verifrax.net/` — documentation surface

This README must remain compatible with `artifact-0005` as the load-bearing authority → execution → verification → evidence boundary without claiming that this repository alone authors, proves, seals, or registers `artifact-0005` unless that role is actually true for this repository.


## Security

A profile-surface failure can distort public verification interpretation even when authored source remains unchanged.

Security issues here include:

* silent profile drift from upstream source material
* incorrect narrowing or widening of verifier interpretation
* misleading artifact-0005 interpretation text
* incorrect public-verifier boundary statements

## Contributing

A change is wrong if it:

* makes profiles appear upstream from the specification
* weakens the line that profiles do not change the spec
* weakens verifier linkage
* weakens artifact-0005 chain relevance
* introduces host claims not mechanically proved
* adds package/publication claims not backed by metadata reality
* replaces current truth with placeholder prose

## License

Apache License Version 2.0. See `LICENSE`.

## Adjacent sovereign surfaces

This repository is part of the Verifrax sovereign stack and remains bounded relative to:

- **[ANAGNORIUM](https://github.com/Verifrax/ANAGNORIUM)** for terminal recognition
- **[REGRESSORIUM](https://github.com/Verifrax/REGRESSORIUM)** for terminal recourse
