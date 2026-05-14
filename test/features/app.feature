Feature: E-commerce App Functionality

  @smoke @login
  Scenario: Login with valid credentials
    Given I open the login page
    When I login with email "customer@practicesoftwaretesting.com" and password "welcome01"
    Then I should be redirected to the account page

  @smoke @product
  Scenario: View product details
    Given I open the first product
    Then the product title and price should be displayed

  @smoke @cart
  Scenario: Add product to cart
    Given I open the first product
    When I add the product to the cart
    Then the cart count should be greater than 0

  @smoke @search
  Scenario: Search exact product
    Given I am on the home page
    When I search for the product "Hammer"
    Then the product "Hammer" should be found in the results
