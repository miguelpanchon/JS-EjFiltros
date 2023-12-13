var filteredBrands = "";
var filterMaxAmount = 1000000000;
var highestPrice = 0;
findHighestPrice();
FpaintFilters();
FpaintProducts();

// handling the select filter
var selectElement = document.getElementById('mySelect');
selectElement.addEventListener('change', function () {
  var selectedValue = selectElement.value;
  filteredBrands = selectedValue;

  //repaint products
  FremoveProducts();
  FpaintProducts();
});


// handling the input text filter
const textInput = document.getElementById('textInput');
textInput.addEventListener('input', function () {
  // Update the slider value with the input box value
  const inputValue = parseInt(textInput.value) || 0; // Ensure it's a number
  slide.value = Math.min(Math.max(inputValue, slide.min), slide.max);
});

const myFilterButton = document.getElementById('BTNfilter');
myFilterButton.addEventListener('click', function () {
  const inputValue = textInput.value;


  //valid number check
  const isNonNegativeNumber = /^\d+(\.\d+)?$/.test(inputValue);
  if (isNonNegativeNumber && parseFloat(inputValue) >= 0) {
    filterMaxAmount = inputValue;
    FremoveProducts();
    FpaintProducts();

  } else {
    //seguiridad: evitamos SQL injection o similar
    alert('Invalid input. Please enter a non-negative number.');
    textInput.value = "";
  }
});


//connect the slide with the input box
//const textInput = document.getElementById('textInput'); ya está creado más arriba
const slide = document.getElementById('slide');
slide.addEventListener('input', function () {
  textInput.value = slide.value;
});


// handling the "limpiar filtros" button
const limpiarFiltrosBtn = document.getElementById('eliminateFilters');
limpiarFiltrosBtn.addEventListener('click', function () {

  FremoveFilters();
  FremoveProducts();
  FpaintProducts();
});







//ToDo0 -> romper la funcion FremoveFilters en 3, una por cada filtro de manera
// que cuando reinicio filtros (boton) invoco las 3 pero
// cuando hago ToDo1 invoco la minifuncion que resetea uno de los filtros
// y lo mismo con ToDo2 -> solo que con el otro

//ToDo1  ->previo: añadir un id a los checkboxes, al inyectar el código en FpaintFilters
// de esta manera sé qué checkbox es cual y los puedo distinguir.
//usar número secuencial? usar la marca? (comprobar que la marca no está vacía)
// si hago click en checkbox, el combobox vuelve a primera opcion

//ToDo2 -> si elijo en combobox, los checkbox se me vuelven al estado inicial

//Todo3 ->  crear un array con los productos seleccionados por los filtros
// y usarlo como argumento de invocar FpaintProducts cuando activo un filtro

//nice to have -> estando con el foco en el input box, si aprieto enter,
//que "apriete" el botón filtrar

// nice to have 2 -> preguntar a chatGPT por un formato más agradable para
//las tarjetas de los telefonos

// nice to have 3 -> quitar los event listeners del main

// sacar todo del main y meterlo en un bucle para que las variables no vayan a pelo
// y sean invisibles  -> consultar con chatGPT si esto es asi y es la mejor manera


//todo -> comentar todas las funciones con chatgpt