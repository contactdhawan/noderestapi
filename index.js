const express = require('express');

const app = express();

const router = require('./router/postRouter');

app.use("/", router.router);

app.listen(8081, () => {
    console.log('Listnening to post 8081');
})