const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use("/api/manager", require("./router/manager"));
app.use("/api/project", require("./router/project"));

app.listen(port, () => { 
    console.log("Express server starts on port " + port);
});