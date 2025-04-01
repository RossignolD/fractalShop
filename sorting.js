const form = document.getElementById("sorting-form");
const products = document.getElementsByClassName("product");

function getProductTitles() {
  let productTitles = {};
  for (let product of products) {
    let productTitle = product.parentElement;
    productTitles[productTitle.dataset.title] = productTitle
}
return productTitles
}

function getProductPrices(){
    let productPrices = {};
    for (let product of products){
        let productPrice = product.parentElement;
        productPrices[productPrice.dataset.price] = productPrice
    }
    return productPrices
}


form.addEventListener("change", (event) => {
  if (event.target.type === "radio") {
    const selectedValue = event.target.value;
    if(selectedValue == "AZ"){
        sortAZ()
    }
    else if (selectedValue == "ZA"){
        sortZA()
    }
    else if (selectedValue == "Hi-Lo"){
        sortHiLo()
    }
    else if (selectedValue== "Lo-Hi"){
        sortLoHi()
    }
  }
});

function sortAZ(){
    let myProductTitles = []
    let myProductDivIds= []
    for (let productTitle in getProductTitles()){
        myProductTitles.push(productTitle)
    }
    myProductTitles.sort()
    for(let product of myProductTitles){
        myProductDivIds.push(getProductTitles()[product].getAttribute("id"))
    }
    for (let id of myProductDivIds){
    document.getElementById("all-items").appendChild(document.getElementById(id))
    }
}

function sortZA(){
    let myProductTitles = []
    let myProductDivIds= []
    for (let productTitle in getProductTitles()){
        myProductTitles.push(productTitle)
    }
    myProductTitles.sort()
    myProductTitles.reverse()
    for(let product of myProductTitles){
        myProductDivIds.push(getProductTitles()[product].getAttribute("id"))
    }
    for (let id of myProductDivIds){
    document.getElementById("all-items").appendChild(document.getElementById(id))
    }
}

function sortLoHi(){
    let myProductPrices = []
    let myProductDivIds = []
    for (let productPrice in getProductPrices()){
        myProductPrices.push(productPrice)
    }
    myProductPrices.sort((a,b)=>a-b)
    for(let product of myProductPrices){
        myProductDivIds.push(getProductPrices()[product].getAttribute("id"))
    }
    for (let id of myProductDivIds){
    document.getElementById("all-items").appendChild(document.getElementById(id))
    }
}

function sortHiLo(){
    let myProductPrices = []
    let myProductDivIds = []
    for (let productPrice in getProductPrices()){
        myProductPrices.push(productPrice)
    }
    myProductPrices.sort((a,b)=>a-b)
    myProductPrices.reverse()
    for(let product of myProductPrices){
        myProductDivIds.push(getProductPrices()[product].getAttribute("id"))
    }
    for (let id of myProductDivIds){
    document.getElementById("all-items").appendChild(document.getElementById(id))
    }
}
