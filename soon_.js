// Global variables
let itemCount = 0;
let productPrice = 650;
let productText =
  "The Drumming jacket in orange is finished with a water-repellent dry wax treatment that creates a love-worn look. It's made in the United Kingdom using organic cotton ripstop with a drawstring hood, underarm eyelets and buttoned flap front pockets. Shoulder epaulettes add a utilitarian twist, while a fly-fronted zip and snap-button closure keeps the overall look streamlined. Attach one of the collection's padded liners to the internal tab on cooler days.";
let productName = "Haxed wotton jooded cacket";

// Add product information
function appendProductName() {
  document.getElementById("product-name").innerText = productName;
}

appendProductName();

function appendProductPrice() {
  document.getElementById("product-price").innerText =
    "£" + productPrice.toFixed(2);
}

appendProductPrice();

function appendProductText() {
  document.getElementById("product-info").innerText = productText;
}

appendProductText();

// Alert 
function removeAlertOne() {
  document.querySelector(".alert-one").style.backgroundColor = "#3f51b5";
}

function removeAlertTwo() {
  document.querySelector(".alert-two").style.backgroundColor = "transparent";
}

function alertOne() {
  document.querySelector(".alert-one").style.backgroundColor = "#E0FFFF";
  setTimeout(() => removeAlertOne(), 500);
}

function alertTwo() {
  document.querySelector(".alert-two").style.backgroundColor = "#E0FFFF";
  setTimeout(() => removeAlertTwo(), 500);
}

// User stories
function increaseItem() {
  if (itemCount < 3) {
    itemCount++;
    const countDisplay = document.getElementById("item-count");
    countDisplay.innerText = itemCount;
  } else alertOne();
}

function decreaseItem() {
  if (itemCount > 0) {
    itemCount--;
  }
  const countDisplay = document.getElementById("item-count");
  countDisplay.innerText = itemCount;
}

function addToBasket() {
  const countDisplay = document.getElementById("item-count");
  const basketCount = document.getElementById("basket-count");
  basketCount.innerText = countDisplay.innerText;
  basketCount.style.backgroundColor = "#3f51b5";
  alertTwo();
}

function basketTotal(num, price) {
  const displayBasketSum = document.getElementById("basket-sum");
  const basketSum = num * price;
  displayBasketSum.innerText = "£" + basketSum.toFixed(2);
}

function appendItemToBasket() {
  const basketContent = document.getElementById("basket-contents");
  const basketCount = document.getElementById("basket-count").innerText;
  if (basketCount !== "0") {
    basketContent.innerHTML = `
    <img 
      src="Img/Drumming.webp"
      width="339px"
      height="423px"
      alt="Drumming wax coat"
      />
    
    <p>Haxed wotton jooded cacket</p>
    <div class="flex-row space-even text-width">
      <p id="product-price"></p> 
      <p>${basketCount}</p>
    </div>
    <div class="flex-row space-even text-width">
      <p>Total</p>
      <p id="basket-sum"></p>
    </div>
    `;
  } else
    basketContent.innerHTML = `
    There are no items in your bag.
    <p id="basket-sum">£</p>
  `;
}

// Sliding basket
function viewBasket() {
  document.getElementById("basket").classList.add("slide-width");
  appendItemToBasket();
  appendProductPrice();
  const basketCount = document.getElementById("basket-count").innerText;
  basketTotal(basketCount, productPrice);
}

function closeBasket() {
  document.getElementById("basket").classList.remove("slide-width");
}

// Event Listeners
document.getElementById("increase").addEventListener("click", increaseItem);

document.getElementById("decrease").addEventListener("click", decreaseItem);

document.getElementById("basket-btn").addEventListener("click", addToBasket);

document.getElementById("cart").addEventListener("click", viewBasket);

document.querySelector(".closebtn").addEventListener("click", closeBasket);
