const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 5100;
app.set("trust proxy", 1);
app.use(cookieParser());
app.use(express.static('static'));
app.engine('.ejs', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use("/", require('./router/route'));

app.listen(PORT, () => console.log(`serveur listening on port ${PORT}`));