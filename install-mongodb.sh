#!/bin/bash

echo "========================================="
echo "Installing MongoDB"
echo "========================================="

# Update package list
echo "Updating package list..."
sudo apt update

# Install MongoDB
echo "Installing MongoDB..."
sudo apt install -y mongodb

# Start MongoDB
echo "Starting MongoDB service..."
sudo systemctl start mongodb

# Enable MongoDB on boot
echo "Enabling MongoDB to start on boot..."
sudo systemctl enable mongodb

# Check status
echo ""
echo "========================================="
echo "MongoDB Installation Complete!"
echo "========================================="
echo ""
echo "Checking MongoDB status..."
sudo systemctl status mongodb --no-pager

echo ""
echo "✅ MongoDB is installed and running!"
echo ""
echo "Next steps:"
echo "1. Open a new terminal and run: cd /home/vimukthi/claude/askmyprof/sources/backend && npm run dev"
echo "2. Open another terminal and run: cd /home/vimukthi/claude/askmyprof/sources/frontend && npm start"
