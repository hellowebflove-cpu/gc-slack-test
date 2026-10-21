# Ground Test Store — website repo

Next.js 16 (App Router) + Payload CMS 3 + Postgres, deployed on Vercel.
The site owner edits the site by asking Claude in Slack or on claude.ai/code. The owner is not a developer.

## Before you change anything
1. Read `.claude/rules/client-editing.md` — what you may change, what you must not, and how to talk to the owner.
2. Install dependencies: `npm ci`.

## How to check your work
- `npx tsc --noEmit` — types must pass.
- `npm run lint` — must pass.
- Do NOT run `npm run build` or `npm run dev`: they need the database, and this environment has no database access by design. Vercel builds every pull request and gives a preview link — that is the real check.

## Where things are
- Pages written in code: `src/app/(frontend)/**/page.tsx` (for example `about/page.tsx`).
- Announcement strip above the header: `src/components/AnnouncementBar/index.tsx`.
- Header and footer links are managed in the admin panel (Payload → Globals → Header / Footer), not in code.
- Pages and posts created in the admin panel (Payload → Pages / Posts) are content, not code.

## Workflow
- Always work on a new branch and open a pull request. Never push to `main`.
- One request = one pull request, small and focused.
- In the pull request description, explain the change in plain English for the owner and say what to look at on the preview.
