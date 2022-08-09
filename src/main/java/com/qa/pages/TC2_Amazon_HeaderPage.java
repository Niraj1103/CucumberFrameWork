package com.qa.pages;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class TC2_Amazon_HeaderPage extends TestBase{
	
	public TC2_Amazon_HeaderPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		log.info("---------- Stating a TC2_Amazon_HeaderPage Test ----------");
	}
	
	@FindBy(xpath = "//div[@id='nav-xshop']//a")
	private List<WebElement> header;
	
	
	
	public void getHeader() {
		System.out.println(header.size());
		for(int i=0;i<header.size();i++) {
			System.out.println(header.get(i).getText());
		}
	}

}
