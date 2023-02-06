const http = require("http");
const fs = require("fs");
const { isReadable } = require("stream");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  let requestUrl = url.parse(req.url, true);

  switch (requestUrl.pathname) {
    case "/":
      fs.readFile("./html-pages/index.html", (err, data) => {
        if (err) {
          res.writeHead(404, { ContentType: "text-plain" });
          res.end("Error: file not found");
        }
        res.writeHead(200, { ContentType: "text-html" });
        res.end(data);
      });
      break;
    case "/about":
      fs.readFile("./html-pages/about.html", (err, data) => {
        if (err) {
          res.writeHead(404, { ContentType: "text-plain" });
          res.end("Error: file not found");
        }
        res.writeHead(200, { ContentType: "text-html" });
        res.end(data);
      });
      break;
    case "/contact":
      fs.readFile("./html-pages/contact.html", (err, data) => {
        if (err) {
          res.writeHead(404, { ContentType: "text-plain" });
          res.end("Error: file not found");
        }
        res.writeHead(200, { ContentType: "text-html" });
        res.end(data);
      });
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Error: 404 Page Not Found");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
