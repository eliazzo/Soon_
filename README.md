## Soon_ Take-home Challenge

This repo was created to showcase the take home challenge assigned by Soon_. Please read below to understand how I approached the task and the reasons behind the decisions I made.

#### User Stories

As a user, I want to:
* Select items to add to my basket
* Add items to my basket
* View my basket
* View the total number of items in my basket
* View the total price in my basket

#### Instructions for reviewing

Clone the repo using the following command: 

``git clone https://github.com/eliazzo/Soon_ main``

### Process

#### Global variables
I intentionally avoided hard coding product information onto the HTML and created the global variables ``productPrice``, ``productText`` and ``productName`` to act as parameters for the data. In what I appreciate is an enormously simplified version of the real thing, the idea was to maintain the possibility for alternative product information to be applied via the javascript file alone.

#### Mobile-first
The Figma prototype shows a desktop view of the website page. However, I opted to follow a mobile-first approach given that this is the typical approach in most scenarios.

#### Alert notice

The alert functions are designed to guide reviewers through the page. For example, when you have opted to add the maximum number of items to the bag, it will guide you to the 'Add to basket' button with a brief change of the CSS properties. *This is not a feature I would include in a real-life shopping app but was intended to clarify the user flow for the purpose of this exercise!*

#### Sliding basket

The challenge instructions clearly stated that we do not attempt to complete all the user flows. However, after looking at the [Mackintosh wesbite](https://www.mackintosh.com/ad/shopping/drumming-orange-dry-waxed-cotton-hooded-jacket-gmm-200-15481794) I was interested in the sliding basket and keen to integrate this into my project.

#### Fixed nav

Similarly, I chose to recreate the fixed navigation bar that appears on the [Mackintosh wesbite](https://www.mackintosh.com/ad/shopping/drumming-orange-dry-waxed-cotton-hooded-jacket-gmm-200-15481794).

### Testing

A testing library was developed to test that each user story is met. Test results are shown in the console.

### GitHub Projects

Check out my [GitHub Project](https://github.com/users/eliazzo/projects/2) which illustrates my workflow.


