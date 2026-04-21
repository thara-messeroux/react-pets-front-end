# react-pets-front-end

## Intro
This project is a React front-end for a pets dashboard.

It connects to a back-end API and will let users view, create, update, and delete pets in the browser.

## Concepts Practiced
- `React`
- `Vite`
- `Components`
- `State`
- `Props`
- `useEffect`
- `fetch`
- `Environment variables`
- `CRUD front-end workflow`

---

## Step 1 🐣
- Set up the React app with Vite inside the `petsApp` folder
- Kept the front end and back end in separate folders inside one parent project
- Ran the front end on `localhost:5173`

### Why it matters
- This keeps the project organized
- It makes it easy to run the front end and back end together

### Engineering principle used
- `Project Structure` → organize related apps in one parent folder
- `Separation of Concerns` → keep front end and back end separate

---

## Step 2 🐥
- Configured ESLint for the React project
- Turned off `react/prop-types` warnings
- Turned off `react/no-unescaped-entities` warnings
- Cleared `App.jsx` and replaced it with a simple starter component

### Why it matters
- This gives the project a clean starting point
- It reduces distracting warnings while building fast

### Engineering principle used
- `Project Setup` → prepare the app before building features
- `Developer Experience` → reduce noise and keep the workflow clean# react-pets-front-end

---

## Step 3 🐶
- Created the `components` and `services` folders
- Added `src/services/petService.js`
- Added a front-end `.env` file
- Stored the back-end URL in `VITE_BACK_END_SERVER_URL`

### Why it matters
- This keeps the project organized
- It separates UI code from API call logic
- It avoids hard-coding the server URL in the app

### Engineering principle used
- `Project Structure` → organize files by responsibility
- `Environment Variables` → keep configuration flexible
- `Separation of Concerns` → keep service logic separate from components

---