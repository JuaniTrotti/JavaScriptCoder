class card {
    constructor(id, nombre, precio, descripcion) {
        this.id = parseInt(id);
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio).toFixed(2);
        this.descripcion = descripcion;
    }
}

export default card;