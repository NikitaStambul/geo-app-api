
# Geo-App API

This is a Node.js server built with Express.js and Sequelize, designed to provide API endpoints for a Geo-App. The API allows users to perform various operations related to geolocation data.
## Installation

Getting Started To run the Geo-App API locally, follow the steps below:

Fork the repository on GitHub.

Clone the forked repository to your local machine.

Open a terminal or command prompt and navigate to the project directory.

Create .env file in root directory. Specify PORT and DB_URL.

Run the following command to install the dependencies:

```bash
  npm install
```
Once the installation is complete, start the app by running the following command:
```bash
  npm run start
```
The API server should now be running locally on http://localhost:3000 by default.
## Demo

Deployment The Geo-App API is currently deployed at railway. You can access the deployed API using this base URL:

[DEMO LINK](https://geo-app-api.up.railway.app/)


## Documentation

GET: /places - Retrieve a list of all places.

GET: /places/:placeId - Retrieve a specific place by ID.

POST: /places - Create a new place.

DELETE: /places/:placeId - Delete place.


## Tech Stack

**Client:** React, TypeScript, Leaflet

**Server:** Node, Express, Sequelize


## Feedback

If you have any feedback, please reach out to me at mykyta.stambul@gmail.com.
