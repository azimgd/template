require('dotenv').config();
const Server = require('./server.js');

const port = (process.env.PORT || 8080);
const app = Server.init();
Server.templating(app);
if (process.env.NODE_ENV !== 'production') {
  Server.devServer(app);
}
app.listen(port);

console.log(`Listening at http://localhost:${port}`);
