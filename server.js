const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/posts')

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Hai richiesto index')

    res.send('<h1>Home blog</h1>')
})

app.use('/pizzas', postsRouter);

app.listen(port, () => {
    console.log(`Example app listenint on port ${port}`)
});