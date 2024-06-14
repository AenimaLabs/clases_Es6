import { Cliente } from './cliente.js';
import { Impuesto } from './impuesto.js';

const impuesto = new Impuesto(100000, 20000);
const cliente = new Cliente('XYZ Consultores', impuesto);

console.log(`El impuesto anual a pagar por ${cliente.nombre} es ${cliente.calcularImpuesto()}`);
