Feature: edit trips statement preferences test


#without Examples Keyword
#Scenario: Free CRM Login Test Scenario
#
#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "naveenk" and "test@123"
#Then user clicks on login button
#Then user is on home page



	Scenario: Change to monthly frequency for my statements preference test scenario
		Given user is loggedin with username hojinkind@hotmail.com and password Kargo123!
		When user navigates to trips page
		When user navigates to statement Preferences
		When user clicks monthy radio Button under My trips statement preferences
		Then refresh page
		Then user navigates to statement Preferences
		Then selected Radio button for my statement preferences should be changed to monthly
		Then close the browser

	Scenario: Change to weekly frequency for my statements preference test scenario
		Given user is loggedin with username hojinkind@hotmail.com and password Kargo123!
		When user navigates to trips page
		When user navigates to statement Preferences
		When user clicks weekly radio Button under My trips statement preferences
		Then refresh page
		Then user navigates to statement Preferences
		Then selected Radio button for my statement preferences should be changed to weekly
		Then close the browser

	Scenario: Change to no statements sent for my statements  preference test scenario
		Given user is loggedin with username hojinkind@hotmail.com and password Kargo123!
		When user navigates to trips page
		When user navigates to statement Preferences
		When user clicks none radio Button under My trips statement preferences
		Then refresh Page
		Then user navigates to statement Preferences
		Then selected Radio button for my statement preferences should be changed to none
		Then close the browser

	Scenario: Change to monthly frequencyfor company statement preference test scenario
		Given user is loggedin with username hojinkind@hotmail.com and password Kargo123!
		When user navigates to trips page
		When user navigates to statement Preferences
		When user clicks monthy radio Button under company trips statement preferences
		Then refresh page
		Then user navigates to statement Preferences
		Then selected radio button for company statement preferences should be changed to monthly
		Then close the browser

	Scenario: Change to weekly frequency for company statement preference test scenario
		Given user is loggedin with username hojinkind@hotmail.com and password Kargo123!
		When user navigates to trips page
		When user navigates to statement Preferences
		When user clicks weekly radio Button under company trips statement preferences
		Then refresh Page
		Then user navigates to statement Preferences
		Then selected radio button for company statement preferences should be changed to weekly
		Then close the browser

	Scenario: Change to no statements sent for company statement preference test scenario
		Given user is loggedin with username hojinkind@hotmail.com and password Kargo123!
		When user navigates to trips page
		When user navigates to statement Preferences
		When user clicks none radio Button under company trips statement preferences
		Then refresh page
		Then user navigates to statement Preferences
		Then selected radio button for company statement should be changed to none
		Then close the browser