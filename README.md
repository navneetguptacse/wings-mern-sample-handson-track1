
# Wings-1 MERN Stack Tract-1 Practice Application Scaffold

This project contains a **MERN (MongoDB, Express, React, Node)** application scaffold with a basic folder structure, placeholder code, and Jest test setup for both frontend and backend.  
All implementation logic is intentionally left as TODO markers.

---

## 📁 Project Structure

```
    project/
    │
    ├── NodeJS/
    │ ├── src/
    │ │ ├── app.js
    │ │ ├── mongoose/models/
    │ │ ├── routers/
    │ ├── tests/
    │ ├── package.json
    │
    ├── ReactJS/
    │ ├── src/
    │ │ ├── App.js
    │ │ ├── components/
    │ │ ├── styles/
    │ │ ├── tests/
    │ ├── package.json

````

---

# ⚙️ Backend Setup (NodeJS)

## 1️⃣ Install dependencies
```bash
cd NodeJS
npm install
````

## 2️⃣ Start MongoDB (Local)

```bash
mongosh
```

## 3️⃣ Start backend server

```bash
npm run dev
```

Backend runs at (default):

```
http://localhost:8001
```

---

# 🧪 Backend Tests

Run Jest tests:

```bash
npm test
```

Tests include:

- API endpoint structure
- Status code expectations
- Placeholder logic using TODOs

---

# 🎨 Frontend Setup (ReactJS)

## 1️⃣ Install dependencies

```bash
cd ReactJS
npm install
```

## 2️⃣ Start React development server

```bash
npm start
```

Frontend runs at (default):

```
http://localhost:3000
```

---

# 🧪 Frontend Tests

Run React Testing Library + Jest tests:

```bash
npm test
```

Tests include:

- Component rendering
- UI structure checks
- Placeholder test cases with TODOs

---

# 📌 Notes

- This scaffold provides **structure only**, not full functionality.
- All business logic sections contain `// TODO` comments.
- Test cases are included as skeletons and must be implemented.
- Ideal for training, assessments, or starting new MERN applications.

---

# 🎉 You're Ready!

You can now build the actual app by filling in the required logic in both frontend and backend.
