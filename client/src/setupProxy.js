const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: "https://nodejsandreact-ch001.c9users.io:8080/auth/google" }));
    app.use(proxy('/api/current_user', { target: "https://nodejsandreact-ch001.c9users.io:8080/api/current_user" }));
}