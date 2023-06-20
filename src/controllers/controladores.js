const database = require('../connection/connection.js')

const ctrl = {};

ctrl.getProductos=(req, res) => {

    const consulta = 'SELECT * FROM productos';

    database.query(consulta, (err, rows) => {
        if (err) {
            console.log(err);
            return res.json({
                mansaje: 'no se pudo realizar la consulta'
            })
        }
        return res.json(rows)
    })
};

ctrl.postProducto=(req, res) => {
    const { nombre, precio } = req.body;
    const consulta = `INSERT INTO productos (nombre,precio) VALUES ('${nombre},${precio}')`

    database.query(consulta, (err, rows) => {
        if (err) {
            console.log(err);
            return res.json({
                mansaje: 'no se pudo realizar la subida'
            })
        }
        return res.json(rows)
    })
};

module.exports=ctrl