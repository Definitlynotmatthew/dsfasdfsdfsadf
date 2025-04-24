const express = require("express");
const basicAuth = require("express-basic-auth");
const { createServer } = require("http");
const { default: uv } = require("@titaniumnetwork-dev/ultraviolet");

const app = express();
const port = process.env.PORT || 8080;

// Password-protect entire app
app.use(basicAuth({
  users: { "user": "6969" },
  challenge: true,
  realm: "Interstellar 69"
}));

// Set up Ultraviolet proxy
uv(app, {
  prefix: '/service/',
  bare: 'https://ultraviolet-titaniumnetwork-dev.bareproxy.repl.co',
  encodeUrl: true,
  injectScript: true
});

// Redirect homepage to example site via proxy
app.get("/", (req, res) => {
  res.redirect("/service/https://example.com");
});

createServer(app).listen(port, () => {
  console.log("Interstellar 69 proxy running on port " + port);
});