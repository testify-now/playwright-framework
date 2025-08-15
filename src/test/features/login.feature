Feature: Login tests for SauceDemo

Scenario: Successful login with valid credentials
Given I launch the browser
When I navigate to the login page
And I login with valid user credentials
Then I should see the inventory page

Scenario: Login failure with locked out user
Given I launch the browser
When I navigate to the login page
And I login with locked out user credentials
Then I should see the error message