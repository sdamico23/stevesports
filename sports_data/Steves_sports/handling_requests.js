const tours = fs.readFileSync('${__dirname}/wherever_yourjsonfileis.json');


const app = express();

app.get('/stevesports', (req, res) => {
    res.status(200).json({
        //req.params returns /:id (/stevesports/6) will set its id to 6
        //const tour = tours.find(el=> el.id == req.params) 
        status: 'success',
        data: {
            tours: tours
        }
    });
});
//get app listening 
const port= 3000;
app.listen(port, () => {
    console.log('App running on port ${port}...')
});

//post a new tour
app.post('/api/v1/tours', (req,res) => {
    const newId = tour[tour.length -1].id+1;
    const newTour = Object.assign({id:newId} ,req.body);
    tours.push(newTour);
    fs.writeFile(
        '$(__dirname}/dev-data/data/tours-simple.json',
        JSON.stringify(tours),
        err => {
            res.status(201).json({
                status: 'success'
            })
        }
    )

})

//reorganize to make it better

app.get('/api/v1...', getTour); //create function for get etc.

