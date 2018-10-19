
const casual = require('casual');

function tresDigitos() {
    return `${casual.integer(from = 0, to = 9)}${casual.integer(from = 0, to = 9)}${casual.integer(from = 0, to = 9)}`
}

casual.define('defineOferta', function() {
    return {
        id: casual.uuid,
        Status: casual.boolean,
        Sucursal: casual.random_element(['VICTORIA', 'ZARAGOZA', 'OLUTA', 'JALTIPAN']),
        Articulo: `0101${tresDigitos()}`,
        Descripcion: casual.description,
        Costo: casual.double(from = 10, to = 20),
        Precio: casual.double(from = 30, to = 40),
        Oferta: casual.double(from = 20, to = 30)
    };
});
function generadorOferta(n) {
    var data = [];
    for(var i = 1; i <= n; i++) {
        data.push(casual.defineOferta)
    }
    return data;
}

module.exports = generadorOferta;
