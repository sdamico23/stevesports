const express = require('express');
const app = express();

// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser())


app.get('/getData', (req,res) => {
    res.json( {
        "statusCode": 200,
        "statusMessage": "SUCCESS"   
     })
})
app.listen(3000,(req,res) => {
    console.log('Express API is running on port 3000')
})
module.exports = app;