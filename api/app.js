import express from "express";

const app = express();

app.use("/api/test", (req, res) =>{
    res.send("It works");
})

app.listen(8800, () => {
    console.log("server listening on 8800")
})