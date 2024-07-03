/*
 
 * SISTEMA DE INVENTARIO DE TIENDA *
Crear un sistema de inventario para una tienda con las siguientes clases:
 
Producto: Representa un producto en el inventario.
Categoria: Representa una categoria de productos
Inventario: Gestiona los productos y categorias
 
Cada clase debe tener las siguientes funcionalidades:
 
Producto:
 
    Propiedades: nombre, precio, cantidad, categoria
    Métodos: agregarCantidad, reducirCantidad
 
Categoria:
 
    Propiedades: nombre, productos (array)
    Métodos: agregarProducto
 
Inventario:
 
    Propiedades: productos(array), categorias(array)
    Métodos: agregarProducto, agregarCategoria, listarProductosPorCategoria
 
*/


class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    agregarCantidad(cantidad) {
        this.cantidad += cantidad;
    }

    reducirCantidad(cantidad) {
        if (this.cantidad >= cantidad) {
            this.cantidad -= cantidad;
        } else {
            console.log(`No hay suficiente cantidad de ${this.nombre} para reducir.`);
        }
    }
}

class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }
}

class Inventario {
    constructor() {
        this.productos = [];
        this.categorias = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        const categoria = this.categorias.find(cat => cat.nombre === producto.categoria);
        if (categoria) {
            categoria.agregarProducto(producto);
        }else{
            console.log(`Categoria ${producto.categoria} no encontrada. `)
        }
        
    }

    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }

    listarProductosPorCategoria(nombreCategoria){
        const categoria = this.categoria.find(cat => cat.nombre === nombreCategoria);
        if(categoria){
            console.log(`Productos en la categoría ${nombreCategoria}: `);
            categoria.productos.forEach(prod => console.log(` - ${prod.nombre} (${prod.cantidad} unidades)`));
        }else{
            console.log(`Categoria ${nombreCategoria} no encontrada.`);
        }
    }

}

//EJEMPLOS DE USO
const inventario = new Inventario();
const categoria1 = new Categoria('Electrónica');
const categoria2 = new Categoria('Ropa');

inventario.agregarCategoria(categoria1);
inventario.agregarCategoria(categoria2);


const producto1 = new Producto('Televisor', 300, 10, 'Electrónica' );
const producto2 = new Producto('Camiseta', 20, 50, 'Ropa' );

inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);

inventario.listarProductosPorCategoria('Ropa');