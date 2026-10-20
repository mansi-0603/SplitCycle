# SplitCycle

> Share expenses. Not the headache.

A web app for roommates and co-living groups to manage **shared subscriptions, recurring bills, expenses and settlements** in one place. Built with React + Vite.

> **Project name:** SplitCycle (split bills, rotate who pays). To rename it, edit `BRAND` in `src/config.js`, then update `<title>` in `index.html` and the `name` in `package.json`.

## Features

| Feature | What it does |
| --- | --- |
| **Payment Rotation** | Automatically rotates who pays a recurring bill each month |
| **Renewal Pulse** | Asks everyone before a subscription renews whether they still want it |
| **Debt Nullification** | Offsets debts across expenses to cut down on unnecessary transfers |

## Status

Front-end prototype. All data is currently mock data defined in the page files, and Login/Register just navigate to the dashboard (no backend yet).

| Page | Route | State |
| --- | --- | --- |
| Landing | `/` | Done |
| Login | `/login` | UI + form state |
| Register | `/register` | UI + validation |
| Dashboard | `/dashboard` | UI, Renewal Pulse buttons work |
| Groups | `/groups` | UI |
| Subscriptions, Expenses, Balances, Simulator, Settings | `/subscriptions` ... | "Coming soon" placeholders |

## Tech stack

- [React](https://react.dev/) 19
- [React Router](https://reactrouter.com/) 7
- [Vite](https://vite.dev/)
- Plain CSS (one file per page/component)

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview the production build
```

## Project structure

```
src/
├── main.jsx                # entry point
├── App.jsx                 # routes
├── config.js               # brand name (change it here)
├── index.css               # design tokens (colors, fonts), buttons, avatars
├── components/
│   ├── AppLayout.jsx/.css  # top bar + page outlet for logged-in pages
│   ├── TopNav.jsx          # pill navigation (NavLink, auto "active" state)
│   ├── AuthShell.jsx       # split-screen layout for Login/Register
│   ├── Logo.jsx
│   └── Avatar.jsx
└── pages/
    ├── Landing.jsx/.css
    ├── Login.jsx
    ├── Register.jsx
    ├── Auth.css
    ├── Dashboard.jsx/.css
    ├── Groups.jsx/.css
    └── ComingSoon.jsx
```

## Design system

Light, warm theme with a violet + coral accent. All colors, fonts and radii are CSS variables at the top of `src/index.css`, so re-theming means editing one block.

- **Fonts:** Bricolage Grotesque (headings) and DM Sans (body), loaded from Google Fonts in `index.html`
- **Layout:** sticky top navigation with a pill menu instead of a sidebar; bento-style cards on the landing page and dashboard
- **Reusable classes:** `.btn` (`-primary`, `-brand`, `-ghost`, `-white`, `-lg`), `.card`, `.chip`, `.avatar`

## Roadmap

- [ ] Backend + real authentication (e.g. Node/Express or Supabase/Firebase)
- [ ] Create/edit groups and invite members
- [ ] Subscriptions CRUD with renewal dates
- [ ] Expenses and split logic
- [ ] Balances + debt nullification algorithm
- [ ] Payment rotation scheduling
- [ ] Renewal Pulse notifications
- [ ] Simulator (what-if for adding/removing members or subscriptions)
- [ ] Protected routes

## What changed in this version

- Full visual redesign: new light theme, typography, top navigation, bento landing page, split-screen auth pages, redesigned dashboard (balance card, spending chart, rotation tracker) and group cards (settled-up progress, search)
- Shared `AppLayout`/`TopNav` instead of a duplicated sidebar; React Router `Link`/`NavLink` instead of full-page-reload anchors
- Login/Register: controlled inputs, labels, show/hide password, validation
- Placeholder pages so no navigation link leads to a blank screen
- Removed unused Vite template files and styles

## Acknowledgements

This project started from an existing open-source project: **[add original repo name and link here]**. The UI, layout and styling have since been redesigned.

## License

MIT
