
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
document.querySelector('#basket-btn').addEventListener('click', () => addToBasket())