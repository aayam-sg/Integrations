# Full-Stack Management System

This workspace contains two Angular frontend applications for separate management systems:

- Person Management System
- Product Management System

Both frontends are built with Angular and connect to backend APIs for CRUD operations.

## Projects in this workspace

### 1) Person Management System
Location: `personproject/`

The Person Management System is an Angular-based frontend for managing people records. It communicates with a Spring Boot backend for all person-related CRUD operations.

Backend repository:
https://github.com/aayam-sg/SpringBootPersonManagement

### 2) Product Management System
Location: `product/`

The Product Management System is an Angular-based frontend for managing product records. It communicates with a FastAPI backend for all product-related CRUD operations.

Backend repository:
https://github.com/aayam-sg/FastApi

---

## Tech stack

- Angular 22
- TypeScript
- RxJS
- Bootstrap 5
- REST APIs
- Spring Boot backend for person data
- FastAPI backend for product data

---

## How to run the apps

### Person project

```bash
cd personproject
npm install
npm start
```

Open:

```text
http://localhost:4200/
```

### Product project

```bash
cd product
npm install
npm start
```

Open:

```text
http://localhost:4200/
```

---

## Backend connectivity

The Angular frontend services are configured to call backend APIs on local ports:

- Person API: `http://localhost:5000/persons`
- Product API: `http://127.0.0.1:8000/products`

If your backend runs on a different host or port, update the API URLs in the corresponding service files.

---

## Features

### Person Management
- View all persons
- Add a new person
- Update an existing person
- Delete a person
- Fetch a person by ID

### Product Management
- View all products
- Add a new product
- Update an existing product
- Delete a product
- Fetch a product by ID

---

## Project structure

```text
Integration/
├── README.md
├── personproject/
│   ├── src/
│   ├── package.json
│   └── README.md
├── product/
│   ├── src/
│   ├── package.json
│   └── README.md
└── .git/
```

---

## Notes

This workspace is a frontend integration for two separate full-stack applications. The backend logic for each domain is maintained in their respective repositories, while the Angular apps serve as the user interfaces for managing data.
