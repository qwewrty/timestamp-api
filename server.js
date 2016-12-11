var express = require("express");
var app = express();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//For getting the port number.
app.set('port', (process.env.PORT || 5000))

//requied to fetch static pages.
app.use(express.static('.'));

//If there is nothing in the url serve index.html
app.get('/',function (req,res) {
    res.send('index.html');
})
 
//If there is and input in the url.
app.get('/:time', function(req,res) {
    var date;
    
    //If the input is a number ,in unix time.
    if(!isNaN(Number(req.params.time)))
        date  = new Date(req.params.time*1000);
    //If input is a user readable date.
    else
        date = new Date(req.params.time);
        
    //Prepare the javascript object to send.
;    var obj = {
        unix: date.getTime(),
        normal: months[date.getMonth()]+" "+date.getDate()+", "+date.getUTCFullYear()
    };
    //Send the object.
    res.send(JSON.stringify(obj));
})

//Listen on a given port.
app.listen(app.get('port'), function(){
    console.log('listening on :'+ app.get('port'))
})
