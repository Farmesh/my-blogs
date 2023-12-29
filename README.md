# My Blog Web Application

This is a simple blog web application built using Node.js, Express.js, and EJS. Users can create, view, edit, and delete blog posts. The application does not persist data between sessions as it does not use a database.

## Features

- **Post Creation:** Users can create new blog posts.
- **Post Viewing:** The home page allows users to view all their posts.
- **Post Update/Delete:** Users can edit and delete posts as needed.
- **Styling:** The application is well-styled and responsive for a good user experience on both desktop and mobile devices.

## Technical Requirements

- **Node.js & Express.js:** The application is a web server built using Node.js and Express.js. Express.js handles routing and middleware.
- **EJS:** EJS is used as the templating engine to generate dynamic HTML based on the application's state.

## Project Structure

```plaintext
- /my-blog-app
  - /public
    - style.css
  - /views
    - index.ejs
    - create.ejs
    - edit.ejs
  - app.js
  - package.json

