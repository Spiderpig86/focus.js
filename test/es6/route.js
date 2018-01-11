let express = require('express')
let app = express()
let path = require('path')

const port = process.env.PORT || 8000

// Set up static file paths
app.use(express.static(path.join(__dirname, './test/')));
app.use('/js', express.static(path.join(__dirname, './test/es6')));

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.sendFile(path.join(__dirname, './', 'index.html'))
    
})

app.listen(port, () => {
    console.log('Focus is listening on port ' + port)
})