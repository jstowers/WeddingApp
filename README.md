# WeddingApp
An interactive, dynamic wedding app built with React, Node, Express, and MongoDB (MERN).

## Run the App on Your Local Machine
1.  To start the frontend client server on port 8080, open a new tab in the console, change to the WeddingApp root directory, and run:
    ````
        $ npm run serve
    ````

2.  Open a browser window and navigate to:
    ````
        http://localhost:8080
    ````

3.  To start the backend Node/Express server on port 3050, open a new tab in the console, change to the WeddingApp root directory, and run:
    ````
        $ node app.js
    ````

4.  To start the mongod process on your local machine, open a new tab in the console and run the following command:
    ````
        $ mongod
    ````

mongod is the main background process (daemon) that handles data requests, manages data access, and performs background management operations for the Mongo database.

5.  To shut down the mongod process, from the mongodb shell:
    ````
        > use admin
        > db.shutdownServer()
    ````

If mongod errors and says the socket/address for port 27017 is already in use, you can kill the previous mongod process with two unix commands:

    ````
        $ ps wuax | grep mongo
    ````

The output will show a couple of lines of code like this:
    
    ````
        jstowers  2408   0.3  0.1  2584216 9988 ??  S  Mon03PM 2:04.14 mongod
    ````

Kill the instance of mongod that is running:

    ```` 
        $ kill 2408
    ````


## Run the Backend Mocha Tests on Your Local Machine

1.  To start the mongod process, open a new tab in the console and type:
    ````
        $ mongod
    ````
If the mongod process is not running in the background, the Mocha tests attempting to connect to the Mongo database will fail.

2.  To run the Mocha test suite, open a new tab in the console, change to the WeddingApp directory, and run this test script:
    ````
        $ npm run test
    ````

---

### Saturday, January 13, 2018

- Build out initial React & Webpack template

- Add RSVP form component using react-bootstrap

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


- Hook up MongoDB to RSVP Form

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

### body-parser
1.  Parses the incoming request object, req
2.  Places it on the req.body property


### Testing Guest Creation  
Grider, MongoDB, Sec. 14, Lec. 111

1.  Look at response object that comes back after request is completed.  Will assume the response includes the guest that was just created.

2.  More classic - add an insertion, look in Guests collection and make sure that a Guest with the given name and email is in that collection

3.  Take a count of guests in the Guest collection before post request is made, and then take another count when the request is finished and see if 1 more record is added.

### Monday, January 14, 2018

___Goals___
- Complete Mocha tests for GET and POST requests
- Connect React app to Express server
- Implement an environment variable to separate development and test environments.

#### Environment Variables
___Definition___
Environment variables stored on your machine, outside the world of Node and your React app.

It is a global variable that can be referenced inside of Node.

Purpose:
1.  Customize behavior
2.  Encode a number of constants to access in an application

___NODE_ENV___
- Very common environment variable in Node development
- Used to determine whether application is running in Development, Test, Production, or any other environment type.
- All enviroment variables placed in the _process.ENV_ object:
    
    ````
    process.env.NODE_ENV
    ````

### Saturday, January 20, 2018
Working on deployment to AWS Elastic Beanstalk

1.  _502 Bad Gateway Error_

    I had not properly defined my PORT envt variable in my app.js file.  So Nginix server was running on Port 8080 and I had only set up Port 3050 for my Express app.  After adding the PORT envt variable, this error disappeared.

2.  _Cannot GET /_
    
    On page load, the application doesn't render.  It is having trouble finding the root directory.

    I did not specify a route for my root file in Express.  I then added the following code to my routes.js file:

    ````
        app.get('/', (req, res) => {
            res.send('Hi There');
        });

    ````

    When I repackaged and redeployed to AWS, the homepage displayed a simple 'Hi There'.

3.  Need to Render Static React Components Using a Webpack Build Inside Express
    
    The webpack-dev-server works great for development but does not spin up when I deploy to AWS.  I need some way to load my index.html and my webpack bundle.js file.

    https://stackoverflow.com/questions/39558118/webpack-express-js-doesnt-load-bundle-js

    Going to try webpack-dev-middleware as my goto option.

    From the website:  webpack-dev-middleware requires Node v6 or higher, and must be used with a server that accepts express-style middleware.

4.  Getting Webpack to Play Nice with Node and Express . . . Argggh!!
    This took me almost 7 hours to complete.

    Moving from a webpack dev server build to using Express in preparation for deploymet was a PAIN!

    See Stephen Grider, Webpack, Sec. 5, Lec. 36, "Troubleshooting Vendor Bundles"

    Here he adds the HTMLWebpackPlugin to the webpack.config.js file that injects the _<script>__ tags for the index.html file that is saved in the build/ directory.

    _webpack.config.js_
    ````
        const HtmlWebpackPlugin = require('html-webpack-plugin');

        const config = {
            // other config properties omitted
            plugins: [
                new HtmlWebpackPlugin({
                    template: 'src/index.html'
                })
            ]
        }
    ````
    The template property means that this plugin will look to the index.html file saved in the src directory for guidance on creating the index.html file in the build directory.

    _4:15pm_
    I have encountered problems deploying the app to AWS.  

    The app builds with npm run build and creates the bundle.js and index.html file in the build folder.  When I start the local Express server, the React component renders fine.  But when I zip the files and deploy to AWS, the webpage gives an error for the ReactDOM render in index.js.

### Sunday, January 21, 2019
    _12:19am_

    Updated app.js to include an IF statement to apply the webpack middleware when NODE_ENV !== 'production'


To test "production" setting on local server:

    $ NODE_ENV=production node app.js

SUCCESS . . . after 8 hours!!
After spending about 8 hours on this issue, was finally able to deploy the app to AWS!!

Deployed the app to AWS Beanstalk with the following changes:
1.  Productoin vs. Development:

````
    if (process.env.NODE_ENV !== 'production') {
        const webpackMiddleware = require('webpack-dev-middleware');
        const webpack = require('webpack');
        const webpackConfig = require('./webpack.config.js');
        app.use(webpackMiddleware(webpack(webpackConfig)));
    } else {
        app.use(express.static('build'));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'build/index.html'));
        });
    }
````

2.  Set NODE_ENV variable to production in AWS Beanstalk


### Monday, January 22, 2018

After much frustration with MongoDB Atlas free tier M0 not working correctly, and knowing that  my code worked perfectly on the localhost, I read much of Mongo's fine print regarding the free tier.  One big caveat is that server side JavaScript does not function on the free tiers.

Once I ponied up the $$$ for the M10 tier, the lowest tier with full MongoDB Atlas functionality, everything worked like a charm!

### Tuesday, January 23, 2018

Last night, I face difficulty deploying my app and having the POST and GET routes work correctly.  The url was consistently localhost:3000 in the webpack build.

So, this morning, based on Stephen Grider's Webpack lecture (Sec. 9, Lec. 52, 7:45), I am moving my routes call above the webpack build IF statements in app.js.  This should expose my API endpoints correctly.

9:27am - deploy WeddingApp-ver14


// CORS Configuration on AWS S3

````
    <!-- Sample policy -->
    <CORSConfiguration>
        <CORSRule>
            <AllowedOrigin>*</AllowedOrigin>
            <AllowedMethod>GET</AllowedMethod>
            <MaxAgeSeconds>3000</MaxAgeSeconds>
            <AllowedHeader>Authorization</AllowedHeader>
        </CORSRule>
    </CORSConfiguration>
````



