
async function getProductInfo() {
  try {
    let searchParams = new URLSearchParams(window.location.search);

    var params = searchParams.get('productID');
    const response = await axios.get(`https://dummyjson.com/products/${params}`);
    const data = response.data;
 const {title,thumbnail,category,brand,rating,description,price,discountPercentage} = data
 


   document.querySelector('.title').innerHTML = title;
   document.querySelector('.category').innerHTML = category;
   document.querySelector('.price').innerHTML = price;
   document.querySelector('.image').src = thumbnail;

   document.querySelector('.rating').innerHTML = rating;
   document.querySelector('.brand').innerHTML = brand;
   document.querySelector('.description').innerHTML = description;
  } catch (error) {
    console.error(error);
  }
}

getProductInfo()