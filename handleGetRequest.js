const http = require('http');

//Handle Get request
const handleGetRequest = (req, res) => {
  const pathname = req.url;

  if (pathname === '/users') {
    res.end(JSON.stringify([])); // using JSON.stringify() method to convert the array into a JSON string.
  }
}

// Creates server instance
const server = http.createServer((req, res) => {
const {method} = req;
switch (method) {
  case 'GET':
  return handleGetRequest(req,res);
}
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});
