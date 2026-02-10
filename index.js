import express from "express"
import pg from "pg"
const app = express();
const port = 8000;
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const db = new pg.Client({
    database: "world",
    host: "localhost",
    user: "postgres",
    password: "mastermind01",
    port: 5432

})
db.connect();
app.get("/", async (req, res) => {
    let all = await db.query("SELECT * from items ORDER BY id ASC")
    res.render("index", {
        items: all.rows
    })
})
app.post("/newtodo", async (req, res) => {
    const item = req.body.newitem
    const response = await db.query("INSERT INTO items (title) VALUES ($1)", [item])
    res.redirect("/")

})

app.post("/delete/:id", async (req, res) => {
    const id = req.params.id
    await db.query("DELETE FROM items WHERE id=$1", [id])
    res.redirect("/")

})
app.post("/edit/:id", async (req, res) => {
    const id = req.params.id
    let all = await db.query("SELECT * from items ORDER BY id ASC")
    res.render("index", {
        items: all.rows,
        id: id
    }
    )


})
app.post("/edititem", async (req, res) => {
    const id = req.body.hiddenid
    const editedtext = req.body.editedtext
    await db.query("UPDATE items SET title=$1 WHERE id=$2", [editedtext, id])

    res.redirect("/")
})




app.listen(port, () => {
    console.log("the server is up and running at port number : " + port);
})