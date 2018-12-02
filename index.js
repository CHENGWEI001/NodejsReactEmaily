const express = require("express");
const app = express();
require("./models/User");
require("./services/passport"); // because the purpose here is just to execute that passport.js file
const mongoose  = require("mongoose");
const keys = require("./config/keys");
const port = process.env.PORT || 5000;

// https://community.c9.io/t/setting-up-mongodb/1717
mongoose.connect(keys.mongoURI);

require("./routes/authRoutes")(app);

app.get('/', (req, res) => {
    res.send({'hi': 'there2'});
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));