# 🦷 DentaFlow – Monorepo DevSecOps

> **Python (FastAPI) & React (Vite) – CI/CD, Docker, SonarCloud**

DentaFlow est une application de gestion de cabinet dentaire, utilisée comme support d'un exercice DevSecOps complet : qualité de code, sécurité, Docker, CI/CD et intégration avec une plateforme d'analyse.

---

## 📁 1. Architecture du projet

Le projet est organisé en **monorepo** avec séparation claire entre backend et frontend.

```text
.
├── backend/
│   ├── src/
│   │   ├── api/
│   │   │   └── main.py
│   │   ├── models/
│   │   └── services/
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   ├── docker/
│   ├── docs/
│   ├── logs/
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── public/
│   ├── tests/
│   ├── docs/
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
├── sonar-project.properties
├── .github/
│   └── workflows/
│       └── ci-cd.yml
└── .gitignore
```

| Composant | Description |
|-----------|-------------|
| `backend/` | API REST en Python (FastAPI), accès base de données, logique métier |
| `frontend/` | Application React (Vite), interface utilisateur |
| `docker-compose.yml` | Orchestration des services (PostgreSQL, Redis, backend, frontend) |
| `.github/workflows/ci-cd.yml` | Pipeline CI/CD (lint, tests, scan, build d'images) |
| `sonar-project.properties` | Configuration de la plateforme de qualité |

---

## 🛠️ 2. Technologies utilisées

### Backend
| Technologie | Usage |
|-------------|-------|
| Python 3.12 | Langage principal |
| FastAPI | Framework API REST |
| Uvicorn | Serveur ASGI |
| PostgreSQL | Base de données |
| Redis | Cache / sessions |

### Frontend
| Technologie | Usage |
|-------------|-------|
| React 19 | Framework UI |
| Vite | Build tool |
| Vitest | Tests unitaires |
| Testing Library | Tests de composants |
| ESLint | Linting |

### Infra & DevOps
| Technologie | Usage |
|-------------|-------|
| Docker | Conteneurisation |
| docker-compose | Orchestration locale |
| GitHub Actions | CI/CD |
| SonarCloud | Qualité & sécurité |

---

## 🚀 3. Installation et exécution en local

### 3.1 Prérequis

- Git
- Python 3.12 + pip
- Node.js 20 + npm
- Docker & docker-compose
- Compte GitHub

### 3.2 Cloner le dépôt

```bash
git clone git@github.com:VOTRE-USERNAME/dentaflow-project.git
cd dentaflow-project
```

### 3.3 Backend (Python – FastAPI)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows : venv\Scripts\activate
pip install --upgrade pip
pip install -r requirements.txt
```

Copie le fichier d'exemple d'environnement :

```bash
cp .env.example .env
```

Lance le serveur :

```bash
python3 -m uvicorn src.api.main:app --host 0.0.0.0 --port 8000 --reload
```

| Endpoint | URL |
|----------|-----|
| 🏥 API | http://localhost:8000 |
| 📚 Swagger | http://localhost:8000/docs |
| 📖 ReDoc | http://localhost:8000/redoc |

### 3.4 Frontend (React – Vite)

```bash
cd frontend
npm install
npm run dev
```

| Endpoint | URL |
|----------|-----|
| 🌐 App | http://localhost:5173 |

### 3.5 Exécution via Docker Compose

```bash
docker-compose up --build
```

| Service | URL |
|---------|-----|
| Backend | http://localhost:8000 |
| Frontend | http://localhost:3000 |
| PostgreSQL | localhost:5432 |
| Redis | localhost:6379 |

---

## ✅ 4. Qualité de code et tests

### 4.1 Backend

```bash
cd backend

# Lint
flake8 src tests

# Tests + couverture
pytest --cov=src --cov-report=term-missing
```

### 4.2 Frontend

```bash
cd frontend

# Lint
npm run lint

# Tests + couverture
npm run test
```

---

## 🔄 5. CI/CD

Pipeline configuré dans `.github/workflows/ci-cd.yml`

### 5.1 Déclencheurs

| Événement | Branches |
|-----------|----------|
| `push` | `main`, `develop` |
| `pull_request` | `main` |

### 5.2 Jobs

#### 🔍 quality-check
- ✅ Installation des dépendances backend et frontend
- ✅ Lint backend (flake8) et frontend (ESLint)
- ✅ Tests backend (pytest) et frontend (Vitest) avec couverture
- ✅ Scan qualité et sécurité via SonarCloud
- ✅ Audit de sécurité des dépendances (npm audit)
- ✅ Scan des vulnérabilités (dependency-review)

#### 🐳 docker-build
- ✅ Build de l'image Docker backend
- ✅ Build de l'image Docker frontend

#### 🚀 deploy-staging
- Se déclenche sur la branche `develop`
- Simule un déploiement vers staging

### 5.3 Secrets

| Secret | Description |
|--------|-------------|
| `SONAR_TOKEN` | Token d'authentification SonarCloud |
| `GITHUB_TOKEN` | Fourni automatiquement par GitHub |

---

## 🔒 6. Bonnes pratiques & sécurité

- ✅ Fichiers `.env` et secrets exclus via `.gitignore`
- ✅ Logs applicatifs non versionnés
- ✅ Linting strict et règles de sécurité JavaScript
- ✅ Analyse de qualité et sécurité automatisée
- ✅ Tests obligatoires avant build Docker

---

## 📝 7. Commandes utiles

| Action | Commande |
|--------|----------|
| Backend local | `cd backend && python3 -m uvicorn src.api.main:app --reload` |
| Frontend local | `cd frontend && npm run dev` |
| Docker (tous services) | `docker-compose up --build` |
| Lint backend | `cd backend && flake8 src tests` |
| Tests backend | `cd backend && pytest --cov=src` |
| Lint frontend | `cd frontend && npm run lint` |
| Tests frontend | `cd frontend && npm run test` |

---

## 📄 License

MIT © DentaFlow Team (Johan DELEM - Diego GARCIA)
