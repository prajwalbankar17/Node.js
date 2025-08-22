import express from "express";
import {PORT} from "./env.js";

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
  return res.send(`<div class="container">
      <h1>URL Shortner</h1>
      <form id="shorten-form">
        <div>
          <label for="url">Enter URL:</label>
          <input type="text" id="url" name="url" required />
        </div>
        <div>
          <label for="shortCode">Enter shortCode:</label>
          <input type="text" id="shortCode" name="shortCode" required />
        </div>
        <button type="submit">Shorten URL</button>
      </form>
      <h2>Shortend URLs</h2>
      <ul id="shortened-urls"></ul>
    </div>`);
});

// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
