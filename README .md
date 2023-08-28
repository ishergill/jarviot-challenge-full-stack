
# jarviot-challenge-full-stack
In this interview challenge, you will be tasked with creating a clone of the Google Drive Risk Report web application. Although the UI can be skipped, you will need to implement the API and integration. To help you with this challenge, we have attached some screenshots for your reference.

### Main Tasks:

The application should allow the user to complete the following tasks:

- **Link Google Drive**:
    - The user should be able to connect to their Google Drive account and access their files.
    - Save the Token in the Backend Database.
- **Get the Analytics**:
    - The application should retrieve data from the Google Drive account and display analytics such as file type, file size, and storage usage.
    - It should also show the links to files and risk counter (you can make some assumptions).
- **Revoke Google Drive Access**:
    - The user should be able to revoke the Drive Access API if they no longer wish to use the application.
##  Tech Stack Used  
Backend - `Node.js`  with clean architecture was used to create the backend server 

Database - `MongoDB`

Frontend - `React.js ` + `Tailwind`
## Installation

   1.  Clone the project from GitHub using the following command
   2. To set up the frontend, navigate to the "frontend" directory and run the following command to install all npm modules
   cd frontend
   npm install
   After installing the node modules , create a file for the .env to include all the Environmental variables for the frontend

- #### Environment Variables Frontend
`VITE_BASEURL`

3.  To start the frontend Server , run the following command 

  npm run dev
   4. To set up the backend,from the root folder navigate to the "backend" directory and run the following command to install all npm modules

  cd backend
  npm install
* After installing the node modules , create a file for the .env to include all the Environmental variables for the backend

- #### Environment Variables Backend

   `PORT` 

   `MONGODB_ATLAS_URL `

   `GOOGLE_CLIENT_ID `

   `GOOGLE_CLIENT_SECRET `

   `REDIRECT_URL `

   `FRONTEND_URL `

5.  To start the backend Server , run the following command

   ```bash
  npm run dev
   ``` 


