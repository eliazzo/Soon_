// Global variables
let itemCount = 0;
let productPrice = 650;
let productText;

// Product information on page load
function appendProductPrice() {
  const price = '£' + productPrice;
  document.querySelector('#product-price').innerText = price;
}
appendProductPrice(); 

function appendProductText() {
  productText = 'The challenge is designed to demonstrate your knowledge and experience of frontend web development. Feel free to complete the challenge using the tools and technologies you’re most comfortable with, we will expect to see use of HTML / CSS and some JS. A Figma file will be provided alongside the challenge which should be used to inform the visual aspect of the UI.'
  document.querySelector('#product-info').innerText = productText;
}
appendProductText(); 

// End

function removeAlert() {
  document.querySelector('#basket-btn').style.backgroundColor = '#3f51b5';
}

function blueAlert() {
  document.querySelector('#basket-btn').style.backgroundColor = '#E0FFFF';
  // document.querySelector('#basket-btn').style.border = '#00CED1';
  setTimeout(() => removeAlert(), 500);
}

function increaseItem() {
  if (itemCount < 3){
  itemCount++;
  const countDisplay = document.querySelector('#item-count');
  countDisplay.innerText = itemCount;
}
else blueAlert();
}

function decreaseItem() {
  if (itemCount > 0) { 
    itemCount--;
  }
  const countDisplay = document.querySelector('#item-count');
  countDisplay.innerText = itemCount;
}



function addToBasket() {
  const basketCount = document.querySelector('#basket-count');
  const countDisplay = document.querySelector('#item-count');
  basketCount.innerText = countDisplay.innerText;
}

function basketTotal() {
  const displayBasketSum = document.getElementById('basket-sum');
  const basketCount = document.querySelector('#basket-count').innerText;
  const basketSum = '£' + Number(basketCount) * productPrice;
  displayBasketSum.innerText = basketSum;
}

function appendItemToBasket() {
  const basketContent = document.getElementById('basket-contents');
  const basketCount = document.querySelector('#basket-count').innerText;
  if (basketCount !== '0') {
  basketContent.innerHTML = `
    <img 
      src="IMG_20221019_141930.jpg"
      width="339px"
      height="423px"
      alt="sheep dog"
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



function viewBasket () {
  document.getElementById("basket").classList.add('curtain-width');
  appendItemToBasket();
  appendProductPrice();
  basketTotal();
}


// Event Listeners
document.querySelector('#basket-btn').addEventListener('click', addToBasket)

document.querySelector('#cart').addEventListener("click", viewBasket);

document.querySelector('#increase').addEventListener('click', increaseItem);

document.querySelector('#decrease').addEventListener('click', decreaseItem);













