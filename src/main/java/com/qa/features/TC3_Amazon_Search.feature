Feature: Amazon Home Page Header Test 

Scenario Outline: Open Amazon Website and search for product 
	Given user open browser and goes to webpage 
	Then user verify the home page title and page URL
	Then user search for "<items>" 
	Then user get search results
	Then user quit 
	
	Examples: 
		| items |
		| Phone |
		| Earbuds |
		| Watches |