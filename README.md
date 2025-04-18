# 🛠️ Projet DevOps – Application Angular

![CI](https://github.com/<ton-user>/<ton-repo>/actions/workflows/ci.yml/badge.svg)

## 📦 Description

Ce projet est une application Angular conteneurisée avec Docker et orchestrée via Docker Compose.

Il met en œuvre une chaîne DevOps complète avec :

- 🐳 Docker  
- 🔁 GitHub Actions pour l’intégration continue (CI)  
- 🧩 Docker Compose pour l’orchestration locale  
- 🏷️ Gestion automatique de tags Git

---

## 🚀 Lancement de l'application

### 1. Prérequis

- Docker  
- Docker Compose  
- Git  
- Node.js (si vous souhaitez lancer l'app sans Docker)

---

### 2. Cloner le projet

```bash
git clone https://github.com/hedibousbih/DevopsTP.git
cd DevopsTP
``` 
### 3. Lancer l’application avec Docker Compose
```bash
docker compose up --build
```
L'application Angular sera accessible sur :
➡️ http://localhost:8080

## 🔄 Intégration Continue (CI)
À chaque push sur la branche main :

- 📦 L’application est installée (npm install) et buildée (ng build)

- 🐳 Une image Docker est construite

- ▶️ L’application est lancée avec Docker Compose

- ✅ Une vérification est faite avec curl

- 🧹 Les conteneurs sont stoppés automatiquement

- 🚀 Un tag Git est généré automatiquement (

- 📤 Une simulation de déploiement est affichée 

## Comment faire fonctionner ✅ 
```bash
docker compose up

```
il sera disponible a partir du naviguateur sur http://localhost:8080 

## 📂 Structure du projet
angular-devops-tp/
├── src/                   → Code source Angular
├── dist/                  → Fichiers générés après build
├── Dockerfile             → Image Docker de l'app
├── docker-compose.yml     → Orchestration multi-conteneurs
├── .github/workflows/     → Workflows GitHub Actions (CI/CD)
├── README.md              → Ce fichier

## 👨‍💻 Auteur
### Mohamed Hedi Bousbih