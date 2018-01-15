# WeddingApp
A React-driven wedding app with MongoDB

### Saturday, January 13, 2018

-- Build out initial React & Webpack template
-- Add RSVP form component using react-bootstrap

        I could not get the handleInputChange() function to properly set state when a new value was typed in the form field.  I was receiving the following error:
        Uncaught TypeError: Cannot read property 'setState' of undefined

        After research, I determined that the arrow functions were not being read by the browser.  https://medium.com/@joshblack/writing-a-react-component-in-es2015-a0b27e1ed50a

        But, by installing the following plugin, babel-plugin-transform-class-properties, the arrow functions work.

        To install:
        1.  npm install --save-dev babel-plugin-transform-class-properties
        2.  update the .babelrc file to include this plugin:
        ````
            {
                "presets": ["babel-preset-env", "react"],
                "plugins": ["transform-class-properties"]
            }
        ````
        3.  rerun the webpack dev server


-- Hook up MongoDB to RSVP Form

    1.  Review Stephen Grider's MongoDB course 

    2.  Install express and mocha as dependencies

        ````
            npm install --save express mocha

    3.  Install mongodb Express driver
        ````
            npm install --save mongodb

    4.  Compare between mongoose and mongodb Node drivers

    5.  Build basic express server with simple get request

    6.  Create test file to test GET requests and response.  Download library supertest to make testing of HTTP requests easier.

    7.  Sec. 14, Lec. 104
        Used supertest to test the GET request.
        Add the following test script to the package.json:

        "test": "nodemon --exec 'mocha --recursive -R min'",


### Sunday, January 14, 2018

-- Parts of Express App
1.  Router -- looks at URL and method of incoming request and sends that request to the appropriate route handler.  Will separate routing logic from logic of how to respond to the request.

2.  Controller -- logic of how to respond to a particular request

3.  Model -- Mongoose model or model driver


*** Mongo requires a directory to be pre-named to store data on the server.  

        sudo mkdir -p /data/db


*** Stopping the Mongo Driver

        
        $ brew services stop mongodb


*** Node Receiving a POST Request
Node receives tiny chunks of the request body at a time; piece by piece;
Once Node receives the entire request

Express doesn't do a good job of handling the request body

Will use small library to take in these chunks and make them accessible - body-parser

# body-parser
1.  Parses the incoming request object, req
2.  Places it on the req.body property


# Testing Guest Creation  
Grider, Sec. 14, Lec. 111

1.  Look at response object that comes back after request is completed.  Will assume the response includes the guest that was just created.

2.  More classic - add an insertion, look in Guests collection and make sure that a Guest with the given name and email is in that collection

3.  Take a count of guests in the Guest collection before post request is made, and then take another count when the request is finished and see if 1 more record is added.


