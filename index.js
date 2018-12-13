const express = require("express");
const app = express();
require("./models/User");
require("./models/Survey");
require("./services/passport"); // because the purpose here is just to execute that passport.js file
const mongoose  = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require('body-parser');
const keys = require("./config/keys");
const port = process.env.PORT || 5000;

// https://community.c9.io/t/setting-up-mongodb/1717
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === 'production') {
     app.use(express.static('client/build'));
     
     const path = require('path');
     app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
     });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));