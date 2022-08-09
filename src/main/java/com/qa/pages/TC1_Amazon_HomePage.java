package com.qa.pages;

import com.qa.util.TestBase;

public class TC1_Amazon_HomePage extends TestBase {


	public void HomeTitle() {
		log.info("---------- Stating TC1_Amazon_HomePage Test ----------");
		System.out.println("Home Page Title : "+driver.getTitle());
		System.out.println("Home Page URL : "+driver.getCurrentUrl());
	}
}
