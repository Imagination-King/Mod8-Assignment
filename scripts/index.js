const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let pathName = q.pathname;
    let fileName;

    switch (pathName) {
      case "/":
      case "/index":
        fileName = "./index.html";
        break;
      case "/about":
        fileName = "./about.html";
        break;
      case "/contact-me":
        fileName = "./contact-me.html";
        break;
      default:
        fileName = "./404.html";
        break;
    }

    fs.readFile(fileName, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      return res.end();
    });
  })
  .listen(8080);

console.log("Server listening on port 8080");
