/*
Startsida/Visa kurser
Lägg till kurs sida (Formulär)
Om sida

Databas
    id
    coursecode
    course name
    syllabus (url)
    progression (A B eller C)

Skapa ER Diagram

*/
const express = require("express");
const app = express();
const port = 3000;

//Route
app.get("/", (req, res) => {
    res.send("Hejsan!");
});

//Starta

app.listen(port, () => {
    console.log("Server started on port: " + port);
});