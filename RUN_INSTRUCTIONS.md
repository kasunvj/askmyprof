# 🚀 How to Run AskMyProf

## Step 1: Install MongoDB

You need MongoDB running. Choose one option:

### Option A: Install MongoDB Locally (Ubuntu/Linux)

```bash
# Install MongoDB
sudo apt update
sudo apt install -y mongodb

# Start MongoDB
sudo systemctl start mongodb
sudo systemctl enable mongodb

# Verify it's running
sudo systemctl status mongodb
```

### Option B: Use MongoDB Atlas (Cloud - Recommended for Quick Start)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a free cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
6. Save this - you'll need it in Step 3

---

## Step 2: Install Backend Dependencies

```bash
# Navigate to backend folder
cd /home/vimukthi/claude/askmyprof/sources/backend

# Install all required packages
npm install

# This will install:
# - express (web framework)
# - mongoose (MongoDB)
# - bcryptjs (password hashing)
# - jsonwebtoken (authentication)
# - cors (cross-origin requests)
# - dotenv (environment variables)
# - express-validator (input validation)
# - nodemon (development)
```

Wait for installation to complete (may take 1-2 minutes).

---

## Step 3: Configure Backend Environment

```bash
# Create .env file from example
cd /home/vimukthi/claude/askmyprof/sources/backend
cp .env.example .env

# Now edit the .env file
nano .env
# OR
code .env
# OR
gedit .env
```

**Edit the .env file with these values:**

### If using LOCAL MongoDB:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/askmyprof
JWT_SECRET=your_super_secure_random_secret_key_here_change_this
NODE_ENV=development
```

### If using MongoDB Atlas:
```env
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/askmyprof?retryWrites=true&w=majority
JWT_SECRET=your_super_secure_random_secret_key_here_change_this
NODE_ENV=development
```

**Generate a secure JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Copy the output and use it as your JWT_SECRET.

Save the file (Ctrl+O, Enter, Ctrl+X in nano).

---

## Step 4: Start the Backend Server

```bash
# Make sure you're in the backend folder
cd /home/vimukthi/claude/askmyprof/sources/backend

# Start the development server
npm run dev
```

**You should see:**
```
Server is running on port 5000
MongoDB Connected: ...
```

✅ **Backend is now running!** Keep this terminal open.

---

## Step 5: Install Frontend Dependencies

**Open a NEW terminal window/tab** (keep backend running)

```bash
# Navigate to frontend folder
cd /home/vimukthi/claude/askmyprof/sources/frontend

# Install all required packages
npm install

# This will install:
# - react (UI library)
# - react-dom (React rendering)
# - react-router-dom (navigation)
# - axios (HTTP client)
# - react-scripts (build tools)
```

Wait for installation to complete (may take 2-3 minutes).

---

## Step 6: Configure Frontend Environment

```bash
# Create .env file from example
cd /home/vimukthi/claude/askmyprof/sources/frontend
cp .env.example .env

# Edit the file (usually default is fine)
nano .env
# OR
code .env
```

**The default should work:**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

Save the file.

---

## Step 7: Start the Frontend Server

```bash
# Make sure you're in the frontend folder
cd /home/vimukthi/claude/askmyprof/sources/frontend

# Start the development server
npm start
```

**The browser should automatically open to http://localhost:3000**

If it doesn't, manually open your browser and go to:
```
http://localhost:3000
```

✅ **Frontend is now running!** Keep this terminal open too.

---

## Step 8: Test the Application

### Create a Teacher Account

1. On the homepage, click **"Sign Up"**
2. Fill in the form:
   - **I am a:** Select "Teacher/Professor"
   - **Display Name:** Dr. John Smith
   - **Username:** drsmith
   - **Email:** smith@example.com
   - **Password:** test123
   - **Confirm Password:** test123
3. Click **"Sign Up"**
4. You'll be logged in and see the teacher dashboard
5. Click **"Logout"**

### Create a Student Account

1. Click **"Sign Up"** again
2. Fill in the form:
   - **I am a:** Select "Student"
   - **Display Name:** Jane Doe
   - **Username:** janedoe
   - **Email:** jane@example.com
   - **Password:** test123
   - **Confirm Password:** test123
3. Click **"Sign Up"**
4. You'll be logged in and see the student dashboard

### Send a Letter Request

1. As the student (Jane), click **"Request a Letter"** button
2. Select **"Dr. John Smith (@drsmith)"** from dropdown
3. Add a message: "I would like to request a letter of recommendation for my graduate school application."
4. Click **"Send Request"**
5. You'll see a success message and be redirected to dashboard
6. Your request will show with status: **pending**

### Review the Request (as Teacher)

1. Click **"Logout"**
2. Click **"Login"**
3. Login as the teacher:
   - **Username:** drsmith
   - **Password:** test123
4. You'll see Jane's request in the dashboard
5. Read her message
6. Click **"Approve"** (or "Reject")
7. The status updates immediately!

### View Updated Status (as Student)

1. Logout and login as student (janedoe / test123)
2. View dashboard
3. See the updated status (approved or rejected)

---

## 🎉 Congratulations!

Your application is fully running! You now have:

- ✅ Backend API running on http://localhost:5000
- ✅ Frontend React app running on http://localhost:3000
- ✅ User authentication working
- ✅ Letter request system working
- ✅ Beautiful UI with red, yellow, white theme

---

## Common Issues & Solutions

### Issue: "Cannot connect to MongoDB"

**Solution:**
```bash
# Check if MongoDB is running
sudo systemctl status mongodb

# If not running, start it
sudo systemctl start mongodb

# OR use MongoDB Atlas connection string in .env
```

### Issue: "Port 5000 already in use"

**Solution:**
```bash
# Find and kill the process using port 5000
lsof -ti:5000 | xargs kill -9

# OR change PORT in backend/.env to different port (e.g., 5001)
```

### Issue: "CORS error" in browser console

**Solution:**
- Make sure backend is running (check terminal)
- Verify backend .env has correct settings
- Check frontend .env has correct API URL

### Issue: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Frontend not loading styles

**Solution:**
```bash
# Clear browser cache
# Hard refresh: Ctrl + Shift + R (or Cmd + Shift + R on Mac)

# Stop and restart frontend server
# Ctrl + C to stop
npm start
```

---

## Quick Commands Reference

### Backend
```bash
cd /home/vimukthi/claude/askmyprof/sources/backend

# Start development server
npm run dev

# Start production server
npm start
```

### Frontend
```bash
cd /home/vimukthi/claude/askmyprof/sources/frontend

# Start development server
npm start

# Build for production
npm run build
```

### MongoDB (if using local)
```bash
# Start MongoDB
sudo systemctl start mongodb

# Stop MongoDB
sudo systemctl stop mongodb

# Check status
sudo systemctl status mongodb
```

---

## Stopping the Application

To stop the servers:

1. **Backend terminal:** Press `Ctrl + C`
2. **Frontend terminal:** Press `Ctrl + C`
3. **MongoDB (if local):** `sudo systemctl stop mongodb`

---

## What's Next?

- 📖 Read `docs/PROJECT_OVERVIEW.txt` for full project details
- 🎨 Customize colors in `sources/frontend/src/index.css`
- 🔧 Modify features as needed
- 🚀 Deploy to production (see `docs/SETUP_INSTRUCTIONS.txt`)

---

## Need More Help?

Check these files:
- `GETTING_STARTED.md` - Quick setup checklist
- `docs/QUICK_START.txt` - Quick reference
- `docs/SETUP_INSTRUCTIONS.txt` - Complete detailed guide
- `docs/PROJECT_OVERVIEW.txt` - Full project documentation

---

**Enjoy using AskMyProf! 🎓**
