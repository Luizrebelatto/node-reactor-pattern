const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log("Request received");

  fs.readFile('./emailTemplate.html', 'utf8', (err, template) => {
    if (err) {
      res.statusCode = 500;
      res.end("Erro ao ler template");
      return;
    }

    console.log("Sending email with content:");
    console.log(template);

    res.statusCode = 200;
    res.end("Registered user and email sent!");
  });

  console.log("Server continues free for other requests");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
