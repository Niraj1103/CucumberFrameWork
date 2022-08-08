package com.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class TC3_Amazon_SearchPage extends TestBase {
	
	public TC3_Amazon_SearchPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "twotabsearchtextbox")
	private WebElement search;
	
	@FindBy(id = "nav-search-submit-button")
	private WebElement searchBtn;
	
	@FindBy(xpath = "//div[@class='a-section a-spacing-small a-spacing-top-small']//span")
	private WebElement searchResult;
	
	public void searchItem(String items) {
		search.sendKeys(items);
		searchBtn.click();
	}
	
	public void searchResutls() {
		System.out.println("Search Page Title : "+driver.getTitle());
		System.out.println("Search Results : "+searchResult.getText());
	}
}
