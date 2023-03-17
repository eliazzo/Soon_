## Soon_ Take-home Challenge

This repo was created to showcase the take home challenge assigned by Soon_. Please read below to understand how I approached the task and the reasons behind the decisions I made.

#### User Stories

As a user, I want to:
* Select items to add to my basket
* Add items to my basket
* View my basket
* View the total number of items in my basket
* View the total price in my basket

#### Instructions for reviewing the code

Clone the repo using the following command: 

``git clone https://github.com/eliazzo/Soon_ main``

### Process

#### Mobile-first
The Figma demonstration shows a desktop view of the website page. However, given that most real life scenarios use a mobile-first approach I opted to follow this method.

#### Alert notice

The Alert functions are designed to guide the user through the page. For example, when you have opted to add the maximum number of items to the bag, it will guide you to the 'Add to basket' button through a brief change of the CSS properties.

*This is not a feature I would include in a real-life scenario but was intended to clarify the user flow for the purpose of this exercise!*

#### Sliding basket

The challenge instructions clearly stated that we do not attempt to complete all the user flows. However, after looking at the [Mackintosh wesbite](https://www.mackintosh.com/ad/shopping/drumming-orange-dry-waxed-cotton-hooded-jacket-gmm-200-15481794) I was interested in the sliding basket and keen to integrate this into my project.

Users can:
- Click the basket icon to slide the 'curtain' basket into view
- View information about the items in the bag
- View the number of items added to the bag
- View the total cost of the items in the bag


### Testing

A testing library was developed to test that each user story is met. Test results are shown in the console.


