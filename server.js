var express = require("express");
var app = express();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.get('/',function (req,res) {
    res.send("Hello!");
})
app.get('/:time', function(req,res) {
    var date;
    if(!isNaN(Number(req.params.time)))
        date  = new Date(req.params.time*1000);
    else
        date = new Date(req.params.time);
    //console.log(date);
    //console.log(Number(req.params.time))
;    var obj = {
        unix: date.getTime(),
        normal: months[date.getMonth()]+" "+date.getDate()+", "+date.getUTCFullYear()
    };
    res.send(JSON.stringify(obj));
})
app.listen(80, function(){
    console.log('listening on 8080:')
})
