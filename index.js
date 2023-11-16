import express from 'express'          // ES6
import {tempRouter} from './routes/temp.route.js';
import { response } from './config/response.js';

const app = express();
const port = 3000;

app.use('/temp', tempRouter);

app.use((err, req, res, next) => {
    res.locals.message = err.message;   
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(err.data.status).send(response(err.data));
});

app.get('/', (req, res) => {
    console.log("/");
    res.send('Hello UMC!');
});

app.get('/hello', (req, res) => {
    console.log("/hello");
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});