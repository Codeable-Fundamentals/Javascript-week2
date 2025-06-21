// ===== INVENTARIO DE PRODUCTOS =====

// Definición de objetos producto
let producto1 = {
    nombre: "Laptop Gaming",
    precio: 1200,
    stock: 5,
    categoria: "tecnologia"
};

let producto2 = {
    nombre: "Mouse Inalámbrico",
    precio: 25,
    stock: 50,
    categoria: "accesorios"
};

let producto3 = {
    nombre: "Monitor 4K",
    precio: 300,
    stock: 0,
    categoria: "tecnologia"
};

let producto4 = {
    nombre: "Teclado Mecánico",
    precio: 80,
    stock: 1,
    categoria: "accesorios"
};

let producto5 = {
    nombre: "Smartphone",
    precio: 800,
    stock: 15,
    categoria: "tecnologia"
};

// ===== FUNCIONES A IMPLEMENTAR =====

function aplicarDescuento(producto, porcentaje) {
    // TODO: Implementar - Retornar el precio con descuento aplicado
    let precioDescontado = producto.precio * (100 - porcentaje)/100;
    return precioDescontado;
}

function verificarDisponibilidad(producto, cantidad = 1) {
    // TODO: Implementar - Retornar true si hay suficiente stock
    let hayStock = producto.stock >= cantidad;
    return hayStock;
}

function valorTotalInventario(producto) {
    // TODO: Implementar - Retornar precio * stock
    let valorTotal = producto.precio * producto.stock;
    return valorTotal;
}

// ===== CASOS DE PRUEBA =====

console.log("=== PRUEBAS FUNCIÓN aplicarDescuento() ===");
console.log("Laptop con 10% descuento:", aplicarDescuento(producto1, 10)); // Esperado: 1080
console.log("Mouse con 20% descuento:", aplicarDescuento(producto2, 20)); // Esperado: 20
console.log("Monitor con 50% descuento:", aplicarDescuento(producto3, 50)); // Esperado: 150
console.log("Teclado con 0% descuento:", aplicarDescuento(producto4, 0)); // Esperado: 80
console.log("Smartphone con 15% descuento:", aplicarDescuento(producto5, 15)); // Esperado: 680

console.log("\n=== PRUEBAS FUNCIÓN verificarDisponibilidad() ===");
console.log("¿Laptop disponible (stock: 5)?", verificarDisponibilidad(producto1)); // Esperado: true
console.log("¿Monitor disponible (stock: 0)?", verificarDisponibilidad(producto3)); // Esperado: false
console.log("¿3 Laptops disponibles?", verificarDisponibilidad(producto1, 3)); // Esperado: true
console.log("¿10 Laptops disponibles?", verificarDisponibilidad(producto1, 10)); // Esperado: false
console.log("¿2 Teclados disponibles (stock: 1)?", verificarDisponibilidad(producto4, 2)); // Esperado: false
console.log("¿25 Mouses disponibles (stock: 50)?", verificarDisponibilidad(producto2, 25)); // Esperado: true

console.log("\n=== PRUEBAS FUNCIÓN valorTotalInventario() ===");
console.log("Valor total Laptop (1200 × 5):", valorTotalInventario(producto1)); // Esperado: 6000
console.log("Valor total Mouse (25 × 50):", valorTotalInventario(producto2)); // Esperado: 1250
console.log("Valor total Monitor (300 × 0):", valorTotalInventario(producto3)); // Esperado: 0
console.log("Valor total Teclado (80 × 1):", valorTotalInventario(producto4)); // Esperado: 80
console.log("Valor total Smartphone (800 × 15):", valorTotalInventario(producto5)); // Esperado: 12000

// ===== CASOS EDGE (LÍMITE) =====
console.log("\n=== CASOS LÍMITE ===");

let productoGratis = {
    nombre: "Producto Gratis",
    precio: 0,
    stock: 100,
    categoria: "promocional"
};

let productoCaro = {
    nombre: "Producto Premium",
    precio: 10000,
    stock: 2,
    categoria: "lujo"
};

console.log("Producto gratis con 50% descuento:", aplicarDescuento(productoGratis, 50)); // Esperado: 0
console.log("Producto premium con 100% descuento:", aplicarDescuento(productoCaro, 100)); // Esperado: 0
console.log("¿Producto gratis disponible?", verificarDisponibilidad(productoGratis)); // Esperado: true
console.log("¿0 productos disponibles?", verificarDisponibilidad(producto1, 0)); // Esperado: true
console.log("Valor inventario producto gratis:", valorTotalInventario(productoGratis)); // Esperado: 0
console.log("Valor inventario producto premium:", valorTotalInventario(productoCaro)); // Esperado: 20000

// ===== PRUEBAS ADICIONALES ===
console.log("\n=== PRUEBAS ADICIONALES ===");

// Probar con descuentos decimales
console.log("Laptop con 12.5% descuento:", aplicarDescuento(producto1, 12.5)); // Esperado: 1050

// Verificar disponibilidad exacta
console.log("¿Exactamente 5 Laptops disponibles?", verificarDisponibilidad(producto1, 5)); // Esperado: true
console.log("¿Exactamente 6 Laptops disponibles?", verificarDisponibilidad(producto1, 6)); // Esperado: false