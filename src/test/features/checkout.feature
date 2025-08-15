
Feature: Checkout flow tests

Scenario: Complete checkout successfully
Given I launch the browser
  When I navigate to the login page
When I login with valid user credentials
And I add "Sauce Labs Backpack" to the cart
And I proceed to checkout with valid user information
Then I should see the order completion message