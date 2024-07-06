var http=require('http')
http.createServer(
    function(req,res){
        res.write("CHERRY")
        res.end()
    }
).listen(8085)
