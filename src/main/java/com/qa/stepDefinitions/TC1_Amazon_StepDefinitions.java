package com.qa.stepDefinitions;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import com.qa.pages.TC1_Amazon_HomePage;
import com.qa.pages.TC2_Amazon_HeaderPage;
import com.qa.pages.TC3_Amazon_SearchPage;
import com.qa.util.TestBase;
import com.qa.util.TestUtil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class TC1_Amazon_StepDefinitions extends TestBase {

	TC1_Amazon_HomePage tc1 = new TC1_Amazon_HomePage();
	
	
	@Given("^user open browser and goes to webpage$")
	public void user_open_browser_and_goes_to_webpage() throws IOException{
	    openBrowser();
	    log.info("Opening a WebPage");
	    driver.get("https://www.amazon.ca/");
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_TIMEOUT, TimeUnit.SECONDS);
	}

	@Then("^user verify the home page title and page URL$")
	public void user_verify_the_page_title_and_page_URL(){
		log.info("Verifing Homepage title");
	    tc1.HomeTitle();
	    Assert.assertEquals("Amazon.ca: Low Prices – Fast Shipping – Millions of Items", driver.getTitle());
	    Assert.assertEquals("https://www.amazon.ca/", driver.getCurrentUrl());
	}

	@Then("^user quit$")
	public void user_quit() throws Throwable {
	    closeBrowser();
	}

	@Then("^user get the header list$")
	public void user_get_the_header_list(){
		log.info("Getting header list");
		TC2_Amazon_HeaderPage tc2 = new TC2_Amazon_HeaderPage(driver);
	    tc2.getHeader();
	}

	@Then("^user search for \"([^\"]*)\"$")
	public void user_search_for(String items){
		log.info("Searching for "+ items);
		TC3_Amazon_SearchPage tc3 = new TC3_Amazon_SearchPage(driver);
		tc3.searchItem(items);
	}
	
	@Then("^user get search results$")
	public void user_get_search_results() {
		TC3_Amazon_SearchPage tc3 = new TC3_Amazon_SearchPage(driver);
		tc3.searchResutls();
	}
}
