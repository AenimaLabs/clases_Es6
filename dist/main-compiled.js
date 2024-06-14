"use strict";

var _cliente = require("./cliente.js");
var _impuesto = require("./impuesto.js");
var impuesto = new _impuesto.Impuesto(100000, 20000);
var cliente = new _cliente.Cliente('XYZ Consultores', impuesto);
console.log("El impuesto anual a pagar por ".concat(cliente.nombre, " es ").concat(cliente.calcularImpuesto()));