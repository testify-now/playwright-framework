Feature: Inventory and cart management tests

Scenario: Add items to cart and open cart page
Given I launch the browser
  When I navigate to the login page
When I login with valid user credentials
And I add "Sauce Labs Backpack" and "Sauce Labs Bike Light" to the cart
Then I open the cart page
And I should see 2 items in the cart