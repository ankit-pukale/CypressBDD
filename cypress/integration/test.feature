Feature: Verify with valid credentials login Page of Orange HRM


    Verify Orange HRM Login Page
@focus
Scenario:Verify Login functionality of Orange HRM WIth Valid Credentials
    Given I am login Page of Orange HRM
    And I Enter User Name
    And I Enter valid Password
    When I click on login Button
    Then I redirect to DashBoard Page


Scenario:Verify Login Functionality with Invalid Credentials
    Given I am login Page of Orange HRM
    And I Enter User Name
    And I Enter Invalid Password
    When I click on login Button
    Then Error Message Displayed on page

