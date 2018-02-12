const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('<h1>boop</h1>');
})

app.get('/test-route', (req,res)=>{
    res.send("<h1>That's one-a bigga booper</h1>")
})

// LISTEN LINDA
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server succesfully start on port ${PORT}`)
})