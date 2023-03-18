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
test("Select items to add to my basket", () => {
  // Mimic user actions
  increaseItem();
  // Test output is as expected
  const actual = document.getElementById('item-count').innerText;
  equal(actual, '1');
  // Reverse test 
  decreaseItem();
})

test("Add items to my basket/ View the total number of items in my basket", () => { 
  // Mimic user actions
  increaseItem();
  addToBasket();
  // Test output is as expected
  const actual = document.getElementById('basket-count').innerText;
  equal(actual, '1');
  // Reverse test
  decreaseItem();
  addToBasket();
})

test("View my basket", () => {
  // Mimic user actions
  viewBasket();
  // Test output is as expected
  const basket = document.getElementById('basket');
  const basketClass = basket.getAttribute('class');
  const actual = basketClass.includes('curtain-width');
  equal(actual, true);
  // Reverse test
  closeBasket();
})

test("View the total price in my basket", () => {
  // Mimic user actions
  increaseItem();
  addToBasket();
  viewBasket();
  // Test output is as expected
  actual = document.getElementById('basket-sum').innerText;
  equal(actual, '£650');
  // Reverse test
  closeBasket();
  decreaseItem();
  addToBasket();
})




