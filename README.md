# Portfolio - Liza Bourouina

Portfolio personnel de Liza Bourouina, Développeuse Full Stack.

## Technologies utilisées

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Installation et développement local

Prérequis : Node.js et npm installés ([installer avec nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

```sh
# Étape 1 : Installer les dépendances
npm install

# Étape 2 : Lancer le serveur de développement (avec rechargement automatique)
npm run dev
```

Le site sera accessible sur http://localhost:8080

## Build de production

```sh
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## Déploiement

Ce projet peut être déployé sur n'importe quelle plateforme d'hébergement statique, par exemple :

- **Netlify** : connectez votre repo GitHub et Netlify détecte automatiquement la config Vite
- **Vercel** : connectez votre repo GitHub, build command `npm run build`, output directory `dist`
- **GitHub Pages**, **Cloudflare Pages**, etc.

## Domaine personnalisé

Une fois déployé sur Netlify/Vercel/autre, vous pouvez connecter votre propre nom de domaine directement depuis les paramètres de la plateforme d'hébergement choisie.

## Backend

Un petit serveur backend (`/backend`) gère l'envoi d'emails depuis le formulaire de contact, via Gmail (Nodemailer). Pensez à ne jamais publier le fichier `backend/.env` (il contient des identifiants sensibles) — il doit rester listé dans `.gitignore`.

### Faire fonctionner le formulaire de contact en local

Le frontend (Vite) et le backend (Express) sont deux serveurs séparés qui doivent tourner **en même temps**.

**Option 1 — tout lancer en une commande (recommandé) :**
```sh
npm install
cd backend && npm install && cd ..
npm run dev:all
```
Cela démarre le frontend (port 8080/8081) et le backend (port 3000) en parallèle.

**Option 2 — dans deux terminaux séparés :**
```sh
# Terminal 1
npm run dev

# Terminal 2
cd backend
npm install
npm run start
```

Le formulaire enverra alors un vrai email à l'adresse définie dans `backend/.env` (`EMAIL_USER`), avec le mail de la personne qui a rempli le formulaire en "répondre à".

### En production

Le backend doit être déployé séparément du site (ex: Render, Railway, Fly.io) car Netlify/Vercel n'hébergent pas de serveur Node classique. Une fois déployé, remplacez l'URL `http://localhost:3000/api/contact` dans `src/components/ContactSection.tsx` par l'URL publique de votre backend déployé.
