require('dotenv').config();
const Server = require('./server.js');

const port = (process.env.PORT || 8080);
const app = Server.app();
Server.templating(app);

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
