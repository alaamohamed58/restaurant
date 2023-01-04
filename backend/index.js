const http = require("http");
const url = require("url");
const fs = require("fs");

//data
const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const parsedData = JSON.parse(data);

//html template
const htmlTemp = fs.readFileSync("../frontend/index.html", "utf-8");

//replace template
const replaceTemplates = (temp, product) => {
  let output = temp.replace(/{%PRICE%}/g, product.price);
  return output;
};

//server
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === "/") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
  }

  const product = parsedData[0];

  const output = replaceTemplates(htmlTemp, product);
  res.end(output);
});

// listen to the server
server.listen(8000, "127.0.0.1", () => {
  console.log("%clistening to request on port 8000", "color : red");
});
