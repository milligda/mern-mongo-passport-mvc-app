# MERN (MongoDB, Express, React, Node) App with Passport user authentication

## About This Boilerplate

This setup allows for a Node/Express/React app integrating Passport's local user authentication.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

Passport is utilized for the User Authentication (Login and Signup) and is connected with the MongoDB Users collection.

The application is set up using a MVC (model-view-controller) structure.  

## Starting the app locally

Configure the database:

- In server.js set the secret key for the passport session
- In database/index.js replace the default databaseName with the name of your database


Install the front and backend dependencies:

- While in the root directory, run the following command to install node modules within the server and the client folder:

```
yarn install
```

- After both yarn installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.
