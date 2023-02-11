const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("static"));

app.get("/generated", (request, response) => {
  let body = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Test Angular Elements</title>
  </head>
  <body onload="setup()">`;
  for (let i = 0; i < 100; i++) {
    body += `<sg-counter-component id="counter-component-${i}" initial-count="${i}"></sg-counter-component>`;
  }
  body += `<script src="js/runtime.js" type="module"></script>
    <script src="js/polyfills.js" type="module"></script>
    <script src="js/main.js" type="module"></script>
    <script>
      function setup() {
        for (let i = 0; i < 100; i++) {
        const counter = document.getElementById("counter-component-" + i);
        counter.addEventListener("onValidationFailure", (event)=> alert(event.detail + " is not a number in counter-component-" + i + "!"));
        }
      }
    </script>
  </body>
</html>`;
  response.send(body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
