import axios from "axios";


let products = []

const res = async ()  => {
  let arr = await axios.get("https://dummyjson.com/products")

  if (arr.status == 200 || arr.status == 201 ) {
    products = products.concat(arr.data.products)

    createItemCard(products)
    // console.log(products);
  }
}

res()

function createItemCard(data) {
   for(let item of data) {
    console.log(item);

    let conteiner = document.querySelector("#conteiner")

    let div = document.createElement("div")
    let img = document.createElement("img")
    let title = document.createElement("h1")
    let txt = document.createElement("p")
    let price = document.createElement("p")
    let prices = document.createElement("p")
    let sale_prirce = document.createElement("p")
    let category = document.createElement("p")
    let brand = document.createElement("p")
    let img2 = document.createElement("img")
    let basketd = document.createElement("div")
    price.setAttribute("class" , "price")
    prices.setAttribute("class" , "prices")
    prices.setAttribute("class" , "prices")
    category.setAttribute("class" , "category")
    img.setAttribute("src" , item.thumbnail)
    title.setAttribute("class" , "title")
    img2.setAttribute("src", "./img/shopping-cart.png")
    img2.setAttribute("class", "basket")
    basketd.setAttribute("class", "basketd")
    img.setAttribute("class", "rasm")
    title.innerHTML = item.title
    txt.innerHTML = item.description
    category.innerHTML = item.category
    brand.innerHTML = item.brand

    sale_prirce.innerHTML = item.price / 100 * item.rating
    prices.innerHTML = item.price + `${"$"}` 
    price.innerHTML = Math.floor(item.price - sale_prirce.innerHTML)+ `${"$"}`
    
  
    let smartphones = document.querySelector(".smartphones")
    let laptops = document.querySelector(".laptops")
    let fragrances = document.querySelector(".fragrances")
//     let skincare = document.querySelector(".skincare")
//     let groceries = document.querySelector(".groceries")
//     let homedecoration = document.querySelector(".home-decoration")
if (category.innerHTML == "furniture") {
  
  smartphones.append(div)
  div.append(img)
  div.append(title)
  div.append(txt)
  div.append(category)
  div.append(brand)
  div.append(price)
  div.append(prices)
  basketd.append(img2)
  div.append(basketd)
}else if(category.innerHTML == "beauty"){
  laptops.append(div)
  div.append(img)
  div.append(title)
  div.append(txt)
  div.append(category)
  div.append(brand)
  div.append(price)
  div.append(prices)
  basketd.append(img2)
  div.append(basketd)
 }else if (category.innerHTML == "groceries") {
  
fragrances.append(div)
div.append(img)
div.append(title)
div.append(txt)
div.append(category)
div.append(brand)
div.append(price)
div.append(prices)
basketd.append(img2)
div.append(basketd)
}
//  else if(category.innerHTML == "skincare"){
//   skincare.append(div)
//   div.append(img)
//   div.append(title)
//   div.append(txt)
//   div.append(category)
//   div.append(brand)
//   div.append(price)
//   div.append(prices)
// }else if (category.innerHTML == "groceries") {
//   groceries.append(div)
//   div.append(img)
//   div.append(title)
//   div.append(txt)
//   div.append(category)
//   div.append(brand)
//   div.append(price)
//   div.append(prices)
// }else if (category.innerHTML == "Home-decoration") {
//   homedecoration.append(div)
//   div.append(img)
//   div.append(title)
//   div.append(txt)
//   div.append(category)
//   div.append(brand)
//   div.append(price)
//   div.append(prices)
// }

// conteiner.append(div)
// div.append(img)
// div.append(title)
// div.append(txt)
// div.append(category)
// div.append(brand)
// div.append(price)
// div.append(prices)
    
   }
}
