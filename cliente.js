export class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get impuesto() {
        return this._impuesto;
    }

    set impuesto(nuevoImpuesto) {
        this._impuesto = nuevoImpuesto;
    }

    calcularImpuesto() {
        const { montoBrutoAnual, deducciones } = this._impuesto;
        return (montoBrutoAnual - deducciones) * 0.21;
    }
}
