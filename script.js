
async function getProducts() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    let data = response.data.products;
    const result = data.map(function (ele) {
       return `
       <div class="product">
       <div class="info">
       <h2>${ele.title}</h2>
       <a href="details.html?productID=${ele.id}">Details</a>
       </div>
         <img src="${ele.thumbnail}" alt="product-image" />
       </div>
       
       `
    }).join('')

    document.querySelector('.products').innerHTML = result;
    document.querySelector('.numberOfItems').innerHTML = response.data.products.length;
  } catch (error) {
    console.error(error);
  }
}
getProducts()