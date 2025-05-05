🚀 CI/CD Pipeline with GitHub Actions & Docker (No Cloud Needed)

A full-stack web application showcasing a complete CI/CD pipeline using GitHub Actions, Docker, and Docker Hub — deployed and tested locally without any cloud services.
Docker Hub : https://hub.docker.com/repositories/soneeya 

---

📁 Project Structure

.
├── .github/workflows # GitHub Actions workflow
│ └── ci-cd.yml
├── backend # Python Flask backend
│ ├── app.py
│ ├── requirements.txt
│ └── Dockerfile
├── frontend # React frontend
│ ├── src/
│ ├── public/
│ ├── Dockerfile
│ ├── package.json
│ └── ...
├── docker-compose.yml # Multi-container orchestration

---

## 🛠️ Tech Stack

- **Frontend**: React.js  
- **Backend**: Python Flask  
- **CI/CD**: GitHub Actions  
- **Containers**: Docker, Docker Compose  
- **Registry**: Docker Hub  

---

## ⚙️ CI/CD Workflow

GitHub Actions (`ci-cd.yml`) automates the following:

- ✅ **Install dependencies** for both frontend and backend
- 🧪 **Run unit tests**
- 🐳 **Build Docker images**
- 🚀 **Push to Docker Hub**

---

🐳 Local Deployment

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed locally
- Docker Hub account

🏗️ Steps

# Clone the repo
git clone https://github.com/your-username/ci-cd-app.git
cd ci-cd-app

# Run locally using Docker Compose
docker-compose up --build
Access your app at: http://localhost:3000

📸 Screenshots
Add screenshots of the running app here (frontend & backend working)

📦 Docker Hub
Frontend: soneeya/ci-cd-app-frontend
Backend: soneeya/ci-cd-app-backend

📄 License
This project is licensed under the MIT License.
