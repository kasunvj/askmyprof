# Update Your .env File with MongoDB Atlas Connection String

## After Getting Your Connection String from MongoDB Atlas

### Open the .env file:

```bash
nano /home/vimukthi/claude/askmyprof/sources/backend/.env
```

OR

```bash
code /home/vimukthi/claude/askmyprof/sources/backend/.env
```

### Update the MONGODB_URI line:

Replace this line:
```
MONGODB_URI=mongodb+srv://demo:demo123@cluster0.mongodb.net/askmyprof?retryWrites=true&w=majority
```

With YOUR connection string from MongoDB Atlas (it will look like):
```
MONGODB_URI=mongodb+srv://askmyprof_user:askmyprof123@cluster0.xxxxx.mongodb.net/askmyprof?retryWrites=true&w=majority
```

**Important**:
- Replace the username and password with what you created
- Make sure `/askmyprof` comes BEFORE the `?` (this is your database name)

### Save the file:
- If using nano: Press `Ctrl+X`, then `Y`, then `Enter`
- If using code: Just save normally

---

## Test the Connection

### 1. Restart Your Backend

Go to your backend terminal and:
- Press `Ctrl+C` to stop it
- Run: `npm run dev`

### 2. Expected Output (Success!):

```
[nodemon] starting `node server.js`
Server is running on port 5000
MongoDB Connected: cluster0-shard-00-00.xxxxx.mongodb.net
```

✅ **You should see your cluster address, NOT an error!**

### 3. Test Signup

Go to http://localhost:3000 and try signing up:
- Click "Sign Up"
- Fill in the form
- Submit

It should work! 🎉

---

## Troubleshooting

### "Network Error" or "Cannot connect"
- Check your connection string is correct
- Verify you replaced `<password>` with actual password
- Make sure Network Access is set to "0.0.0.0/0"

### "Authentication failed"
- Check username and password match what you created
- Ensure no extra spaces in the connection string

### "Database not found"
- Make sure you have `/askmyprof` in the connection string before the `?`

---

**Once you have your connection string, either:**
1. Share it with me and I'll update the .env file
2. Or update it yourself using the instructions above

Then restart your backend and try signing up!
