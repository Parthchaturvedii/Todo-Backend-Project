# Todo Backend API

A RESTful Todo Backend built with Node.js, Express.js, and MongoDB.

## Features

- Create Todo
- Get All Todos
- Update Todo
- Delete Todo
- Mark Todo as Read
- MongoDB Database Integration
- Express REST API
- JWT Authentication (Optional / In Progress)

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- dotenv

## Installation

```bash
git clone <repository-url>
cd todo-backend
npm install
```

## Environment Variables

Create a `.env` file.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run the Project

```bash
npm run dev
```

## API Endpoints

### Todo APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/todos | Create Todo |
| GET | /api/todos | Get All Todos |
| PUT | /api/todos/:id | Update Todo |
| DELETE | /api/todos/:id | Delete Todo |
| PATCH | /api/todos/:id/read | Mark Todo as Read |

### Authentication APIs

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

## Author

Parth Chaturvedi