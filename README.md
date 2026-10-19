<div align="center">

# lsync

**Self-hosted sync server for Lampa**

Favorites, timestamps, settings, and plugins — the same on your TV, phone, and browser.
Your data, kept at home — not on someone else's server.

<p align="center">
  <a href="https://github.com/timsvensonliveru-debug/lsync/releases/latest/download/lampa-sync-windows.exe"><img alt="Download for Windows" src="assets/download-windows.svg" width="440"></a><br>
  <a href="https://github.com/timsvensonliveru-debug/lsync/releases/latest/download/lampa-sync-macos.zip"><img alt="Download for macOS" src="assets/download-macos.svg" width="440"></a><br>
  <a href="https://github.com/timsvensonliveru-debug/lsync/releases/latest/download/lampa-sync-linux.zip"><img alt="Download for Linux" src="assets/download-linux.svg" width="440"></a><br>
  <a href="https://github.com/timsvensonliveru-debug/lsync/releases/latest/download/lampa-sync-qnap-umbrel-docker.zip"><img alt="Download for QNAP · Umbrel · Docker" src="assets/download-qnap-umbrel-docker.svg" width="440"></a>
</p>

[Install](#install) · [How it works](#how-it-works) · [Security](#security) · [All releases](../../releases)

![Status](https://img.shields.io/badge/status-beta-orange)
![Languages](https://img.shields.io/badge/languages-English%20%C2%B7%20Russian-555555)

</div>

---

## Features

| | |
|---|---|
| 💾 **Backups** | Device settings and the whole database backed up to your Telegram |
| ⚙️ **Settings** | Interface, parser, TorrServer — grouped, and you choose what to sync |
| 🧩 **Plugins** | One shared list for the whole family; each profile keeps its own enabled set |
| 👨‍👩‍👧 **Profiles** | A profile for every family member; a kids' profile without the extra history |
| ⭐ **Favorites** | Bookmarks, Likes, Watch Later, and your own categories — on every device |
| ⏱ **Timestamps** | Start a movie on the TV, pick it up on your phone right where you left off |
| 📺 **Remote control** | Works with a TV remote, a mouse, and touch |

Works on your home network and over the internet (a permanent address via Tailscale — no port forwarding).
The interface is in English and Russian and follows your Lampa language.

## Install

The links always lead to the latest version:

| Where the server runs | Download | How to install |
|---|---|---|
| **Windows** (home PC) | [lampa-sync-windows.exe](../../releases/latest/download/lampa-sync-windows.exe) | Run it and follow the wizard |
| **macOS** | [lampa-sync-macos.zip](../../releases/latest/download/lampa-sync-macos.zip) | Unzip to `~/lampa-sync`, then in a terminal: `sh install.sh` |
| **Linux** | [lampa-sync-linux.zip](../../releases/latest/download/lampa-sync-linux.zip) | Unzip to `~/lampa-sync`, then in a terminal: `sh install.sh` |
| **QNAP · Umbrel · Docker** | [lampa-sync-qnap-umbrel-docker.zip](../../releases/latest/download/lampa-sync-qnap-umbrel-docker.zip) | Instructions inside; image `ghcr.io/timsvensonliveru-debug/lampa-sync` |

Then in Lampa: **Settings → Extensions → Add plugin** → the address your server shows. A new device is approved
in the server's web admin, with a button in Telegram, or via an invite link — which lets it in right away.

The server updates itself (at night) — and only installs versions signed by the author.

## How it works

```text
  TV / phone / browser                      Your home server
  ┌──────────────────────┐                 ┌───────────────────────────────┐
  │ Lampa + lsync loader │ ◄── https ────► │ lsync: favorites, timestamps, │
  │                      │                 │ settings, plugins             │
  └──────────────────────┘                 │ web admin · Telegram bot      │
                                           └───────────────────────────────┘
```

- **Loader** — a tiny plugin you add to Lampa. It signs in to your server and receives the main part from it,
  signed by the author.
- **Server** — yours: on a PC, a NAS, or a mini server. Without it Lampa works as usual; changes are delivered
  once the server is reachable again.
- **Telegram** — optional: the bot approves device sign-ins and drops a daily database backup into your group.

## Security

- Your data lives only on your server. No third-party servers.
- The code Lampa receives and every server update are **signed with the author's key**. The signature is checked
  on every start and before every update — they can't be swapped out, even through a compromised server or release.
- Signing in to Telegram (backups, bot setup) happens only for the duration of the operation, then it signs out.
- The web admin opens only on the server itself (or from your home network on a NAS) and only with its key.

## Status & feedback

The project is in **beta testing**. Found a bug or have an idea? [Open an issue](../../issues/new) — include your
platform, the version (shown in the web admin), and what happened.

<sub>lsync is an independent project, not affiliated with the authors of Lampa or CUB.</sub>
