# Portfolio Website — Varsha Venkataramaiah

A personal portfolio landing page built with plain HTML, CSS, and JavaScript for
Software Development Internship · Week 1 · Assignment 1.

## Sections
Hero · About · Skills · Projects · Credentials · Contact · Footer

## Features
- Responsive layout (mobile → desktop)
- Light / dark theme toggle (remembers your choice)
- Mobile hamburger menu
- Smooth-scroll navigation with active-section highlighting
- Contact form with client-side validation (opens your mail client via `mailto`)

## Project structure
```
portfolio-website/
├── index.html
├── style.css
├── script.js
├── images/
│   └── profile.jpeg
└── README.md
```

## Run locally
Open `index.html` in a browser — no build step. Or serve it:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Before you ship
- **Profile photo:** save your image as `images/profile.jpeg` (a "VV" placeholder shows until you do). A portrait crop around 600×750px fits the 4:5 frame best.
- **Contact details** (email, LinkedIn, GitHub) and the form's `CONTACT_EMAIL` — already filled in. ✓
- **Project links:** the `Details →` link in each project card is currently commented out. Uncomment it and drop in a real repo URL for any project you want to make clickable.

## Deploy (GitHub Pages)
1. Push this folder to a **public** GitHub repo.
2. Repo → **Settings → Pages** → Source: `main` branch, `/root`.
3. Your live link appears at `https://<username>.github.io/<repo>/`.

Alternatives: drag the folder into [Netlify](https://netlify.com), or run
`vercel` from [Vercel](https://vercel.com).

## Submit
- GitHub repository link
- Live website link
