const products = document.getElementsByClassName("product");

function getProductTitles() {
  let productTitles = {};
  for (let product of products) {
    let productTitle = product.parentElement;
    console.log(productTitle.dataset.title)
    productTitles[productTitle.dataset.title] = productTitle
}
return productTitles
}

const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener("change", (event) => {
  if (event.target.type === "radio") {
    const selectedValue = event.target.value;
    console.log(selectedValue);
  }
});

function sortAZ(){
    let myProductTitles = []
    for (let productTitle in getProductTitles()){
        myProductTitles.push(productTitle)
    }
    return myProductTitles.sort()
}


