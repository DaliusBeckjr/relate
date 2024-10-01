# Relate

**Relate** is a web application demonstrating authentication and CRUD functionality, allowing users to register, log in, create, update, and delete blog posts. The backend is built with Django and Django REST Framework, while the frontend is developed using React. 

## Features

- User authentication (register, login, logout)
- CRUD operations for blogs (create, read, update, delete)
- User-specific blogs: Each blog post is associated with the user who created it.
- Markdown editor for writing and formatting blog content

## Tech Stack

- **Backend**: Django, Django REST Framework
- **Frontend**: React, Context API
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Markdown Editor**: For rich text formatting of blog content

## API Endpoints

- **Authentication**:
  - `POST /api/register`: Register a new user
  - `POST /api/login`: Log in an existing user
  - `POST /api/logout`: Log out the authenticated user
  <!-- - `GET /api/profile`: Retrieve the profile of the authenticated user
  - `PUT /api/profile/update`: Update the authenticated user’s profile
  - `POST /api/profile/change-password`: Change the password of the authenticated user -->

- **Blog**:
  - `GET /api/blogs`: List all blogs (authenticated)
  - `POST /api/blogs`: Create a new blog (authenticated)
  - `GET /api/blogs/<id>`: Retrieve a specific blog (authenticated)
  - `PUT /api/blogs/<id>`: Update a specific blog (authenticated)
  - `DELETE /api/blogs/<id>`: Delete a specific blog (authenticated)

### API Endpoints Diagram
*(Add a diagram that visually represents your API endpoints, e.g., using a tool like Lucidchart or Canva)*

## Database Model

*(Add a visual representation of your database schema, including tables for users, blogs, etc.)*

## How to Run It

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/relate.git
   cd relate
   ```

2. **Backend Setup**:
   - Install Python dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Set up MySQL database:
     - Create a database in MySQL.
     - Update database settings in `settings.py`.
   - Run migrations:
     ```bash
     python manage.py migrate
     ```
   - Start the Django server:
     ```bash
     python manage.py runserver
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install Node dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. **Access the Application**:
   - Visit `http://localhost:3000` in your browser.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contributors

*(Include guidelines on how others can contribute, and a list of current contributors.)*

---

### Suggestions

1. **API Endpoints Diagram**: Use tools like Canva, Lucidchart, or Excalidraw to create a visual representation of your API endpoints and how they connect.

2. **Database Model**: Use tools like DBDiagram, Draw.io, or similar to showcase your database schema.

3. **License**: Include the text of the license you are using, like MIT, Apache 2.0, or GNU GPL.

4. **Contributors**: Add a section with guidelines on how to contribute to the project, such as forking the repo, creating pull requests, or joining discussions.
