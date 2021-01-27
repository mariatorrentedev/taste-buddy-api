# TASTEBUDDY API

## Full Stack PERN Application to create, save, edit and delete wine tasting sheets.

---

- A Lading Page View will introduce you about the app functionality.

![Landing Page](https://github.com/cartodeveloper/taste-buddy-client/blob/main/public/Images/tb-home.png?raw=true)

- When you signed as a new user, you'll be redirect to the home page, where you can find a complete TasteBuddy Guide that will have a detailed description of the basic tasting concepts.

  ![TasteBuddy Guide](https://github.com/cartodeveloper/taste-buddy-client/blob/main/public/Images/gif-tastebuddy.gif?raw=true)

- After reading the guide, you'll be redirect to complete your first TasteBuddy deductive format.

  ![Deductive Tasting Format](https://github.com/cartodeveloper/taste-buddy-client/blob/main/public/Images/gif-deductive-format.gif?raw=true)

- You'll have a Tastings section, where all your wine tasting sheets will be save, PLUS filter by Varietal, Vintage, Score and Search by Wine name.
  ![Tastings Section](https://github.com/cartodeveloper/taste-buddy-client/blob/main/public/Images/tastings-tb.png?raw=true)

- You'll be able to Edit your Tastings
  ![Edit Tasting](https://github.com/cartodeveloper/taste-buddy-client/blob/main/public/Images/edit-tb.png?raw=true)

- At your Dashboard you'll have the count of your Tasting Sheets, Common Varietals and Average Score

![Dashboard](https://github.com/cartodeveloper/taste-buddy-client/blob/main/public/Images/dashboard-tbuddy.png?raw=true)

---

## 🔗[Live Link](https://taste-buddy-client.vercel.app/)

## 🔗[Client Repo](https://github.com/cartodeveloper/taste-buddy-client)

---

## 💻 Tech Stack

- ### Front-End :
  - React
  - React Router
  - CSS
  - Jsx
- ### Back-end:
  - Node.
  - Express.
  - JWT.
  - Mocha&Chai.
  - Nodemon.
  - Supertest.
- ### Data Persistence:
  - PostgreSQL.
- ### Hosting:
  - Heroku.

### 📑API Documentation

| Method |       Path        |                           Purpose |
| :----- | :---------------: | --------------------------------: |
| GET    |    /api/users     |                      Get the user |
| POST   |    /api/users     |                 Register the user |
| POST   |  /api/auth/login  |     Validates username & password |
| GET    |   /api/tastings   |   Get all tastings from the user. |
| POST   |   /api/tastings   | Create a tasting in user session. |
| PUT    | /api/tastings/:id |                     Edit tasting. |
| DELETE | /api/tastings/:id |                   Delete tasting. |
