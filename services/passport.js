const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users") ;

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken);
        console.log();
        console.log(refreshToken);
        console.log();        
        console.log(profile)
        // new User({ googleId: profile.id }).save();
        var tmp = new User({ googleId: profile.id });
        tmp.save(function(error, user){
            console.log(error);
            console.log(user);
        });
    }));