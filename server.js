require("dotenv").config();
const express = require("express");
const route = express.Router
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute")


const app = express();

app.use(express.json());
app.use(cors());

app.use("/contact", contactRoute);

if (process.env.NODE_ENV === "production") { 
  app.enable('trust proxy')
  app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
}) 
  app.use(express.static("client/build"));
  app.get("/*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000 only`));
