# 📚 Student Management System (Node.js HTTP Server)

A simple REST-style Student Management API built using **Node.js native `http` module** and **File System (fs/promises)** without Express.

This project performs basic CRUD operations on student data stored in a `data.json` file.

---

## 🚀 Features

* ✅ Get all students
* ✅ Add new student
* ✅ Update existing student
* ✅ Delete student
* ✅ JSON-based responses
* ✅ Uses native Node.js (no frameworks)

---

## 🛠 Tech Stack

* Node.js
* HTTP module
* fs/promises
* JSON file storage

---

## 📂 Project Structure

```
project-folder/
│
├── server.js
├── data.json
└── README.md
```

---

## ▶ How to Run

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Run the server

```bash
node server.js
```

Server will run on:

```
http://localhost:3001
```

---

## 📌 API Endpoints

---

### 🔹 GET `/`

Returns welcome message.

---

### 🔹 GET `/students`

Returns all students.

**Response**

```json
[
  {
    "name": "John",
    "roll": "101"
  }
]
```

---

### 🔹 POST `/Student/Add`

Adds a new student.

**Request Body**

```json
{
  "name": "John",
  "roll": "101"
}
```

**Response**

```json
{
  "name": "John",
  "roll": "101"
}
```

---

### 🔹 PUT `/Student/update/{roll}`

Updates an existing student.

**Example**

```
PUT /Student/update/101
```

**Request Body**

```json
{
  "name": "John Updated"
}
```

**Response**

```json
{
  "name": "John Updated",
  "roll": "101"
}
```

---

### 🔹 DELETE `/Student/delete/{roll}`

Deletes a student.

**Example**

```
DELETE /Student/delete/101
```

**Response**

```json
{
  "name": "John",
  "roll": "101"
}
```

---

## 📦 Sample data.json

```json
[
  {
    "name": "Alice",
    "roll": "100"
  }
]
```

---

## 🎯 Learning Objectives

This project demonstrates:

* Understanding of Node.js HTTP server
* Manual routing without Express
* Handling request body streams
* File-based data storage
* Basic REST API design

---

## 📌 Future Improvements

* Add try-catch error handling
* Add single student GET route
* Use Express framework
* Connect to MongoDB
* Add validation middleware

---

## 👨‍💻 Author

**Bhuvaneshwar Ts**
