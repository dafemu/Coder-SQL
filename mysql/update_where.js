const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

knex
    .from("cars")
    .where({ name: "Ferrari" })
    .update({ price: 5000 })
    .then(() => {
        console.log("Car/s updated");
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {knex.destroy();
    });


    // app.put("/cars", (req, res) => {
    //     const name = req.body.name;
    //     const price = req.body.price;
    //     knex
    //     .from("cars")
    //     .where({name: name})
    //     .update({prices:price})
    //     .then((rows) => {
    //         res.json(rows)
    //     })
    //     .catch((error) => {
    //         console.log("Ocurrio un error en el update",error)
    //     })})