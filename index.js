var express = require("express")
var app = express()
const port = 3001;

const service1Url = "http://localhost:3000/movie"
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})


//get movies
app.get('/movies', (req, res) => {
    fetch(service1Url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        res.json({"Service2 Movies": data})
    });
    
})
