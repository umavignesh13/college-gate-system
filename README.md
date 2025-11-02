🏫 College Gate System

🔹 Introduction

The College Gate System is a web-based application designed to record and manage the entry and exit details of students and visitors in a college.
This project helps maintain proper visitor tracking and ensures campus security by storing all visitor details in a digital format.
It consists of two main modules — Frontend developed using React.js and Backend developed using PHP with MySQL database.

🔹 Objective

The main objective of this project is to:

Digitally record the entry and exit details of every visitor or student.

Provide an easy interface for the security team to manage visitor records.

Maintain accurate and searchable visitor history.

🔹 Project Structure
```
college-gate-system/
│
├── frontend/                  → React.js user interface
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   └── VisitorForm.js
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   └── package.json
│
└── backend/                   → PHP + MySQL server-side code
    ├── db.php                 → Database connection
    ├── add_visitor.php        → Insert visitor details
    ├── get_visitors.php       → Fetch visitor records
    └── database.sql           → Database structure (MySQL)
```



Frontend: Handles user input, form submission, and displays data in a clean interface.

Backend: Connects to the database, handles API requests, and performs CRUD operations.

🔹 Technologies Used
Layer	Technology
Frontend	React.js, HTML, CSS, JavaScript
Backend	PHP
Database	MySQL
Tools	XAMPP, VS Code, GitHub
🔹 Features

Add new visitor or student entry details.

Record exit time for each visitor.

Fetch and display all visitor data dynamically.

Search for specific visitor details.

Simple, user-friendly interface with clear design.

🔹 Modules
1. Frontend Module

Built using React.js

Contains forms for visitor entry

Displays data from the backend in real time

2. Backend Module

Developed using PHP and connected to MySQL

Handles data insertion, retrieval, and updates

Provides APIs for frontend communication

🔹 How to Run the Project
🧩 Backend Setup

Copy the backend folder into your XAMPP/htdocs directory.

Start Apache and MySQL from the XAMPP Control Panel.

Open phpMyAdmin and create a new database (e.g., college_gate).

Import your SQL file if available (optional).

Access backend files in your browser, e.g.,

http://localhost/backend/get_visitors.php

💻 Frontend Setup

Open the frontend folder in VS Code or terminal.

Run the following commands:

npm install
npm start


The frontend will start on:
http://localhost:3000

🔹 Expected Output

The user can enter visitor details from the React frontend.

The data will be stored in the MySQL database through the PHP backend.

The visitor list will be displayed dynamically with options to search and update.

🔹 Advantages

Reduces manual entry and paper records.

Increases efficiency and data accuracy.

Easy to use and maintain.

Enhances campus security through proper visitor management.

🔹 Future Enhancements

Add QR code generation for visitor passes.

Enable student and staff login systems.

Create an admin dashboard for data analytics.

Deploy the system online using a hosting service.

🔹 Conclusion

The College Gate System provides a smart and efficient way to manage visitor entries and exits.
It is a reliable digital solution that simplifies gate record management and ensures data security for educational institutions.

🔹 Author

Uma Vignesh
B.Tech – Data Science, Vignan University
📍 Guntur, Andhra Pradesh
🔗 LinkedIn Profile: [umavignesh13](https://www.linkedin.com/in/umavignesh13//)
