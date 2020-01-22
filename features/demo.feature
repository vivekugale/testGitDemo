Feature: i am going to validate my website functionality

    @calcTest
    Scenario: Scenario Outline name: Calculator add functionality testing number 1

        Given I will navigate to the "calc" website
        When  I add two numbers "3" and "5"
        Then  The output displayed should be "38"

    @calcTest
    Scenario: Scenario Outline name: Calculator add functionality testing number 2

        Given I will navigate to the "calc" website
        When  I add two numbers "5" and "7"
        Then  The output displayed should be "12"

    @angTest
    Scenario Outline: Angular webpage test number 1

        Given I will navigate to the "angularJS" website
        When  I clicked on header link
        And   I navigate to the angular page
        Then  I Typed in the search box "<key>"

        Examples:
            | key              |
            | hello there...!! |
            | hey..whassap..!! |