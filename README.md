# Simple CRUD Application with Express, Node.js, and MongoDB

This repository contains a simple CRUD (Create, Read, Update, Delete) application built using Express.js, Node.js, and MongoDB. The application demonstrates fundamental operations on a MongoDB database through a RESTful API, providing a solid foundation for developing more complex back-end applications.

## Key Features:
- **Express.js**: A minimalist web framework for Node.js, used to set up the server and define API routes.
- **MongoDB**: A NoSQL database for storing and managing application data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used for data validation and easy interaction with the database.
- **CRUD Operations**: Implementation of Create, Read, Update, and Delete functionalities for managing data.
- **RESTful API**: The API endpoints follow REST principles, making it easy to interact with the application from a front-end or other services.

## Setup Instructions:
1. Clone the repository:
   ```bash
   git clone https://github.com/shafihu/simple-crud-app-backend.git
   
2. Install dependencies::
   ```bash
   cd simple-crud-app-backend
   npm install

3. Set up environment variables:
- Add your MongoDB connection string and other environment variables as needed.

4. Start the server:
   ```bash
   npm run dev

5. Access the API endpoints via `http://localhost:3000`

## API Endpoints:
- GET /products - Retrieve all items.
- POST /products - Create a new item.
- GET /products/:id - Retrieve a single item by ID.
- PUT /products/:id - Update an item by ID.
- DELETE /products/:id - Delete an item by ID.

## Technologies Used:
- Node.js
- Express.js
- MongoDB
- Mongoose

## Contributing:
- Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.
