# React authentication with google, facebook via OAuth (React, Redux, JWT).

## Setup
Rename config `example-application.js` file to `application.js` inside `backend/config` directory. <br />
Set your facebook and google app id, database connection and other settings.<br />
By default feel free to use my configuration.

## Instalation
In root directory: <br />
`npm install`<br />
Go to `backend` directory and install all dependencies:<br />
`npm install`<br />

## Run

### Frontend
In root directory run: <br />
`npm start`

### Backend
In separate terminal run backend service:<br />
`cd backend`<br />
`npm start`

### Docker
If you have docker cpmpose installed you can use a one-liner command instead of jumping into different directories:<br />
`docker-compose up --build`
<br /><br />
Open http://localhost:3000 in your browser, you should see the below screen:<br />

![picture alt](http://assets.miwu.pl/oauth-sign-in-form.png "Form")

