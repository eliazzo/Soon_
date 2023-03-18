// Global variables
let itemCount = 0;
let productPrice = 650;
let productText;
let productName = 'Haxed wotton jooded cacket';

// Add product information
function appendProductName() {
  document.getElementById('product-name').innerText = productName;
};

appendProductName()

function appendProductPrice() { 
  const price = '£' + productPrice;
  document.getElementById('product-price').innerText = price;
};

appendProductPrice(); 

function appendProductText() {
  productText = 'The challenge is designed to demonstrate your knowledge and experience of frontend web development. Feel free to complete the challenge using the tools and technologies you’re most comfortable with, we will expect to see use of HTML / CSS and some JS. A Figma file will be provided alongside the challenge which should be used to inform the visual aspect of the UI.'
  document.getElementById('product-info').innerText = productText;
};

appendProductText(); 
// End

// Alert functions
function removeAlertOne() {
  document.querySelector('.alert-one').style.backgroundColor = '#3f51b5';
};

function removeAlertTwo() {
  document.querySelector('.alert-two').style.backgroundColor = 'transparent';
};

function alertOne() {
  document.querySelector('.alert-one').style.backgroundColor = '#E0FFFF';
  setTimeout(() => removeAlertOne(), 500);
};

function alertTwo() {
  document.querySelector('.alert-two').style.backgroundColor = '#E0FFFF';
  setTimeout(() => removeAlertTwo(), 500);
};
// End


function increaseItem() {
  if (itemCount < 3){
  itemCount++;
  const countDisplay = document.getElementById('item-count');
  countDisplay.innerText = itemCount;
}
  else alertOne();
};

function decreaseItem() {
  if (itemCount > 0) { 
    itemCount--;
  }
  const countDisplay = document.getElementById('item-count');
  countDisplay.innerText = itemCount;
};

function addToBasket() {
  const basketCount = document.getElementById('basket-count');
  const countDisplay = document.getElementById('item-count');
  basketCount.innerText = countDisplay.innerText;
  alertTwo();
};

function basketTotal() {
  const displayBasketSum = document.getElementById('basket-sum');
  const basketCount = document.getElementById('basket-count').innerText;
  const basketSum = '£' + Number(basketCount) * productPrice;
  displayBasketSum.innerText = basketSum;
};

function appendItemToBasket() {
  const basketContent = document.getElementById('basket-contents');
  const basketCount = document.getElementById('basket-count').innerText;
  if (basketCount !== '0') {
  basketContent.innerHTML = `
    <img 
      src="Drumming.webp"
      width="339px"
      height="423px"
      alt="Drumming wax coat"
      />
    <p>Haxed wotton jooded cacket</p>
    <p id="product-price" class="grey"></p> x ${basketCount}
    <p>Total</p>
    <p id="basket-sum">£</p>
    `
  }
  else basketContent.innerHTML = `
    There are no items in your bag.
    <p id="basket-sum">£</p>
  `
}

// Sliding basket functions
function viewBasket() {
  document.getElementById('basket').classList.add('curtain-width');
  appendItemToBasket();
  appendProductPrice();
  basketTotal();
}

function closeBasket() {
  document.getElementById('basket').classList.remove('curtain-width');
}
// End

// Event Listeners
document.getElementById('increase').addEventListener('click', increaseItem);

document.getElementById('decrease').addEventListener('click', decreaseItem);

document.getElementById('basket-btn').addEventListener('click', addToBasket)

document.getElementById('cart').addEventListener("click", viewBasket);

document.querySelector('.closebtn').addEventListener("click", closeBasket);
// End












