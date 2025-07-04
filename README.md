![](./public/organizai.png)
# OrganizAi
Your newest ally to organise your life.

## Introduction
A project under development to facilitate the orginisatio of daily tasks.

Organizai is a clean, minimalistic, and responsive task list app that helps you manage your daily to-dos with ease. Whether you're crushing deadlines or just trying to remember to water your plants — this app keeps you on track.


## Features
- ✅ Add, edit, and delete tasks
- 📅 Mark tasks as complete or pending
- 📂 Organize tasks by category
- 🌙 Light/Dark mode toggle
- 🔄 Data saved locally (localStorage or backend ready)
- 📱 Mobile-first, responsive design


## Tech Stack
- TypeScript
- React 19
- Tailwind CSS
- Vite
- React Hook Form + Zod (form validation)
- Shadcn UI (accessible components)
- Lucide React (icons)
- ESLint (plugins already configured)
- useState

## How to use

1 - Clone the repository
```bash
git clone https://github.com/tatyanepgoncalves/organizai
```

2. Access the project folder
```bash
cd organizai
```

3. Install the dependencies
```bash
npm install
```

4. Run project
```bash
npm run dev
```

Go to `http://localhost:5173` in your browser.

## Folder structure
```bash
organizai/
├── public/
│   └── organizai.png
│  
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── pagination.tsx
│   │   │ 
│   │   ├── Footer.tsx
│   │   ├── Modal.tsx
│   │   ├── TaskList.tsx
│   │   └── TaskFilter.tsx
│   │   
│   ├── data/
│   │   └── index.ts
│   │   
│   ├── hooks/
│   │   └── useTodo.ts
│   │   
│   ├── lib/
│   │    └── utils.ts
│   ├── App.tsx
│   ├── global.css
│   ├── main.tsx
│   └── vite-env.d.ts
│   
├── gitignore
├── components.json
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── README-Pt.md
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Live Demo
- Check it out live: [OrganizAi](https://organizai.vercel.app/)


## Contributing
Feel free to fork this repo, open issues, or send pull requests!
This is a beginner-friendly project — perfect to practice React and Shadcn/UI fundamentals.

## License 
MIT License - do whatever you want, just don't sue me.

Built with 💜 by **Tatyane Gonçalves**.