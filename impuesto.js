export class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(nuevoMonto) {
        this._montoBrutoAnual = nuevoMonto;
    }

    get deducciones() {
        return this._deducciones;
    }

    set deducciones(nuevasDeducciones) {
        this._deducciones = nuevasDeducciones;
    }
}
