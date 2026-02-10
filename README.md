# 📝 Persisted Todo List

A simple, elegant todo list application with persistent storage using PostgreSQL. Built as a learning project to practice full-stack web development with Node.js, Express, EJS, and PostgreSQL.

![Orange Theme](https://img.shields.io/badge/Theme-Orange-FF6B35)
![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql)
![Express](https://img.shields.io/badge/Express-Framework-000000?logo=express)

---

## ✨ Features

- ✅ **Add new todos** - Create tasks with a simple input form
- ✅ **Edit existing todos** - Modify task titles with inline editing
- ✅ **Delete todos** - Remove completed tasks with a single click
- ✅ **Persistent storage** - All todos saved to PostgreSQL database
- ✅ **Beautiful orange theme** - Modern, gradient-based UI design
- ✅ **Responsive design** - Works on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

### Backend
- **Node.js** (Latest version) - JavaScript runtime
- **Express.js** - Web application framework
- **PostgreSQL** (pg module) - Relational database

### Frontend
- **EJS** - Embedded JavaScript templating
- **CSS3** - Custom styling with gradients and animations
- **Vanilla JavaScript** - For cursor positioning and interactions

### Development
- **body-parser** / **express.urlencoded** - Form data parsing

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (Latest LTS version)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **PostgreSQL** (Version 12 or higher)
  - Download from: https://www.postgresql.org/download/
  - Verify installation: `psql --version`

- **npm** (Comes with Node.js)
  - Verify installation: `npm --version`

---

## 🚀 Installation & Setup

### 1. Clone or Download the Project

```bash
# If using Git
git clone https://github.com/aadityabhansali02-eng/PERSISTED-TO-DO-LIST.git
cd persisted_todo_list

# Or download and extract the ZIP file
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web framework
- `ejs` - Template engine
- `pg` - PostgreSQL client
- `body-parser` (optional, as Express has built-in support)

### 3. Set Up PostgreSQL Database

#### Step 1: Start PostgreSQL

**Windows:**
```bash
# PostgreSQL should start automatically after installation
# Or use Services panel to start it
```

**macOS:**
```bash
brew services start postgresql
```

**Linux:**
```bash
sudo service postgresql start
```

#### Step 2: Access PostgreSQL

```bash
psql -U postgres
```

You'll be prompted for the password you set during PostgreSQL installation.

#### Step 3: Create Database

```sql
CREATE DATABASE world;
```

#### Step 4: Connect to the Database

```sql
\c world
```

#### Step 5: Create the `items` Table

```sql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);
```

**Table Structure:**
- `id` - Auto-incrementing primary key (unique identifier for each todo)
- `title` - VARCHAR(255), stores the todo text (required)

#### Step 6: Verify Table Creation

```sql
\dt
```

You should see the `items` table listed.

#### Step 7: (Optional) Insert Sample Data

```sql
INSERT INTO items (title) VALUES 
  ('Buy groceries'),
  ('Finish homework'),
  ('Call mom');
```

#### Step 8: Exit PostgreSQL

```sql
\q
```

### 4. Configure Database Connection

Open `index.js` and update the database credentials if needed:

```javascript
const db = new pg.Client({
    database: "world",
    host: "localhost",
    user: "postgres",
    password: "YOUR_PASSWORD_HERE",  // ⚠️ Change this!
    port: 5432
})
```

**⚠️ Important:** Replace `"YOUR_PASSWORD_HERE"` with your actual PostgreSQL password.

### 5. Set Up File Structure

Ensure your project structure looks like this:

```
persisted_todo_list/
├── public/
│   └── styles/
│       └── layout.css
├── views/
│   └── index.ejs
├── index.js
├── package.json
└── README.md
```

### 6. Run the Application

```bash
node index.js
```

You should see:
```
the server is up and running at port number : 8000
```

### 7. Open in Browser

Navigate to:
```
http://localhost:8000
```

🎉 **Your todo list should now be running!**

---

## 📖 Usage Guide

### Adding a New Todo
1. Type your task in the input field at the bottom
2. Click the **+** button or press `Enter`
3. Your todo will appear in the list

### Editing a Todo
1. Click the **EDIT** button next to any todo
2. The text becomes editable
3. Modify the text
4. Press `Enter` or click outside to save

### Deleting a Todo
1. Click the **DONE** button next to any todo
2. The todo will be permanently removed from the database

---

## 🗂️ Project Structure

```
persisted_todo_list/
│
├── public/                    # Static files
│   └── styles/
│       └── layout.css        # Main stylesheet (orange theme)
│
├── views/                     # EJS templates
│   └── index.ejs             # Main todo list page
│
├── index.js                   # Server & routes
├── package.json              # Dependencies
└── README.md                 # This file
```

---

## 🔌 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Display all todos |
| `POST` | `/newtodo` | Create a new todo |
| `POST` | `/edit/:id` | Enter edit mode for a todo |
| `POST` | `/edititem` | Update a todo's title |
| `POST` | `/delete/:id` | Delete a todo |

---

## 🎨 Customization

### Change the Color Theme

Edit `public/styles/layout.css` and modify the CSS variables:

```css
:root {
  --primary-orange: #FF6B35;      /* Change to your color */
  --secondary-orange: #FF8C42;    /* Change to your color */
  --light-orange: #FFB88C;        /* Change to your color */
  /* ... etc */
}
```

**Popular alternatives:**
- **Blue:** `#4A90E2`, `#5CA5FF`
- **Purple:** `#9B59B6`, `#BB6BD9`
- **Green:** `#2ECC71`, `#58D68D`

### Change the Port

Edit `index.js`:

```javascript
const port = 3000;  // Change from 8000 to any port you want
```

### Modify Database Name

If you want to use a different database:

1. Create a new database in PostgreSQL:
   ```sql
   CREATE DATABASE my_todos;
   ```

2. Update `index.js`:
   ```javascript
   database: "my_todos",  // Change from "world"
   ```

---

## 🐛 Troubleshooting

### Database Connection Error

**Error:** `Error: connect ECONNREFUSED`

**Solution:**
- Check if PostgreSQL is running
- Verify your database credentials in `index.js`
- Ensure the database "world" exists

### CSS Not Loading

**Error:** Styles not applied

**Solution:**
- Check that `layout.css` is in `public/styles/`
- Verify `app.use(express.static("public"))` is in `index.js`
- Hard refresh browser: `Ctrl + Shift + R`

### Port Already in Use

**Error:** `EADDRINUSE: address already in use :::8000`

**Solution:**
- Change the port number in `index.js`
- Or kill the process using port 8000:
  ```bash
  # Windows
  netstat -ano | findstr :8000
  taskkill /PID <PID> /F
  
  # macOS/Linux
  lsof -ti:8000 | xargs kill -9
  ```

### Table Does Not Exist

**Error:** `relation "items" does not exist`

**Solution:**
- Make sure you created the `items` table
- Check you're connected to the correct database
- Run the CREATE TABLE command again (see setup section)

---

## 📚 Learning Resources

This project demonstrates:

### Backend Concepts
- RESTful routing
- CRUD operations (Create, Read, Update, Delete)
- PostgreSQL database integration
- Template rendering with EJS
- Express middleware

### Frontend Concepts
- Form handling and submission
- Dynamic content rendering
- CSS Grid and Flexbox
- Responsive design
- CSS animations and transitions

### Database Concepts
- Primary keys and auto-increment
- SQL queries (SELECT, INSERT, UPDATE, DELETE)
- Parameterized queries (preventing SQL injection)
- Database connections and clients

---

## 🚧 Known Limitations

- **No user authentication** - All users share the same todo list
- **No categories or tags** - Todos are in a single flat list
- **No due dates or priorities** - Simple title-only todos
- **Page refreshes on edit** - Uses traditional form submission instead of AJAX
- **No data validation** - Minimal error handling
- **Password in source code** - Not using environment variables

These are intentional for a learning project, but would be addressed in a production app!

---

## 🔮 Future Enhancements (Ideas)

- [ ] Add user authentication (login/signup)
- [ ] Implement categories/tags
- [ ] Add due dates and priority levels
- [ ] Use AJAX for smoother UX (no page refresh)
- [ ] Add dark mode toggle
- [ ] Implement search/filter functionality
- [ ] Add task completion checkbox (instead of delete)
- [ ] Export todos to CSV/JSON
- [ ] Add environment variables for config
- [ ] Deploy to Heroku/Railway/Render

---

## 📝 License

This is a learning project and is free to use for educational purposes.

---

## 🙏 Acknowledgments

- Built as a learning exercise to practice full-stack development
- Inspired by classic todo list applications
- Orange color palette designed for a warm, productive feel

---

## 📞 Questions or Issues?

If you encounter any problems or have questions:

1. Check the **Troubleshooting** section above
2. Review the **Installation & Setup** steps carefully
3. Ensure all prerequisites are installed correctly
4. Verify your PostgreSQL database is set up properly

---

**Happy coding! 🚀**

---

## 📊 Database Schema Reference

```sql
-- Table: items
CREATE TABLE items (
  id SERIAL PRIMARY KEY,        -- Auto-incrementing unique ID
  title VARCHAR(255) NOT NULL   -- Todo text (max 255 characters)
);

-- Example queries:
SELECT * FROM items;                           -- Get all todos
INSERT INTO items (title) VALUES ('New task'); -- Add todo
UPDATE items SET title = 'Updated' WHERE id = 1; -- Edit todo
DELETE FROM items WHERE id = 1;                -- Delete todo
```

---

**Version:** 1.0.0  
**Last Updated:** February 2026
