# Face Detection API

The backend repo of a full stack web application that enables logged-in users to upload images to view detected faces using a face recognition AI model using Clarifai's REST API.

Frontend: https://github.com/JulianLivrone/face-detection

## Endpoints

- `/signin`: Sign in verification with email and password.
- `/register`: Register with name, email, and password.
- `/profile/:id`: Get user profile (once logged in).
- `/image`: Side effects of image detection (increment entries count).
- `/imageurl`: Image URL upload handler (Clarifai API call).

## Stack

### Frontend

- React (frontend)

### Backend

- Node.js (server)
- Express (web app framework for Node.js)
- PostgreSQL (database)
- Clarifai (face recognition AI model API)
- Knex.js (SQL query builder)

### Hosting

- [Render](https://render.com/) (hosting)
