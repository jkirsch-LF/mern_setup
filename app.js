const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();


app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

// app.get('/', (req, res) => {
//     res.send('<h1>boop</h1>');
// });

app.get('/test-route', (req,res)=>{
    res.send("<h1>That's one-a bigga boopipty boop</h1>")
});

app.get('/api/get-user', cors(), (req, res)=>{
    res.send({username: 'Binglebop', email: 'booger@shoes.com', name: "Bingle"})
});

app.get('/api/get-article', cors(), (req, res)=>{
    res.send({title: "Biggest Meatballs", content:"Like, the most meat-a-balls you've ever seen", meatballs:"Biggest"})
});

app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

// LISTEN LINDA
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server succesfully start on port ${PORT}`)
});