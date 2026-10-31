# KS Creative Studio – Portfolio
React + Vite portfolio. All projects are self-initiated concept work.

## Run locally
npm install && npm run dev

## Edit
- Email: src/data/config.js (contact form uses mailto once set)
- Projects: src/data/projects.js (add `image: '/images/file.jpg'` and put the file in public/images/)
- Services / skills: src/data/services.js, skills.js

## Deploy on Vercel
1. Push to GitHub (git init, git add ., git commit, git remote add origin <url>, git push -u origin main)
2. vercel.com > Add New Project > import repo
3. Framework: Vite | Install: npm install | Build: npm run build | Output: dist
4. Deploy. Every push to main redeploys automatically.
Common fixes: "vite not found" -> run npm install and commit package.json; case-sensitive file names on Linux (import paths must match exactly).
