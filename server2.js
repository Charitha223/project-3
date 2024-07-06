var https=require('http')
var fs=require('fs')
var os=require('os')
const {log}=require('console')
https.createServer(
    function(req,res){
        fs.readFile('example.txt',function(error,data){
            res.write(data)
            res.end()
        })
    }
).listen(3033)