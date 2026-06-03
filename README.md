# 📌 Todo API - Node.js + Docker

## 🎯 Objectif du projet

Ce projet est une **API REST de gestion de tâches (Todo API)** développée avec **Node.js et Express**, et entièrement **dockerisée**.  
L'objectif est de comprendre les bases du développement backend et du DevOps (Docker + tests + API CRUD).

---

## 🚀 Fonctionnalités

L'API permet de gérer des tâches avec un CRUD complet :

- ➕ Créer une tâche
- 📋 Lister toutes les tâches
- 🔍 Récupérer une tâche par ID
- ✏️ Modifier une tâche
- ❌ Supprimer une tâche

---

## 📦 Modèle de donnée

Une tâche contient :

```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "status": "todo",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

---

## 🏗️ Structure du projet

```
todo-api/
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── tasks.js
│   ├── models/
│   │   └── task.js
├── tests/
│   ├── unit/
│   │   └── task.test.js
│   ├── integration/
│   │   └── api.test.js
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 🐳 Dockerisation

Le projet est entièrement conteneurisé avec Docker.

- **`Dockerfile`** — permet de builder l'image Node.js de l'API.
- **`docker-compose.yml`** — permet de lancer l'API facilement avec Docker Compose.

---

## ▶️ Lancer le projet

### 1. Build + run de l'API

```bash
docker compose up --build
```

L'API sera accessible ici : [http://localhost:5000](http://localhost:5000)

---

## 🧪 Lancer les tests

Les tests sont exécutés dans Docker avec **Jest** + **Supertest**.

```bash
docker compose run api npm test
```

**Résultat attendu :**

- ✅ Tests unitaires OK
- ✅ Tests d'intégration OK
- ✅ Toutes les routes CRUD validées

---

## 🛣️ Routes de l'API

| Méthode  | Route        | Description               |
|----------|--------------|---------------------------|
| `GET`    | `/tasks`     | Récupérer toutes les tâches |
| `GET`    | `/tasks/:id` | Récupérer une tâche        |
| `POST`   | `/tasks`     | Créer une tâche            |
| `PUT`    | `/tasks/:id` | Modifier une tâche         |
| `DELETE` | `/tasks/:id` | Supprimer une tâche        |

---

## 🧠 Gestion de projet (Agile / Kanban)

Projet réalisé en mode solo avec une organisation type Agile.

### 📌 Étapes de développement

1. Initialisation du projet Node.js
2. Création de l'API REST (CRUD)
3. Ajout des tests unitaires et d'intégration
4. Dockerisation complète du projet

### 📋 Organisation type Kanban

| To Do | In Progress | Done |
|-------|-------------|------|
| ...   | ...         | ...  |

---

## ⚙️ Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/ladjs/supertest)

