// Simple Node.js server
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  if (req.url === '/') {
    res.end('<h1>Welcome to SampleRepository Server!</h1>\n<p>Server is running successfully.</p>');
  } else if (req.url === '/api') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'API endpoint', status: 'active' }));
  } else {
    res.statusCode = 404;
    res.end('<h1>404 - Page Not Found</h1>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Press Ctrl+C to stop the server');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nServer shutting down...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
