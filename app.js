const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());

const connection = require("./database.js");

async function select() {
    try {
        const [rows] = await connection.query("SELECT * FROM user");
        console.log(rows);
    }catch(error) {
        console.log(error);
    }
}

app.post("/users", async (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log("servidor rodando");
});