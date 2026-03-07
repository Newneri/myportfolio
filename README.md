# Abdelhamid Akhatar — Portfolio

Portfolio interactif développé avec Astro, Tailwind CSS et GSAP.  
Terminal animé + scroll cinématique + mode sombre/clair.

## Stack

- [Astro](https://astro.build) — framework
- [Tailwind CSS v4](https://tailwindcss.com) — styles
- [GSAP](https://greensock.com/gsap) + ScrollTrigger — animations
- [Typed.js](https://mattboldt.com/demos/typed-js) — effet typewriter

## Lancer le projet

```bash
pnpm install
pnpm dev
```

## Structure

```
src/
├── components/
│   ├── sections/        # About, Skills, Education, Projects, Contact
│   ├── Terminal.astro
│   ├── Nav.astro
│   └── ThemeToggle.astro
├── content/
│   ├── skills.json
│   ├── timeline.json
│   └── projects.json
├── layouts/
│   └── Layout.astro
├── styles/
│   └── global.css
└── pages/
    └── index.astro
public/
└── cv-baptiste-lecocq.pdf
```

## Modifier le contenu

Toutes les données sont dans `src/content/` — aucune modification des composants nécessaire.

| Fichier | Contenu |
|---|---|
| `skills.json` | Compétences et niveaux |
| `timeline.json` | Formation et expériences |
| `projects.json` | Projets réalisés |

Les infos personnelles (nom, dispo, email) sont dans `About.astro` et `Contact.astro`.