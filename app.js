import data from "./data.js";
console.log(data);

const ol = document.querySelector("ol");

data.forEach((product) => {
    const {
        id,
        title,
         description,
        price,
        discountPercentage,
        rating,
        brand,
        stock,
        category,
        thumbnail,
        images,
    } = product;
    
    const li=document.createElement("li")
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    h2.textContent=title
    img.src = thumbnail;
    img.width = 500;

ol.appendChild(li);
   li.appendChild(img)
   li.appendChild(h2)
   console.log(li);
});








































//     const li = document.createElement("li");
//     const h2 = document.createElement("h2");
//     const img = document.createElement("img");

//     h2.textContent = title;
//     img.src = thumbnail; 
//     img.width = 500;

 
//     li.appendChild(h2);
//     li.appendChild(img);


//     ol.appendChild(li);
// });


const addToCartButton = document.querySelector('.add-to-cart-btn');


function addToCart() {
  
  const productName = document.querySelector('.product-title').innerText;
  const productDescription = document.querySelector('.product-description').innerText;
  
  
  console.log('Savatga qo\'shildi:');
  console.log('Mahsulot nomi:', productName);
  console.log('Mahsulot tavsifi:', productDescription);
  
}

addToCartButton.addEventListener('click', addToCart);

