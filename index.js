
//const button = document.querySelector("button");

//<button onclick= "window.location.href='https://order.com'">order now</button>

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Get the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    res.send("https://esther-c4275.github.io/res")
});

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "exercise4")));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

