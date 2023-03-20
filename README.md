## Soon_ Take-home Challenge

This repo was created to showcase my response to **User Flow 1** of the take-home challenge assigned by Soon_. Please read below to understand how I approached the task and the reasons behind the decisions I made.

#### User Stories

As a user, I want to:
* View a product with details
* Select a quantity of items to add to my basket
* Add a quantity of items to my basket
* View the total number of items in my basket

Additionally, I want to:
* View a summary of my basket
* View the sub-total price of my basket
* View the app on all of my devices

### Process

#### - Global variables
I avoided hard coding product information onto the HTML file and created the global variables ``productPrice``, ``productText`` and ``productName`` to act as placeholders for the data. The idea was to maintain the possibility for alternative product information to be applied with minimal change to the codebase.

#### - Mobile-first
The Figma prototype shows a desktop view of the website page. However, I chose to follow a responsive, mobile-first approach given that this is ensures the app is accessible to as many different users as possible.

#### - Alert notice
The alert functions are designed to guide reviewers through the page and clarify the intended user flow. For example, when you exeed the maximum number of items that can be added to the bag, you are guided to the ``Add to basket`` button.

#### - Sliding basket / Fixed navigation bar
The challenge instructions clearly stated that we do not attempt to complete all the user flows. However, after looking at the [Mackintosh wesbite](https://www.mackintosh.com/ad/shopping/drumming-orange-dry-waxed-cotton-hooded-jacket-gmm-200-15481794) I was interested in the sliding basket and keen to integrate this into my project. I also wanted to recreate the fixed navigation bar that appears on the website.

#### - Testing

We have recently covered the Test Driven Development (TDD) method at FAC. Time constraints prevented me from applying it to the entire project, however the iterative process of writing the tests is highly valuable and I was able to test that the key user stories were met. Test results are shown in the console.

#### Instructions for reviewing

Clone the repo using the following command: 
``git clone https://github.com/eliazzo/Soon_ main``

The live site can be accessed via:
[https://eliazzo.github.io/Soon_/](https://eliazzo.github.io/Soon_/)


See my workflow on [GitHub Projects](https://github.com/users/eliazzo/projects/2).


