# 🏥 Hospital Management System

## 📌 Overview
The **Hospital Management System** is a web application designed to streamline patient registration and doctor management. It facilitates doctors to register, log in, and access reports, while patients can register and create health reports. This system aims to enhance the efficiency of hospital operations, ensuring seamless communication between medical staff and patients.

## 🛠️ Tech Stack
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow) ![Node.js](https://img.shields.io/badge/Node.js-v14.17.4-green) ![Express](https://img.shields.io/badge/Express-4.17.1-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-v5.0.3-5EB148) ![Mongoose](https://img.shields.io/badge/Mongoose-v5.10.9-4D8C9E) ![JWT](https://img.shields.io/badge/JWT-v8.5.1-8C2B5B) ![Bcrypt](https://img.shields.io/badge/Bcrypt-v5.0.1-FFCA28)

## 📁 Folder Structure
```
project-root/
├── configs/
│   └── dbconnection.js
├── controllers/
│   ├── doctor.controllers.js
│   ├── patient.controllers.js
│   ├── report.controllers.js
├── middlewares/
│   ├── doctor.middlewares.js
│   └── patient.middlewares.js
├── models/
│   ├── doctor.model.js
│   ├── patient.model.js
│   └── report.model.js
├── routes/
│   ├── doctor.routes.js
│   ├── patient.routes.js
│   └── report.routes.js
├── utils/
│   ├── jwt.utils.js
│   └── password.utils.js
└── index.js
```
## ✨ Features
👨‍⚕️ Doctor Registration & Login
📝 Patient Registration
📄 Creating & Retrieving Reports
🔒 Secure Token-based Authentication
📊 Status Filtering of Reports
🚀 Installation
To set up the project locally, follow these steps:

Clone the repository:
```
git clone https://github.com/yourusername/hospital-management-system.git
```
Navigate to the project directory:
```
cd hospital-management-system
```
Install the necessary dependencies:
```
npm install
```
Setup your MongoDB connection string in configs/dbconnection.js.
Start the application:
```
npm run dev
```
## 📜 License
This project is licensed under the MIT License. See the LICENSE file for more information.

## 🙏 Acknowledgements
Express
MongoDB
Mongoose
jsonwebtoken
bcrypt
## 👥 Contributors
Arijit Karmakar
