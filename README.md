# SkillScape - Learning Management System (LMS)

![Screenshot 2025-02-22 183807](https://github.com/user-attachments/assets/4c9f4d3d-e7af-49c6-9b4d-5142086197ee)


SkillScape is a modern and efficient Learning Management System (LMS) built on the **MERN stack** (MongoDB, Express, React, Node.js). It provides an intuitive and interactive platform for students and instructors to manage courses, track progress, and enhance the learning experience.

## 🚀 Features

- **User Authentication** (Secure login and registration with Clerk)
- **Course Management** (Create, update, and manage courses)
- **Interactive Lessons** (Videos, quizzes, and assignments)
- **Real-Time Progress Tracking** (Monitor student performance)
- **Instructor & Student Dashboards**
- **Responsive UI** (Built with Tailwind CSS for seamless experience)
- **Secure Payments** (Integration with Stripe for premium courses)
- **Dark Mode Support**

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Clerk
- **Payments:** Stripe

## 📂 Project Structure

```
SkillScape/
├── client/         # Frontend (React.js)
├── server/         # Backend (Node.js, Express.js, MongoDB)
├── .env            # Environment variables
├── package.json    # Dependencies
└── README.md       # Project documentation
```

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB
- Yarn or npm

### Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/mohitsatyarthiii/SkillScape-An-LMS-website.git
   cd SkillScape
   ```

2. **Setup Environment Variables**
   Create a `.env` file in the root and add the necessary credentials (MongoDB URI, Clerk API keys, Stripe keys, etc.)

3. **Install Dependencies**
   ```sh
   cd client && npm install  # Install frontend dependencies
   cd ../server && npm install  # Install backend dependencies
   ```

4. **Run the Project**
   ```sh
   # Start the backend
   cd server && npm start

   # Start the frontend
   cd ../client && npm start
   ```

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### Backend Deployment (Render / Railway / AWS)
1. Setup MongoDB on a cloud provider
2. Deploy the backend to a hosting service like Render, Railway, or AWS
3. Update environment variables in production

## 📜 License
This project is licensed under the **MIT License**.

## 🤝 Contributing
We welcome contributions! Feel free to submit a pull request or open an issue.


