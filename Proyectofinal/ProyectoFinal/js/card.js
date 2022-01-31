class card {
    constructor(id, nombre, precio, descripcion, img) {
        this.id = parseInt(id);
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio).toFixed(2);
        this.descripcion = descripcion;
        this.img = img;
    }
}

export default card;