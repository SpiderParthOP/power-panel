#!/bin/bash
echo "🔧 Power Panel Installer"

# Update & install dependencies
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose nodejs npm git

# Clone panel if not already cloned
if [ ! -d "power-panel" ]; then
  git clone https://github.com/YOUR_USERNAME/power-panel.git
  cd power-panel
else
  echo "⚠️ Folder 'power-panel' already exists. Skipping clone."
fi

# Setup Backend
cd backend
npm install
cd ..

# Setup Docker Compose
sudo docker-compose up --build -d

echo ""
echo "✅ Power Panel is installed and running!"
echo "🔗 Frontend: http://YOUR_SERVER_IP:3000"
echo "🧠 Backend: http://YOUR_SERVER_IP:5000"

