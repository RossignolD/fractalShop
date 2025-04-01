function search() {
  let input = document.getElementById("search-input").value.toLowerCase();
  let allItems = document.getElementById("all-items");
  let h3s = allItems.getElementsByTagName("h3");

  for (let i = 0; i < h3s.length; i++) {
    product = h3s[i];
    text = product.innerText;
    if (text.toLowerCase().indexOf(input) > -1) {
      h3s[i].parentElement.style.display = "";
    } else {
      h3s[i].parentElement.style.display = "none";
    }
  }
}
