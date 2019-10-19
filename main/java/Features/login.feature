Feature: Free CRM Login Feature


#without Examples Keyword
#Scenario: Free CRM Login Test Scenario
#
#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "naveenk" and "test@123"
#Then user clicks on login button
#Then user is on home page



@First
#with Examples Keyword
Scenario: Free CRM Login Test Scenario
	Given user is loggedin with username hojinkind@hotmail.com and password Kargo123!
	Then user navigates to employee page
	Then Close the browser

