<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<div align="center">
  <h1>OpenShellOrg Docs</h1>
  <p>OpenShellOrg documentation hub. Antora site aggregating openshellorg projects (SOS + companion tooling docs).</p>
  <p>
    <a href="https://docs.opensh.org/">Explore the docs</a>
    ·
    <a href="https://github.com/openshellorg/docs/issues">Report Bug</a>
    ·
    <a href="https://github.com/openshellorg/docs/issues">Request Feature</a>
  </p>
</div>

<p align="center">
  <img src="assets/brand/logo-mark.svg" width="160" height="160" alt="OpenShellOrg" />
</p>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

Documentation hub for [OpenShellOrg](https://github.com/openshellorg) — Antora site aggregating org projects, plus SOS certification packages in this monorepo.

### Mission

Two complementary tracks:

1. **Standardized Operations Syntax (SOS)** — unify human-friendly CLI flag syntax and certify compliant tools ("Save Our Syntax").
2. **Structured shell architecture** — advocate typed data pipelines (endorse [Nushell](https://www.nushell.sh/)) so stdout is not forced to be both a pipe *and* a display canvas. Do **not** reinvent Nushell; document the model and ship helpers.

SOS remains the certification/flag work in this monorepo. Structured-shell direction lives in sibling repos (below).

### Related projects

| Repo | Role |
|------|------|
| [shell-architecture](https://github.com/openshellorg/shell-architecture) | Thesis and layers: structured I/O, SOS, terminals, Dev-Centr relationship |
| [nu-require](https://github.com/openshellorg/nu-require) | `validate()` — require / relaunch under Nushell; optional install offer |
| [nu-emit](https://github.com/openshellorg/nu-emit) | C-first API to emit structured rows (JSONL) without hand-rolling JSON |

**Name collision:** We are not [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell) (agent sandbox runtime). Different problem, similar words.

Dev-Centr **recommends/configures** Nushell for developers; OpenShellOrg **standardizes and tools**. Keep the orgs aligned, not merged.

### Repository structure

```
docs/                      # this repo (openshellorg/docs)
├── apps/
│   └── main/              # Main website (SolidStart)
├── docs/                  # Antora hub component (SOS, philosophy, ecosystem)
├── packages/
│   ├── sos-grammar/       # @sos/grammar
│   └── sos-validator-core/
├── assets/brand/
├── antora-playbook.yml    # production (aggregates sibling repos)
├── antora-playbook-local.yml
└── package.json
```

| Path | Description |
|------|-------------|
| `apps/main` | Organization website (SolidStart) |
| `docs/` | Hub Antora component (SOS + org pages) |
| `@sos/grammar` | Grammar definitions for parsing SOS syntax |
| `@sos/validator-core` | Core validation logic for SOS compliance |

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+)
- [pnpm](https://pnpm.io/) (v10+)

```bash
git clone https://github.com/openshellorg/docs.git
cd docs
pnpm install
```

## Usage

```bash
# Apps / packages
pnpm dev
pnpm build

# Docs (Antora)
pnpm docs
# or local sibling checkouts:
pnpm docs:local
```

Published docs: https://docs.opensh.org/

Org site: https://openshellorg.github.io/

See [CHANGELOG.adoc](CHANGELOG.adoc).

## Contact

Open Shell Org — openshell@devcentr.org

Project Link: https://github.com/openshellorg/docs

Site: https://openshellorg.github.io

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/openshellorg/docs.svg?style=for-the-badge
[contributors-url]: https://github.com/openshellorg/docs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/openshellorg/docs.svg?style=for-the-badge
[forks-url]: https://github.com/openshellorg/docs/network/members
[stars-shield]: https://img.shields.io/github/stars/openshellorg/docs.svg?style=for-the-badge
[stars-url]: https://github.com/openshellorg/docs/stargazers
[issues-shield]: https://img.shields.io/github/issues/openshellorg/docs.svg?style=for-the-badge
[issues-url]: https://github.com/openshellorg/docs/issues
