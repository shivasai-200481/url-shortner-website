# 🔗 URL Shortener with Analytics

This is a full-stack **MERN application** where users can shorten long URLs and track analytics (click counts, usage stats).  
Only authenticated users can use the service, secured by **JWT-based authentication**.  

## 🚀 Live Demo
[Click here to view the app](https://url-shortner-website-4t31.onrender.com/)

## ✨ Features
- User authentication (Signup/Login with JWT)
- Shorten long URLs into custom short links
- Track analytics (click count, usage history)
- Only logged-in users can create/manage URLs
- Responsive UI with React

## 🛠️ Tech Stack
- **Frontend**: HTML5,CSS 
- **Backend**: Node.js, Express.js, JWT Authentication  
- **Database**: MongoDB (with Mongoose)  
- **Hosting**: Render (backend) + Netlify/Vercel (frontend)

## ⚙️ Installation
To run the project locally:

```bash
# Clone the repo
git clone https://github.com/shivasai-200481/url-shortener.git

# Navigate to frontend
cd url-shortener/frontend
npm install
npm start

# Navigate to backend
cd url-shortener/backend
npm install
npm start
