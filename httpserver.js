const http =  require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
  console.log(req.url)
  res.statusCode = 200;
  res.setHeader = ('Content-Type' , 'text/html')
  res.end('<h1>This is the code of mine</h1><p>This is the way to say Namaste in India!</p>');

})
  server.listen(port, ()=>{
    console.log(`Notify me by the port ${port}`);
  })
