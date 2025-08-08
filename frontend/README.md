# Lost Track (Astro — Blog + SEO)

Astro + Tailwind + MDX + content collections + sitemap + robots.

## Dev
```
npm install
npm run dev
```

## Build
```
npm run build
```
Output: `dist/`

Generated: 2025-08-07T21:42:13.565642Z


## Dynamic Blog (Ghost) & Comments (Giscus)
Set these env vars:
```
PUBLIC_GHOST_URL=https://YOUR_GHOST_URL
PUBLIC_GHOST_CONTENT_KEY=YOUR_CONTENT_API_KEY
PUBLIC_BUTTONDOWN_USERNAME=losttrackmusic
```


## GitHub Issues as CMS (Free, dynamic, comments via Giscus)

Set these environment variables (optional defaults shown):
```
PUBLIC_GITHUB_OWNER=selama1
PUBLIC_GITHUB_REPO=losttrackmusic
PUBLIC_GITHUB_BLOG_LABEL=blog
```
**How to post:** open a new Issue in `selama1/losttrackmusic` with the label `blog`.  
Write in Markdown, drag/drop images into the issue. The blog index will list it instantly.  
The post URL will be `/blog/{number}-{slugified-title}/` and comments are linked via Giscus mapped by **issue number**.


### Blog (GitHub Issues) — Troubleshooting
If your issue doesn't show up on `/blog`:
- Ensure the **repo is public** (client-side GitHub API can't read private repos).
- The issue must be **Open** (closed issues are hidden).
- The label must match `PUBLIC_GITHUB_BLOG_LABEL` (default `blog`) — label names are matched **case-insensitively**.
- Check your browser DevTools → **Network** for the GitHub API request and status.
- Rate limits: unauthenticated requests allow ~60/hour per IP. If needed, add a read-only token behind an API route.
