# AskMyProf - Letter Request System

A modern MERN stack application for managing letter of recommendation requests between students and professors.

## ✅ Status: FULLY FUNCTIONAL

All features implemented and tested. Application is ready for development and deployment.

## Features

- ✅ **User Authentication**: Secure signup and login with role-based access (Student/Teacher)
- ✅ **Modern UI**: Clean design with white, red (#DC143C), and yellow (#FFD700) theme colors
- ✅ **Letter Requests**: Students can request letters from registered professors
- ✅ **Dashboard**: Track and manage all requests in one place
- ✅ **Real-time Updates**: Professors can approve or reject requests instantly
- ✅ **Responsive Design**: Works seamlessly on desktop and mobile devices
- ✅ **Cloud Database**: MongoDB Atlas integration (no local MongoDB needed)

## Technology Stack

### Backend
- Node.js & Express.js
- MongoDB Atlas (Cloud Database)
- Mongoose ODM
- JWT Authentication
- bcryptjs for password hashing

### Frontend
- React 18
- React Router v6
- Axios
- Context API for state management

## Quick Start

### Prerequisites
- Node.js (v16+) ✅ Installed
- MongoDB Atlas account (free) ✅ Configured
- npm ✅ Installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd askmyprof
   ```

2. **Backend Setup**
   ```bash
   cd sources/backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB Atlas connection string
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd sources/frontend
   npm install
   cp .env.example .env
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### MongoDB Atlas Setup

**The application uses MongoDB Atlas (cloud) - no local installation needed!**

1. Sign up at https://cloud.mongodb.com (free)
2. Create a free M0 cluster
3. Create database user
4. Set Network Access to 0.0.0.0/0
5. Get connection string from "Connect" button
6. Update `sources/backend/.env` with connection string

**Note**: If your password contains special characters, URL encode them (e.g., `!` becomes `%21`)

## Documentation

**📖 START HERE**: `docs/CURRENT_STATUS.txt` - Current working status and configuration

For detailed information:
- **Quick Reference**: `docs/QUICK_START.txt`
- **Complete Setup Guide**: `docs/SETUP_INSTRUCTIONS.txt`
- **Project Details**: `docs/PROJECT_OVERVIEW.txt`
- **File Structure**: `docs/PROJECT_TREE.txt`

## Project Structure

```
askmyprof/
├── docs/                    # Documentation
├── resources/              # Resources and assets
├── views/                  # View templates
└── sources/
    ├── backend/           # Node.js backend
    │   ├── config/       # Configuration files
    │   ├── middleware/   # Express middleware
    │   ├── models/       # Mongoose models
    │   ├── routes/       # API routes
    │   └── server.js     # Entry point
    └── frontend/         # React frontend
        ├── public/       # Static files
        └── src/
            ├── components/  # React components
            ├── context/     # Context providers
            ├── pages/       # Page components
            └── App.js       # Main app component
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Letter Requests
- `GET /api/letter-requests/teachers` - Get all teachers
- `POST /api/letter-requests` - Create letter request
- `GET /api/letter-requests/my-requests` - Get user's requests
- `PATCH /api/letter-requests/:id/status` - Update request status

## Theme Colors

- **Primary Red**: #DC143C
- **Primary Yellow**: #FFD700
- **White**: #FFFFFF
- **Light Gray**: #F5F5F5
- **Dark Gray**: #333333

## Usage

### For Students
1. Sign up with role "Student"
2. Click "Request a Letter" from landing page or dashboard
3. Select professor from dropdown
4. Add optional message
5. Track request status in dashboard

### For Teachers/Professors
1. Sign up with role "Teacher"
2. Set display name (appears to students)
3. View incoming requests in dashboard
4. Approve or reject requests

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the ISC License.

## Support

For issues and questions, please refer to the troubleshooting section in `docs/SETUP_INSTRUCTIONS.txt`.
