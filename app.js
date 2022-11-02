const express = require("express")
const ejs = require("ejs")


const app = express();

const dogs = {

    "name": [
        {
            id: 1,
            name: "joshua",
            type: "teeth"
        },
        {
            id: 2,
            name: "joshua",
            type: "teeth"
        }
    ]

}
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.json(dogs)
})

app.listen(3000)