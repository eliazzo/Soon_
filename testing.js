// Test functions
function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}
   
function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

// Run tests 
test("increaseItem() increases display by 1 with each click", () => {
  // Mimic user actions
  increaseItem();
  // Test output is as expected
  const actual = document.getElementById('item-count').innerText;
  equal(actual, '1', "item count increases by '1'");
  // Reverse test 
  decreaseItem();
})

test("addToBasket() adds item count value to basket count element", () => { 
  // Mimic user actions
  increaseItem();
  addToBasket();
  // Test output is as expected
  const actual = document.getElementById('basket-count').innerText;
  equal(actual, '1', "basket-count shows '1'");
  // Reverse test
  decreaseItem();
  addToBasket();
})

test("viewBasket() changes CSS width property to make basket visible", () => {
  // Mimic user actions
  viewBasket();
  // Test output is as expected
  const basket = document.getElementById('basket');
  const basketClass = basket.getAttribute('class');
  const actual = basketClass.includes('slide-width');
  equal(actual, true, 'slide-width class is added to basket');
  // Reverse test
  closeBasket();
})

test("BasketTotal() multiplies number of items by price", () => {
  // Call basketTotal function with test values
  basketTotal(2,3);
  const actual = document.getElementById('basket-sum').innerText;
  // Test output is as expected
  equal(actual, '£6.00');
  // Reset basket sub-total
  basketTotal(0,0);
})

function resetGrey(){
  const basketCount = document.getElementById('basket-count');
  basketCount.style.backgroundColor = "#C4BFB6";
}

resetGrey();



