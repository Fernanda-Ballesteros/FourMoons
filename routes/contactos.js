const express = require("express");
const router = express.Router();
const Contacto = require("../Contacto");

router.get("/", async (req, res) => {
    Contacto.find()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({ message: e });
        });
});

router.post("/",(req, res) => {
    const contacto = new Contacto({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        comentarios: req.body.comentarios
    });

    contacto.save()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({ message: e });
        });
});



module.exports = router;