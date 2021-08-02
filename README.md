<h1>👩‍💻WIT (Women In Tech) Meeting point👩‍💻</h1>

**WIT meeting point** is the Final project for Technigo bootcamp Spring 2021. Developed by <a href="https://github.com/ThereseHag">Therese Hagelin</a> and <a href="https://github.com/esteficodes">Estefanía Quevedo</a>.

This project is the result of our strong wish to see more diversity in the tech industry. According to Women in tech statistics for 2020, a whopping 80% of those in the tech field are still male, while only 20% are female. We dream of a society full of tech workplaces in which women and other minorities are not outnumbered by men anymore. With our application we wish to contribute by offering an evergrowing list of resources specially aimed for women who wish to start building a career in technology. We have built a database of over 70 websites, bootcamps, schools, courses, articles, books and others which focus on bringing more women and girls into the tech industry. 

## Planning and building:

We created our own **database** by collecting relevant resources from Scandinavia first, as those are the ones we are more familiar with, but secondly we decided to go international and started adding resources from other parts of the world. The resources are classified and selected according to the premise of being relevant and inclusive. 

Users will be able to create a profile by signing up and, once signed into the application, they will be able to see the latest news about technology and to contribute to the growth of the community by adding a new resource that was not yet included. There's also the possibility to star-rate the resources and submit a review with a comment about their experience, thus building an enriching dialogue within the community. On a future stage of the project, other capacities will be added to the user panel such as deleting a resource, modifying it and requesting to be an administrator. 

## Backend ⚙️

The backend for this app was also developed by us and consists of a **database** with 86 items (resources) and a **RESTful API built with Node.js and Express**. We collected our data via **MongoDB and mongoose** and used **Postman** to test the endpoints.

## Endpoints Documentation 📄

The App has, so far 8 endpoints in the server:

GET / resources

- endpoint to get all the resources

GET / resources/id/:_id

- endpoint to get one resource based on id

GET / resources/name/:name

- endpoint to get one resource based on name

GET / resources/type/:type

- endpoint to get all the resources of one specified type

GET / resources/language/:language

- endpoint to get all the resources of one specified language


POST / resources

-endpoint to post new resources to the database, after authentication

POST /signup 

- endpoint to signup as new user with username and password

POST /signin

- endpoint for an already created user to sign in with username and password.

Here is a link to the deployed backend: https://final-project-wit-app.herokuapp.com/

## Frontend 🖼️

The frontend is a **multi-page React app built using React Router and Redux with Toolkit**. We started by creating the App flow with a Main page to display all the resources and links to the diverse classes of resources by calling the endpoints and mapping through them to classify them. The main area and the New resource form are restricted areas. We have implemented **authentication** so that only registered users can access it.

Our resource sections show the data by doing a **fetch to the backend and GET data** while the new resource form works by submitting data through a form to a **POST** endpoint.

The navigation through the app is possible due to redirecting between components thanks to **React Router**, in combination with state management in the **Redux Store**.

The overall general state of the App plus the hamburger menu are controlled by a **global state and hooks**. 

We used the package **Star rating for React** to implement a 5 stars rating with a form to submit a review of the resource.

The local styling was performed using **Styling Components 💅** . We have also added pictures from **Canva.com** and implemented **Lottie animations**.

## View it live 

You can take a look at our project here: https://wit-meetingpoint.netlify.app/  