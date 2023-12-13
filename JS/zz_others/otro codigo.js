
let precio_tope = 1150;
let marcas = "Samsung";

//array y una funcion que comprueba si la marca actual está entre las elegidas
let array_marca_elegida = ["Samsung", "Oppo"];
let marca_actual = "Oppo";

function funcion_comprobacion_marca_elegida(array_marca_elegida, marca_actual) {
  //hago una funcion, que invoco dentro del bucle de seleccion
  //recorre todas las marcas elegidas y comprueba si el producto actual es una de ellas
  //devuelve true si sí, false, si no está en el array
  for (let j = 0; j < array_marca_elegida.length; j++) {

  }
}

//funcion aplicar_filtros
for (let i = 0; i < productos.length; i++) {
  // if (productos[i].precio <= precio_tope & productos[i].marca ="Realme") {
  if (productos[i].precio < precio_tope & productos[i].marca == marcas) { //& funcion_comprobacion_marca_elegida()) {
    //comprobacion-marca-elegida es una función que devuelve true 
    //si la marca del producto actual está entre las elegidas que antes he almacenado en un array array_marca_elegida

    //filtro por los que cumplan los filtros
    //los demás no entran aquí -> no se pintan
    console.log("id de producto: ", productos[i]["id-producto"]);
    // console.log("descuento: ", productos[i].discount);
    console.log("nombre1: ", productos[i].nombre1);
    // console.log("nombre2: ", productos[i]["nombre2"]);
    console.log("Marca: ", productos[i].marca)
    console.log("precio: ", productos[i].precio);
    // console.log("nr de review: ", productos[i].nr_reviews);
    // console.log("seller: ", productos[i].seller);
    // console.log(productos[i].stock);


    console.log("*************************************");
    console.log();
  }
}




