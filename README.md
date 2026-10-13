# peterneumark.com

Peter Neumark's site: a [Grove](https://github.com/immediately-run/grove) wiki
served by [immediately.run](https://immediately.run) at
<https://peterneumark.com>.

- **Write**: add or edit `.mdx` files under `content/`. `content/home.mdx` is
  the front page; an entry tagged `writing` shows up in its feed; an entry
  tagged `ui/nav` gets a top-nav item, ordered by `order`.
- **Preview**: <https://immediately.run/present/github/neumark/peterneumark.com/main/files/content/home.mdx>.
- **Engine**: `@immediately-run/grove` is pinned to a grove commit in `package.json`
  (immediately.run mounts it from GitHub). Upgrade it by
  bumping the commit sha (keep `@immediately-run/sdk` within Grove's peer range).
- **Cache**: `.github/workflows/cache.yml` publishes a pre-built zip to this
  repo's GitHub Pages on every push to `main`, so anonymous visitors load fast.
  Enable it once under **Settings → Pages → Source: GitHub Actions**.

The domain is an immediately.run vanity host: the host's config maps
`peterneumark.com` to this repo, and `www.peterneumark.com` redirects to the
apex.
