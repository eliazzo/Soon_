
let itemCount = 0;

function increaseItem() {

  itemCount++;
  const countDisplay = document.querySelector('#item-count');
  countDisplay.innerText = itemCount;
}
const increaseBtn = document.querySelector('#increase')
increaseBtn.addEventListener('click', () => increaseItem());

function decreaseItem() {

  if (itemCount > 0) { 
    itemCount--;
  }
  const countDisplay = document.querySelector('#item-count');
  countDisplay.innerText = itemCount;
}
const decreaseBtn = document.querySelector('#decrease');
decreaseBtn.addEventListener('click', () => decreaseItem());


function addToBasket() {
  const basketCount = document.querySelector('#basket-count');
  const countDisplay = document.querySelector('#item-count');
  basketCount.innerText = countDisplay.innerText;
}

function viewBasket () {
  document.getElementById("basket").style.width = "100%";
  basketTotal();
}

function basketTotal() {
  const basketSum = document.getElementById('basket-sum');
  const basketCount = document.querySelector('#basket-count').innerText;
  basketSum.innerText = '£' + Number(basketCount) * num;
  }

// Event Listeners
document.querySelector('#basket-btn').addEventListener('click', () => addToBasket())

document.querySelector('#cart').addEventListener("click", viewBasket);


// Product text
const product = 'The challenge is designed to demonstrate your knowledge and experience of frontend web development. Feel free to complete the challenge using the tools and technologies you’re most comfortable with, we will expect to see use of HTML / CSS and some JS. A Figma file will be provided alongside the challenge which should be used to inform the visual aspect of the UI.'
document.querySelector('#product-info').innerText = product;

// Product price
const num = 650;
const price = '£' + num;
document.querySelector('#product-price').innerText = price;







