Inventory Management System (IMS)

This is a full-stack Inventory Management System built with React for the frontend and Node.js/Express with PostgreSQL for the backend. It enables staff to manage inventory products, monitor low stock alerts, and review logs and reports from a responsive dashboard interface.

Features
Frontend (React)

Staff login page

Responsive dashboard with inventory and sales charts

Manage Products (CRUD operations)

Add/Edit Product Forms

Inventory logs and activity tracking

Monthly report summaries

Glassmorphism UI and animated sidebar

Route-based navigation using React Router

State management with React Context API

Axios for API calls

Backend (Node.js + Express + PostgreSQL)

User authentication with JWT and bcrypt

REST API for product CRUD operations

Logs and Reports endpoints

PostgreSQL connection using pg and connection pooling

Environment-based configuration with dotenv

Tech Stack
Frontend: React, React Router, SCSS, Chart.js, Axios

Backend: Node.js, Express.js, PostgreSQL, JWT, Bcrypt

Styling: SCSS, Glassmorphism UI

Version Control: Git

Project Structure
Frontend
.
├── public/
├── src/
│ ├── api/ # Axios API service
│ ├── components/ # Reusable components (Sidebar, Charts, etc.)
│ ├── context/ # Auth Context
│ ├── pages/ # Route-based pages (Login, Dashboard, Products, Logs, Reports)
│ ├── styles/ # SCSS files
│ ├── App.jsx
│ └── main.jsx
└── package.json

Backend
.
├── controllers/ # Controller functions (auth, products, logs)
├── models/ # DB connection pool
├── routes/ # Route definitions
├── .env
├── server.js
└── package.json

Setup Instructions
Prerequisites
Node.js

PostgreSQL

Git

1. Clone the Repository
git clone https://github.com/your-username/inventory-management.git
cd inventory-management

2. Backend Setup
cd backend
npm install

Create a .env file:

PORT=5000
DATABASE_URL=your_postgresql_connection_url
JWT_SECRET=your_secret_key

Create the PostgreSQL tables using schema.sql

Start the backend:

npm start

3. Frontend Setup
cd frontend
npm install

Start the React development server:

npm run dev

Visit http://localhost:5173 in your browser.

API Endpoints
Auth

POST /api/auth/login

POST /api/auth/register

Products

GET /api/products

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id

Logs

GET /api/logs

Reports

GET /api/reports

Environment Variables
In the backend, configure .env with the following:

DATABASE_URL - Your PostgreSQL connection string

JWT_SECRET - Secret key for signing JWT tokens

PORT - Port to run backend server

License
This project is licensed under the MIT License.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


