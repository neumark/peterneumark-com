# peterneumark.com

Peter Neumark's site: a [Grove](https://github.com/immediately-run/grove) wiki
served by [immediately.run](https://immediately.run) at
<https://peterneumark.com>.

This repo holds content only. `content/immediately.run.json` marks `content/`
as a wiki (`opensWith: open-wiki`), so immediately.run renders it with stock
Grove. There is no app code and nothing to build.

- **Write**: add a post as `content/writing/<slug>.mdx` tagged `writing` (plus
  its topic tags); it shows up in the front page's ledger and on the tags page.
  `content/home.mdx` is the front page; an entry tagged `ui/nav` gets a top-nav
  item, ordered by `order` (Writing · Tags · About).
- **Look**: `content/_layout.mdx` is the shell (top nav, no sidebar, no footer);
  `content/_style/site.mdx` is the content stylesheet the home entry declares
  (token declarations only). The Source Serif 4 reading face sits in
  `content/_style/fonts/` (OFL, license alongside), waiting on Grove accepting a
  `fonts:` list from a corpus. Underscore-prefixed files are structure, never
  pages.
- **Safe rendering**: `render: safe` on `content/home.mdx` renders every entry
  through Grove's non-executable renderer. So: no `import`/`export` lines, no
  `{…}` expressions (MDX comments included: `{/* … */}` renders as text), string-only
  component attributes, and only Grove's built-in components (`Lede`, `Callout`,
  `DocList`, `Quote`, `TagCloud`, …).
- **Preview**: <https://immediately.run/present/github/neumark/peterneumark-com/main/files/content/home.mdx>.
- **Engine**: the viewer is whatever Grove the platform binds to `open-wiki`
  (`immediately-run/grove@main`), so engine updates arrive without changes here.
- **Cache**: `.github/workflows/cache.yml` publishes a pre-built zip to this
  repo's GitHub Pages on every push to `main`, so anonymous visitors load fast.
  Enable it once under **Settings → Pages → Source: GitHub Actions**.

The domain is an immediately.run vanity host: the host's config
(`immediately-run-site-main`, `src/config.data.json`) maps `peterneumark.com`
to this repo, and `www.peterneumark.com` redirects to the apex.
