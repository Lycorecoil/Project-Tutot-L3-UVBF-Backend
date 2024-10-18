const app = require("./app");
const port = 3000;
const db = require('./config/db');
const UserModel = require('./models/user.model');


app.get('/',(req,res) => {res.send('hello of world')});

app.listen(port, () => {
	console.log(`serveur lancer sur le http://localhost:${port}`)
})