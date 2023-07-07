const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const tasksRoutes = require("./routes/taskRoutes");

const app = express();


const Task = require('./models/Task');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));




app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());



app.use((req, res, next) => {
    
    if(req.body)
    {
        console.log("REQUISITION BODY");
        console.log(req.body);
    }

    next();
});

app.use('/tasks', tasksRoutes);



conn.sync().then(() => {
    app.listen(3000);
}).catch((error) => console.log(error));