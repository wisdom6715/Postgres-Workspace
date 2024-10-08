import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = process.env.PORT || 4000;
const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'world',
    password: 'wisdom6715!!@',
    port: 5432,
})
db.connect()

app.get('/', async(req, res) => {
    const result = await db.query('SELECT * FROM capitals where id > 200')
    res.send(result)
})

app.use(bodyParser.urlencoded({extended: true}));
app.listen(port);