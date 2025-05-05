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
![UI](https://github.com/user-attachments/assets/57f7e127-cdc9-4d37-b96a-ea91c531aabb)
![Github Actions ](https://github.com/user-attachments/assets/0304538c-952b-4345-a7f9-c934fe2700d8)
![docker desktop ](https://github.com/user-attachments/assets/f2421dad-f92a-4b57-8ee3-f4139da2e149)
![images](https://github.com/user-attachments/assets/98461d0d-c933-4803-9c39-27bf59a18a97)
![Tm 1](https://github.com/user-attachments/assets/10903eac-1913-4748-b33b-3057de6650dd)
![Tm 2](https://github.com/user-attachments/assets/8e6a5e5d-c14b-447f-802b-e8b38730eca8)

📦 Docker Hub
Frontend: soneeya/ci-cd-app-frontend
Backend: soneeya/ci-cd-app-backend

📄 License
This project is licensed under the MIT License.
