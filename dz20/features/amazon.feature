Feature: Amazon Cucumber.js Autotests

    Background:
        Given the user is authenticated on Amazon
        
    Scenario: User is able to open Amazon web-site
    When the user navigates to the Amazon homepage
    Then the user is able to see the Amazon logo
   
    Scenario: Search for a product
    Given I am on the Amazon website
    When I search for "chair"
    Then I should see results containing "chair"