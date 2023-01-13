const http = require("http");
const fs = require("fs");
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
      if (err) throw err;
      res.end(content);
    });
  } else if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), (err, content) => {
      if (err) throw err;
      res.end(content);
    });
  } else if (req.url === "/contact-me") {
    fs.readFile(path.join(__dirname, "contact-me.html"), (err, content) => {
      if (err) throw err;
      res.end(content);
    });
  } else {
    fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
      res.end(content);
    });
  }
});
server.listen(port, () => console.log("server running on port: ", port));
