# Pennywise — Personal Finance Tracker

Pennywise is a lightweight personal finance tracker built with React and Vite. It uses Firebase Authentication (Google) and Firestore to store user transactions. The app provides an at-a-glance dashboard with balance, income/expenses, transaction table, and charts.

---

## Features

- Sign in with Google (Firebase Authentication)
- Add Income and Expense transactions (modal forms)
- Transaction history table
- Summary cards (Balance, Income, Expenses)
- Charts to visualize transactions over time
- Built with React + Vite, Firestore as backend

---

## Tech Stack

- Frontend: React (functional components), Vite
- UI: Ant Design + custom CSS
- Backend-as-a-Service: Firebase Authentication & Firestore
- Charts: @ant-design/charts
- Misc: react-firebase-hooks, react-router-dom, react-toastify

---

## Prerequisites

- Node.js (16+ recommended) and npm
- A Firebase project with:
  - Authentication enabled (Google sign-in)
  - Firestore database

---

## Quick Start

Clone the repo and install dependencies:

```bash
git clone https://github.com/Akki789/Pennywise-Personal-Finance-Tracker-.git
cd Pennywise-Personal-Finance-Tracker-/pennywise
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app at: http://localhost:5173 (Vite default port)

Available npm scripts (from package.json)

- npm run dev — start development server (Vite)
- npm run build — build production files
- npm run preview — locally preview the built production bundle
- npm run lint — run ESLint

---

## Build & Deployment

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Deploy to Vercel (repo includes a `vercel.json` rewrite for single-page routing). Basic steps:

1. Sign in to https://vercel.com and import the repository.
2. Set the same VITE_* environment variables in your Vercel project settings.
3. Configure the build command: `npm run build` and output directory: `dist` (Vite default).
4. Deploy.

Other static hosts that serve single-page apps (Netlify, Firebase Hosting, GitHub Pages) can also be used — ensure client-side routing is handled (rewrites to index.html).

---

## Project structure (high level)

- index.html — app entry
- src/
  - main.jsx — app bootstrap
  - App.jsx — routing (SignUp and Dashboard)
  - firebase.js — Firebase initialization (auth, firestore exports)
  - pages/
    - SignUp.jsx — landing/auth page
    - Dashboard.jsx — main app (transactions, charts)
  - components/ — modular UI pieces (Header, Cards, Charts, TransactionsTable, Modals, etc.)
- vite.config.js — Vite configuration
- vercel.json — rewrite for SPA routing on Vercel
- package.json — dependencies and scripts

---

## How to use

1. Start the app and sign in with Google.
2. On the Dashboard:
   - Click "Add Income" or "Add Expense" to open a modal, fill fields, and submit.
   - Transactions are saved to Firestore under `users/{uid}/transactions`.
   - View summary cards for total balance, total income, and total expenses.
   - View transaction history in the table and charts for visualization.

Notes:
- The app uses react-toastify for notifications on success/failure.
- Dates are expected/formatted as "YYYY-MM-DD".

---

## Troubleshooting

- If you see authentication errors, confirm the Google sign-in provider is enabled in Firebase and your OAuth redirect/domains include your dev URL (e.g., http://localhost:5173).
- If transactions do not appear, check Firestore rules and that documents are written to the path `users/{uid}/transactions`.
- If charts or UI behave oddly, check console for errors and ensure dependencies are installed.

---

## Contributing

Contributions are welcome. A minimal suggested workflow:

1. Fork the repository
2. Create a feature branch (git checkout -b feat/some-feature)
3. Make changes, run `npm run lint` and test locally
4. Open a pull request with a clear description of changes

Add tests and docs where appropriate.

---

---

## Contact

If you have questions or want to contribute, open an issue or PR on the repository.

Happy budgeting!
