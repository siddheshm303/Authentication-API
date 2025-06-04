🔐 Authentication API - MERN Stack

This is a secure authentication API built using the MERN stack, featuring email verification, JWT-based authentication, password reset flow, and encrypted password storage.


📌 Features

- 🔒 Signup with Email Verification
- 🔑 Login with JWT Token (stored in cookies)
- 🔓 Logout
- 🔁 Forgot Password + Reset via Email
- ✅ Token-based Email Verification
- 🛡️ Secure Password Hashing with bcrypt
- ✉️ Gmail SMTP for Emails using NodeMailer
- 🧪 Protected routes using Middleware


⚙️ Tech Stack

- Frontend: React (optional, not part of this repo)
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose ODM)
- Authentication: JWT, bcryptjs
- Email Service: NodeMailer with Gmail SMTP
- Cloud: Render for deployment

## 🔄 Activity Diagram

![Activity Diagram](docs/activity-diagram.png)

🚀 Getting Started

1. Clone the repository:
- git clone https://github.com/yourusername/auth-api.git
- cd auth-api
2. Install dependencies:
- npm install
3. Add your environment variables:
### Create a .env file in the root:
```bash
PORT=5001
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_gmail
EMAIL_PASS=your_gmail_app_password
```
4. Start the server:
- npm run dev
  
🧪 API Endpoints
Method	Route	Description
- POST	/auth/signup	Register user + email verification
- POST	/auth/login	Login and get JWT cookie
- POST	/auth/logout	Logout (clear JWT cookie)
- POST	/auth/verify-email	Verify email with code
- POST	/auth/forgot-password	Send reset password email
- POST	/auth/reset-password/:token	Reset password using token
- GET	/auth/check	Check if token is valid (Auth)

✅ Future Enhancements
- ✅ Google OAuth integration
- 🔒 Rate limiting
- 📊 Admin panel
- 📦 Swagger API Docs

🙋‍♂️ Author
Siddhesh Vilas Mulik
📧 siddeshm303@gmail.com
🌍 Thane, Maharashtra
