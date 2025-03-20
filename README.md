# Module 19 Homework Tech Quiz Test Suite 

## Description
This project is a full-stack application designed to deliver a dynamic quiz experience, complete with an API-powered question set and an interactive frontend built with React and TypeScript. For this assignment, I created both an end-to-end test and a component test using Cypress to demonstrate how the quiz functionality can be validated and maintained.

---

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Mock Data](#mock-data)
- [Video Demonstration](#video-demonstration)
- [Contributing](#contributing)
- [License](#license)

---

## Installation
1. Clone the repository.
2. Install dependencies in both the `client` and `server` directories:
```bash
cd client
npm install
cd ../server
npm install
```
3. Seed the database with mock questions:
```bash
npm run seed
```
4. Start the server and the client:
```bash
# In one terminal for the server
npm run dev

# In another terminal for the client
cd client
npm run dev
```

---

## Usage
- Once both servers are running, navigate to localhost to interact with the quiz application.
- Click "Start Quiz" to begin answering randomly generated questions.
- The application will show your score upon completion and offer the option to restart.

---

## Testing
### End-to-End Test
I used Cypress to write an end-to-end test that:
- Visits the app.
- Ensures questions are displayed.
- Simulates selecting answers.
- Confirms quiz completion and displays the final score.

### Component Test
I also created a Cypress component test for the `Quiz` component that:
- Mounts the component in isolation.
- Checks that questions and answer buttons render.
- Simulates clicking answers and verifies state changes.

#### Running Cypress
Open Cypress test runner with:
```bash
npx cypress open
```
Select either E2E or Component Testing, and choose the appropriate test files.

---

## Mock Data
Mock data is provided in `server/src/seeds/pythonQuestions.json`, which includes a set of Python-related questions used to seed the database and power the quiz.

---

## Video Demonstration
A full walkthrough of the application and tests is available here:  
➡️ [Video Demonstration](https://drive.google.com/file/d/1leIBBscmOIlwYRaUpUzuPzTDI5KKX2WL/view)

---

## Contributing
N/A

---

## License
Please refer to the license in the repository.
