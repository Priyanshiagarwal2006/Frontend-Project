# Student Enrollment Form using JPDB API

This is a simple web-based application to manage student records. It uses JSONPowerDB as the backend database and jQuery for frontend scripting. The application supports basic operations like adding, updating, and viewing student data by Roll Number.

---

## TABLE OF DESCRIPTION

| Feature              | Details                                                                 |
|----------------------|-------------------------------------------------------------------------|
|  Project Title     | Student Enrollment Form using JPDB API                                  |
|  Description       | A responsive web form that lets users enter, save, update, and reset student data using JPDB API. |
|  Technologies Used | HTML, CSS (Bootstrap), JavaScript (jQuery), JPDB API                     |
|  Backend           | JsonPowerDB (JPDB)                                                       |
|  Functionalities   | Data entry, validation, fetch by roll number, edit/update data          |

---


## Benefits of using JsonPowerDB

- Extremely lightweight and fast
- Serverless and instantly usable
- Built-in query language for JSON
- Secure token-based authentication
- Perfect for prototyping and learning backend integration
- No need for complex backend setup

---

## Scope of Functionalities

- Roll Number-based lookup
- Full form validation before save/update
- Data storage and retrieval using JPDB APIs
- Updates handled using record number saved in local storage
- Toggle control of button states and field focus

---

💡 Usage Examples

Add Student → Fill all fields → Click Save

View Student → Enter Roll Number → Press Tab → Auto-fetch details

Update Student → Modify details → Click Update

Reset Form → Clears all input fields and resets buttons

---


📌 Version History

v1.0 (22nd Aug 2025)
✅ Initial Release with Add, Fetch, Update, and Reset features.

---

## Illustrations

Here is how the form looks in the browser:

![Screenshot 2025-08-22 121247](https://github.com/Priyanshiagarwal2006/Student-form/blob/main/Screenshot%202025-08-22%20121247.jpg)
![Screenshot 2025-08-22 121410](https://github.com/Priyanshiagarwal2006/Student-form/blob/main/Screenshot%202025-08-22%20121410.jpg)

---


## Project Status

 Functional and complete.  
Planned improvements:
- Add delete functionality
- Pagination or table display for all records
- Enhanced UI with Bootstrap or Tailwind CSS

---

## Sources

- [JSONPowerDB (Official)](https://login2explore.com/)
- [JPDB API Docs](https://login2explore.com/jpdb/docs.html)
- [jQuery API](https://api.jquery.com/)


---

## Other Information

- Form behavior is dynamically controlled via jQuery
- Uses `localStorage` to keep track of record number
- AJAX requests are synchronous for simplicity
- Ideal for learning front-end to back-end interaction

---
👩‍💻 Developed with ❤️ by Priyanshi Agarwal
