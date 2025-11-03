#!/bin/bash

echo "========================================"
echo "MongoDB Installation & Setup Script"
echo "========================================"
echo ""

# Update package list
echo "📦 Updating package list..."
sudo apt update

echo ""
echo "📥 Installing MongoDB..."
sudo apt install -y mongodb

echo ""
echo "🚀 Starting MongoDB service..."
sudo systemctl start mongodb

echo ""
echo "✅ Enabling MongoDB to start on boot..."
sudo systemctl enable mongodb

echo ""
echo "========================================"
echo "✅ MongoDB Installation Complete!"
echo "========================================"
echo ""

# Check status
echo "📊 Checking MongoDB status..."
sudo systemctl status mongodb --no-pager -l

echo ""
echo "========================================"
echo "✅ Setup Complete!"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Go to your backend terminal"
echo "2. Press Ctrl+C to stop the backend"
echo "3. Run: npm run dev"
echo "4. You should see: 'MongoDB Connected: 127.0.0.1'"
echo ""
echo "Then try signing up at http://localhost:3000"
echo ""
