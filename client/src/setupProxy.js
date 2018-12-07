const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: "https://8abfd054d2854d12aaaa2fa0a1481b45.vfs.cloud9.us-west-2.amazonaws.com:8080" , xfwd: true }));
    app.use(proxy('/api/*', { target: "https://8abfd054d2854d12aaaa2fa0a1481b45.vfs.cloud9.us-west-2.amazonaws.com:8080", xfwd: true }));
}