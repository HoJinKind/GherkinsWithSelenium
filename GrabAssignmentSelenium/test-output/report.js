$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/home/mikeho/Desktop/Grab%20internship%20application/grab%20appllication%20qns/GrabAssignmentSelenium/src/main/java/Features/employeepage.feature");
formatter.feature({
  "name": "Employees Page Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Display all employees Test Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is loggedin with username hojinkind@hotmail.com and password Kargo123!",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeePageStepDefinition.user_already_on_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to employee page",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeePageStepDefinition.user_navigates_to_employee_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on all radio button",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeePageStepDefinition.user_clicks_on_all_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a list of employees",
  "rows": [
    {
      "cells": [
        "name",
        "employeeID",
        "email",
        "employeegroup",
        "budget",
        "usertype",
        "status"
      ]
    },
    {
      "cells": [
        "Sample Name 4",
        "E4",
        "user4@company.com",
        "GeneralHR",
        "No Limit",
        "User",
        "Pending"
      ]
    },
    {
      "cells": [
        "Sample Name 3",
        "E3",
        "user3@company.com",
        "GeneralFinance",
        "No Limit",
        "User",
        "Pending"
      ]
    },
    {
      "cells": [
        "Sample Name 2",
        "E2",
        "user2@company.com",
        "GeneralEngineering",
        "No Limit",
        "User",
        "Pending"
      ]
    },
    {
      "cells": [
        "Sample Name 1",
        "E1",
        "user1@company.com",
        "GeneralEngineeringHR",
        "No Limit",
        "Company Admin",
        "Pending"
      ]
    },
    {
      "cells": [
        "test2",
        "1234",
        "test2@yopmail.com",
        "Generalnew",
        "No Limit",
        "User",
        "Pending"
      ]
    },
    {
      "cells": [
        "test1",
        "123",
        "test1@yopmail.com",
        "General",
        "No Limit",
        "User",
        "Pending"
      ]
    },
    {
      "cells": [
        "jin ho",
        "A1",
        "hojinkind@hotmail.com",
        "General",
        "No Limit",
        "Company Admin",
        "Verified"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeePageStepDefinition.user_should_see_a_list_of_employees(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeePageStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Display employees id is E2 Test Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is loggedin with username hojinkind@hotmail.com and password Kargo123!",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeePageStepDefinition.user_already_on_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to employee page",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeePageStepDefinition.user_navigates_to_employee_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters employeeID E2 to search fill",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeePageStepDefinition.user_enters_employeeID_to_search_fill(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Employee ID from dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeePageStepDefinition.user_selects_from_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on all radio button",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeePageStepDefinition.user_clicks_on_all_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a list of employees",
  "rows": [
    {
      "cells": [
        "name",
        "employeeID",
        "email",
        "employeegroup",
        "budget",
        "usertype",
        "status"
      ]
    },
    {
      "cells": [
        "Sample Name 2",
        "E2",
        "user2@company.com",
        "GeneralEngineering",
        "No Limit",
        "User",
        "Pending"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeePageStepDefinition.user_should_see_a_list_of_employees(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeePageStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});