// import express from 'express';
// import bodyParser from 'body-parser';
// import { rmSync } from 'fs';

// const app = express();
// const port = 3000;

// let posts = [];

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.render('index.ejs', { posts });
// });

// app.get("/create", (req, res) => {
//     res.render('create.ejs');
// });

// app.post("/create", (req, res) => {
//     const {title, content} = req.body;
//     post.push({title, content})
//     res.redirect("/");
// });

// app.get("/edit/:id", (req, res) => {
//     const postId = req.params.id;
//     const post = posts[postId];
//     res.render("edit.ejs", { post , postId });
  
// });

// app.post("/edit/:id", (req, res) => {
//     const postId = req.params.id;
//     const {title, content} = req.body;
//     posts[postId] = {title, content};
//     res.redirect("/"); 
// });


// app.get("/delete/:id", (req, res) => {
//     const postId = req.params.id;
//     posts.splice(postId, 1);
//     res.redirect("/");
// });









// app.listen(3000, function() {
//     console.log('app listening on port 3000');
// });


// import express from 'express';
// import bodyParser from 'body-parser';

// const app = express();
// const port = 3000;

// const posts = [];

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('public'));


// app.get('/', (req, res) => {
//     res.render('index.ejs');
// });

// app.get('/create', (req, res) => {
//     res.render('create.ejs');
// });

// app.post('/create', (req, res) => {
//     const {tittle , content} = req.body;
//     posts.push({tittle, content});
//     res.redirect('/');
// });

// app.get('/edit/:id', (req, res) => {
//     const postId = req.params.id;
//     const post = posts[postId];
//     res.render('edit.ejs', {postId , post});
// });

// app.post('/edit/:id', (req, res) => {
//     const postId = req.params.id;
//     const {tittle, content} = req.body;
//     posts[postId] = {tittle, content};
//     res.redirect('/');
// });

// app.get("/delete/:id" , (req, res) => {
//     const postId = req.params.id;
//     posts.splice(postId, 1);
//     res.redirect('/');
// });







// app.listen(port, function() {
//     console.log('app listening on port 3000');
// });


import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 3000;

const posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req , res) => {
    res.render('index.ejs',{posts});
});

app.get('/create', (req, res) => {
    res.render('create.ejs');
});

app.post('/create', (req, res) => {
    const {title , content} = req.body;
    posts.push({title, content});
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts[postId];
    res.render('edit.ejs', {postId , post});

});

app.post('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const {title , content} = req.body;
    posts[postId] = {title, content};
    res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
    const postId = req.params.id;
    posts.splice(postId, 1);
    res.redirect('/');
});





app.listen(port, function() {
    console.log('app listening on port 3000');
});
