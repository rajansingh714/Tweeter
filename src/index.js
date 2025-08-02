const express = require('express');


const connect = require('./config/serverConfig');
const Tweet = require('./models/tweet');
const tweet = require('./repository/tweet-repository');


const app = express();



const serverSetup = () => {

    app.listen(3000, async() => {
          console.log(`server is running on ${3000}`);
          await connect();
          console.log('mongoose is coneect');

          const tweetRepo = new tweet();
          const result = await tweetRepo.update('688ca25323fd6ab033b0b44b', {
            content: 'my tweet is working'
          });
          console.log(result);
    });
}


serverSetup();

 