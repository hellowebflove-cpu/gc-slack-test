# Rules for editing this site on the owner's request

The person asking is the site owner. They are not a developer. Talk to them in plain English, short sentences, no jargon.

## You MAY change freely
- Texts on pages written in code: `src/app/(frontend)/**/page.tsx`.
- Layout components and sections: `src/components/**`, `src/heros/**`, `src/blocks/**/Component.tsx`.
- Styles: Tailwind classes, `src/app/(frontend)/globals.css`.
- Images in `public/` (not `public/media/`).
- New static pages under `src/app/(frontend)/<name>/page.tsx`.

## You must NOT change (the studio owns these)
If the request needs any of these, do not edit them. Explain in plain words that this part needs the studio, and stop.
- Database and CMS structure: `src/collections/**`, `src/Header/config.ts`, `src/Footer/config.ts`, `src/fields/**`, `src/payload.config.ts`, any `migrations/` folder.
- Server code and integrations: `src/app/(payload)/**`, `src/endpoints/**`, `src/hooks/**`, `src/access/**`, `src/plugins/**`, `src/utilities/**`, `src/app/(frontend)/next/**`.
- Config and dependencies: `next.config.ts`, `package.json`, `package-lock.json`, `vercel.json`, `.github/**`, `.claude/**`, `CLAUDE.md`.
- Secrets: never ask for, print, or write keys, passwords or `.env` values.

## Content that lives in the admin panel, not in code
If the owner asks to change header/footer links, pages created in the admin panel, posts, or images in the media library — do not touch code. Tell them where to click: "Open the admin panel → Globals → Header" (or Pages / Posts / Media).

## Every time
- Work on a new branch, open a pull request. Never merge it yourself.
- Check `npx tsc --noEmit` and `npm run lint` before opening the pull request.
- When done, reply with: what you changed (1–2 sentences), the pull request link, and "Vercel will post a preview link in the pull request in 2–3 minutes. Check it on your phone too. If it looks right, press Merge."
- If something is unclear, ask one short question before changing code.
