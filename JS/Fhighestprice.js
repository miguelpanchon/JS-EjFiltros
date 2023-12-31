//para que el slider no tenga un valor máximo fijo (hardcoded) hay que saber
// cual es el precio más alto de los telefonos dentro de nuestros datos


// Function to find the highest price from productsData
function findHighestPrice() {
  highestPrice = productsData.reduce((maxPrice, product) => {
    const currentPrice = product.precio;
    return currentPrice > maxPrice ? currentPrice : maxPrice;
  }, 0);
}