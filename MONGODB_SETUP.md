# MongoDB Setup - Choose One Option

## Option 1: Install MongoDB Locally (You need to run this)

**Run these commands in your terminal:**

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

Then restart your backend server.

---

## Option 2: Use MongoDB Atlas (No Installation Required) ⭐ RECOMMENDED

### Step 1: Sign Up (2 minutes)

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up with email or Google account
3. Click the verification link in your email

### Step 2: Create Free Cluster (3 minutes)

1. After login, click **"Build a Database"**
2. Choose **"M0 FREE"** option
3. Select any cloud provider (AWS/Google Cloud/Azure)
4. Choose a region close to you
5. Click **"Create Cluster"** (wait 3-5 minutes for creation)

### Step 3: Create Database User

1. Click **"Database Access"** in left sidebar
2. Click **"Add New Database User"**
3. Username: `admin`
4. Password: `admin123` (or create your own)
5. Click **"Add User"**

### Step 4: Allow Network Access

1. Click **"Network Access"** in left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development)
4. Click **"Confirm"**

### Step 5: Get Connection String

1. Click **"Database"** in left sidebar
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password (e.g., `admin123`)

Example:
```
mongodb+srv://admin:admin123@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### Step 6: Update Your .env File

Open the backend .env file:
```bash
nano /home/vimukthi/claude/askmyprof/sources/backend/.env
```

Replace the MONGODB_URI line with your Atlas connection string:
```env
PORT=5000
MONGODB_URI=mongodb+srv://admin:admin123@cluster0.xxxxx.mongodb.net/askmyprof?retryWrites=true&w=majority
JWT_SECRET=ebcc58fe0563b48b5573dbd1564c4defb628f3fa900337ed90dafcf00d5b9d122900b71d028510fc350591ccdbede1d83d14332caabf40fe7fbc579786e947df
NODE_ENV=development
```

**Important:** Add `/askmyprof` before the `?` in the connection string to specify the database name.

Save and close (Ctrl+X, then Y, then Enter).

### Step 7: Restart Backend

1. Stop your backend (Ctrl+C in the terminal)
2. Start it again:
   ```bash
   cd /home/vimukthi/claude/askmyprof/sources/backend
   npm run dev
   ```

You should see:
```
Server is running on port 5000
MongoDB Connected: cluster0-shard-00-00.xxxxx.mongodb.net
```

✅ **Success!** Now try signing up again at http://localhost:3000

---

## Quick Test After Setup

Once MongoDB is connected (either local or Atlas), test signup:

1. Go to http://localhost:3000
2. Click **"Sign Up"**
3. Fill in details:
   - Role: Student
   - Display Name: Test User
   - Username: testuser
   - Email: test@example.com
   - Password: test123
4. Click **"Sign Up"**

You should be logged in and redirected to dashboard! 🎉

---

## Troubleshooting

### "Network Error" when signing up
- Check backend is running (Terminal 1)
- Check for errors in backend logs
- Verify .env file has correct MONGODB_URI

### "Cannot connect to MongoDB"
- If using Atlas: Check connection string is correct
- If using local: Run `sudo systemctl start mongodb`

### "Invalid credentials" on Atlas
- Make sure you replaced `<password>` with actual password
- Check username/password match what you created

---

**Need help?** Let me know which option you chose and what error you see!
