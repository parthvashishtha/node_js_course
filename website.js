const http = require ('http')
const fs = require('fs')

const port = process.env.PORT || 3000; // Whether runs on PORT or 3000

const server = http.createServer((req,res)=>{

    console.log(req.url);

    if(req.url =='/'){
        res.statusCode = 200;
        res.end('<h1>Learning NODEJS</h1><p>My name is Parth Sharma And I am trying to learning NODEJS</p>')
    }
    else if(req.url =='/about'){
        res.statusCode =200;
        res.end('<h1>About Learning NODEJS</h1><p>My name is Parth Sharma And I am the boss</p>')
    }
    else if(req.url =='/hello'){
        res.statusCode =200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
        res.end('<h1>About Learning NODEJS</h1><p>My name is Parth Sharma And I am the boss</p>')
    }
    else{
        // res.random();
        res.statusCode=404;
        res.end('<h1>Error 404</h1><p>Page not found on this server</p>')

    }

});

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})