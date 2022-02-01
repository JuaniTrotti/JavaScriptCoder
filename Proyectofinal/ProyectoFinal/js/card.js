class card {
    constructor(id, nombre, precio, descripcion, img, dim) {
        this.id = parseInt(id);
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio).toFixed(2);
        this.descripcion = descripcion;
        this.img = img;
        this.dim = dim;
    }
}

export default card;