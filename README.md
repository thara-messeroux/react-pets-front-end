# react-pets-front-end

## Intro
This project is a React front-end for a pets dashboard.

It connects to a back-end API and lets users view pet data in the browser. The app will also support creating, updating, and deleting pets.

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
- `Developer Experience` → reduce noise and keep the workflow clean

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

## Step 4 🐱
- Built `src/services/petService.js`
- Added a `BASE_URL` using the front-end environment variable
- Added an `index()` function to fetch all pets from the API
- Connected `App.jsx` to the service using `useEffect`

### Why it matters
- This lets the React app talk to the back end
- It starts the data flow for showing pets in the UI

### Engineering principle used
- `Separation of Concerns` → keep API calls in a service file
- `useEffect` → load data when the page opens
- `Environment Variables` → keep the API URL flexible

---

## Step 5 🐼
- Created the `PetList` component
- Passed the `pets` state from `App.jsx` into `PetList`
- Rendered pet names using `.map()`
- Added a fallback message when there are no pets

### Why it matters
- This is the first real UI for the pets data
- It turns fetched API data into something visible in the browser

### Engineering principle used
- `Props` → pass data from parent to child
- `Conditional Rendering` → show different UI when the list is empty
- `List Rendering` → use `.map()` to display many items

---

## Step 6 🐸
- Created the `PetDetail` component
- Added a `selected` state in `App.jsx`
- Made pet names clickable in `PetList`
- Passed the clicked pet into `PetDetail`

### Why it matters
- This lets the user view one pet’s details
- It adds interaction to the dashboard

### Engineering principle used
- `State` → store the selected pet
- `Props` → pass the selected pet between components
- `Event Handling` → respond to user clicks
- `Conditional Rendering` → show details only when a pet is selected

---

## Step 7 🐻
- Created the `PetForm` component
- Added controlled form inputs for `name`, `age`, and `breed`
- Added an `isFormOpen` state in `App.jsx`
- Added a button in `PetList` to open and close the form
- Used conditional rendering to switch between the form and pet details

### Why it matters
- This creates the UI shell for adding a new pet
- It prepares the app for form submission in the next step

### Engineering principle used
- `Controlled Components` → React controls form input values
- `State` → track whether the form is open
- `Conditional Rendering` → show either the form or the detail view
- `Event Handling` → button toggles the form

---

## Step 8 🚀
- Connected create, update, and delete actions to the back-end API
- Added form submission with `preventDefault()`
- Added create, update, and delete service functions
- Added edit and delete buttons in the detail view
- Updated React state after each CRUD action

### Why it matters
- This completes the full front-end CRUD flow
- The UI now stays in sync with the database

### Engineering principle used
- `CRUD` → create, read, update, delete from the front end
- `State Management` → update the UI after server actions
- `Forms` → submit controlled form data
- `Separation of Concerns` → keep fetch logic in the service file

---

## Step 9 ✨
- Added a `type` dropdown to the pet form
- Added an `image` field to the pet form
- Displayed each pet’s image in the detail view
- Formatted the `createdAt` timestamp into a readable date

### Why it matters
- This makes the app feel more complete and realistic
- It improves data quality and visual feedback for the user

### Engineering principle used
- `Controlled Forms` → manage text fields and dropdowns in React state
- `Data Formatting` → turn raw timestamps into readable dates
- `User Experience` → show images and cleaner details in the UI