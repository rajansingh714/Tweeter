const express = require('express');


const connect = require('./config/serverConfig');

const Tweet = require('./models/tweet');
const app = express();

const serverSetup = () => {

    app.listen(3000, async() => {
          console.log(`server is running on ${3000}`);
          await connect();
          console.log('mongoose is coneect');

        //   const tweet = await Tweet.create({
        //     content: 'Third tweet',
        //      userEmail: 'abc@d.com'
        //    });
        //    console.log(tweet);

        // const tweets = await Tweet.find({userEmail: 'a@b.com'});

        const findUser = await Tweet.findById('688ca25323fd6ab033b0b44b');
        console.log(findUser);
        // findUser.userEmail = "abc@gmail.com";
        // findUser.save();

    });
}

serverSetup();

 