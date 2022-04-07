const http = require ('http')

const port = process.env.PORT || 3000; // Whether runs on PORT or 3000

const server = http.createServer((req,res)=>{

    console.log(req.url);
    res.statusCode = 200; //It(200) means ok running fine
    res.setHeader('Content-type','text/HTML')
    res.end('<h1>Learning NODEJS</h1><p>My name is Parth Sharma And I am trying to learning NODEJS</p>')

});

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})