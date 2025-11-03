# Getting Started with AskMyProf

## ✅ Current Status: FULLY FUNCTIONAL

A complete MERN stack application with:
- ✅ Backend API (Node.js + Express + MongoDB Atlas)
- ✅ Frontend (React 18)
- ✅ User authentication (JWT)
- ✅ Letter request system
- ✅ Modern UI (Red, Yellow, White theme)
- ✅ Complete documentation
- ✅ **TESTED AND WORKING**

## Quick Setup Checklist

### Prerequisites
- [x] Node.js installed (v16+) ✅
- [x] MongoDB Atlas configured ✅
- [x] Terminal/Command prompt open ✅
- [x] Dependencies installed ✅

### Backend Setup (5 minutes)

```bash
# 1. Navigate to backend
cd sources/backend

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. Edit .env file and set:
#    - MONGODB_URI (MongoDB Atlas connection string)
#    - JWT_SECRET (random secure string)
#    - NOTE: URL encode special characters in password (! = %21)

# 5. Start the server
npm run dev
```

✅ Backend should be running on http://localhost:5000

### Frontend Setup (5 minutes)

```bash
# 1. Navigate to frontend (from project root)
cd sources/frontend

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. (Optional) Edit .env if backend is not on localhost:5000

# 5. Start the development server
npm start
```

✅ Frontend should open at http://localhost:3000

## First Time Usage

### Test as Student

1. **Sign Up**
   - Click "Sign Up" button
   - Select role: **Student**
   - Display Name: `Jane Doe`
   - Username: `janedoe`
   - Email: `jane@example.com`
   - Password: `test123`
   - Click "Sign Up"

2. **Explore**
   - You'll be logged in automatically
   - View the dashboard (empty for now)

### Test as Teacher

1. **Logout** (click Logout button)

2. **Sign Up Again**
   - Select role: **Teacher**
   - Display Name: `Dr. John Smith`
   - Username: `drsmith`
   - Email: `smith@example.com`
   - Password: `test123`
   - Click "Sign Up"

3. **Verify**
   - You'll see the teacher dashboard

### Send a Request

1. **Login as Student** (`janedoe`)

2. **Request a Letter**
   - Click "Request a Letter" button
   - Select "Dr. John Smith" from dropdown
   - Add message: "I need a recommendation for grad school"
   - Click "Send Request"

3. **View Dashboard**
   - See your request with "pending" status

### Review Request

1. **Login as Teacher** (`drsmith`)

2. **Review Request**
   - See Jane's request in dashboard
   - Read her message
   - Click "Approve" or "Reject"

3. **Verify**
   - Status updates immediately

## File Structure

```
askmyprof/
├── docs/                  # 📚 All documentation here
│   ├── QUICK_START.txt           # Quick reference
│   ├── SETUP_INSTRUCTIONS.txt    # Detailed guide
│   ├── PROJECT_OVERVIEW.txt      # Full description
│   ├── PROJECT_TREE.txt          # File structure
│   └── FILES_CREATED.txt         # Complete file list
│
├── sources/
│   ├── backend/          # 🔧 Node.js backend
│   └── frontend/         # 🎨 React frontend
│
└── README.md             # Project overview
```

## Documentation Guide

| **File** | **When to Use** |
|----------|----------------|
| **QUICK_START.txt** | Fast setup reference |
| **SETUP_INSTRUCTIONS.txt** | Complete detailed guide with troubleshooting |
| **PROJECT_OVERVIEW.txt** | Understanding the full project |
| **PROJECT_TREE.txt** | Understanding file organization |
| **FILES_CREATED.txt** | Complete list of all files |

## Common Issues

### MongoDB not connecting?
```bash
# Start MongoDB
mongod

# OR use MongoDB Atlas connection string
```

### Port already in use?
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Dependencies not installing?
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ✅ Complete the setup above
2. ✅ Test with sample accounts
3. 📖 Read `docs/PROJECT_OVERVIEW.txt` for full understanding
4. 🎨 Customize colors/styling as needed
5. 🚀 Add your own features

## Need Help?

1. Check `docs/SETUP_INSTRUCTIONS.txt` (has troubleshooting section)
2. Review `docs/PROJECT_OVERVIEW.txt` (comprehensive details)
3. Verify all environment variables are set correctly
4. Ensure MongoDB is running
5. Check console for error messages

## Features to Explore

- **Landing Page**: Clean hero section with illustration
- **Authentication**: Role-based signup/login
- **Request System**: Student → Teacher workflow
- **Dashboard**: Different views for students and teachers
- **Theme**: Red (#DC143C), Yellow (#FFD700), White palette

## Development

### Backend
```bash
cd sources/backend
npm run dev    # Development with auto-reload
npm start      # Production mode
```

### Frontend
```bash
cd sources/frontend
npm start      # Development server
npm run build  # Production build
```

---

**Happy Coding! 🚀**

For detailed technical information, see the documentation in the `docs/` folder.
