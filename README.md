# JS Game Tutorials

### Setup
1. `fork` and `git clone` this repo.
2. `cd` into the server directory and `npm install`
3. Inside of server/api/v1/tutorial.js you will need to update the github username to your own on line 4
4. You will also need your own access token which you can store in a .env file, or feel free to remove `?${process.env.ACCESS_TOKEN}` from line 15 in tutorial.js. You will be limited to about 60 pulls an hour.
5. In client/app/tutorial-page/tutorial-page.service.js update line 6 to whatever port you will locally be running your server.

### Run
I use nodemon to locally run the server and lite-server to locally run the client. Make sure they are running on different ports.

### Making a New Tutorial
You can add a tutorial by adding a md file to the tutorial-markdowns directory. You will also need to add a link in the side-nav bar in client/app/components/side-nav.template.html. Make sure the name matches your md file exactly.
