# Inventory AAA Games API
![CI Pipeline](https://github.com/Robaz04/inventory-games-api/actions/workflows/ci.yml/badge.svg)
![Node.js](https://img.shields.io/badge/node.js-v18-green)
![Docker](https://img.shields.io/badge/docker-ready-blue)

## 1. Deskripsi Project
 
**Inventory AAA Games API** adalah RESTful API sederhana yang digunakan untuk mengelola data inventaris game AAA (kaset). API ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) terhadap data game seperti nama, genre, dan stok.
 
API ini dibangun menggunakan **Node.js** dan **Express.js**, serta telah terintegrasi dengan **Docker** dan **GitHub Actions** untuk mendukung proses deployment dan otomatisasi.
 
---
 
## 2. Dokumentasi API
 
### Endpoint List
 
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/api/games` | Mengambil semua game |
| `GET` | `/api/games/:id` | Mengambil game by ID |
| `POST` | `/api/games` | Menambahkan game baru |
| `PUT` | `/api/games/:id` | Mengupdate data game |
| `DELETE` | `/api/games/:id` | Menghapus game |
 
### Format Response
 
#### Success Response
 
```json
{
  "success": true,
  "message": "Data berhasil diambil",
  "data": [
    {
      "id": 1,
      "name": "God of War",
      "genre": "Action",
      "stock": 10
    }
  ]
}
```
 
#### Error Response
 
```json
{
  "success": false,
  "message": "Game tidak ditemukan"
}
```
 
---
 
## 3. Panduan Instalasi (Docker)
 
### Langkah Menjalankan Aplikasi
 
1. **Clone repository:**
 
```bash
git clone https://github.com/Robaz04/inventory-games-api.git
cd inventory-games-api
```
 
2. **Jalankan Docker:**
 
```bash
docker compose up --build
```
 
3. **Akses API di browser / Postman:**
 
```
http://localhost:3000/api/games
```
 
### Informasi Port
 
| Service | Host Port | Container Port |
|---------|-----------|----------------|
| API | 3000 | 3000 |
 
---

## 4. Panduan Instalasi (Local Development)
 
### Prasyarat
 
Pastikan sudah menginstall:
- **Node.js** (disarankan versi 18+)
- **npm** (Node Package Manager)
 
### Langkah Menjalankan Aplikasi
 
1. **Clone repository:**
 
```bash
git clone https://github.com/Robaz04/inventory-games-api.git
cd inventory-games-api
```
 
2. **Install dependencies:**
 
```bash
npm install
```
 
3. **Jalankan aplikasi:**
 
```bash
node app.js
```
 
atau jika menggunakan nodemon:
 
```bash
npx nodemon app.js
```
 
4. **Akses API di browser / Postman:**
 
```
http://localhost:3000/api/games
```
 
---

## 5. Alur Kerja Git
 
Project ini menggunakan **Feature Branch Workflow**:
 
- `main` → branch utama (final/stable)
- `develop` → branch pengembangan
- `feature/*` → branch untuk fitur baru
 
### Conventional Commits
 
Project ini menggunakan standar **Conventional Commits**, contoh:
 
- `feat: add CRUD endpoints for games`
- `fix: resolve jest permission issue in CI`
- `docs: add API documentation`
- `test: implement API testing with jest`
- `ci: configure GitHub Actions workflow`
- `chore: update project configuration`
 
---
 
## 6. Status Automasi (GitHub Actions)
 
Project ini telah menggunakan **GitHub Actions** untuk otomatisasi CI/CD.
 
### Workflow yang digunakan:
 
#### CI (Continuous Integration)
- Install dependencies (`npm ci`)
- Menjalankan unit test menggunakan **Jest**
 
#### CS (Security Scan)
- Melakukan pengecekan keamanan dengan:
 
```bash
npm audit --audit-level=low
```
 
### Status
 
- ✔️ **Build & Test:** Success
- ✔️ **Security Scan:** Success
 
---
 
## Kesimpulan
 
Project telah berhasil:
- RESTful API dengan CRUD
- Docker Containerization
- Git Workflow & Conventional Commits
- CI/CD dengan GitHub Actions
- Unit Testing dengan Jest