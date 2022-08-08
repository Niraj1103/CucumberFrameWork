package com.qa.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

public class TestBase {

	public static WebDriver driver;
	public static Properties prop;
	

	public static void openBrowser() throws IOException {

		
		
		FileInputStream f = new FileInputStream(
				"D:\\Study_Java\\FrameWork_WorkSpace\\Cucumber_POMDesign\\src\\main\\java\\com\\qa\\config\\config.properties");
		Properties prop = new Properties();
		prop.load(f);

		String browserName = prop.getProperty("browser");
		System.out.println(browserName);

		
		if (browserName.equals("Firefox")) {
			System.setProperty("webdriver.gecko.driver", "D:\\Study_Java\\SeleniumJars\\geckodriver.exe");
			driver = new FirefoxDriver();
		} else if (browserName.equals("Chrome")) {
			System.setProperty("webdriver.chrome.driver", "D:\\Study_Java\\SeleniumJars\\chromedriver.exe");
			driver = new ChromeDriver();
		} else {
			System.out.println("Browser can not be open , Add browser name into properties");
		}

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);

	}

	public void closeBrowser() {
		driver.quit();
	}
	
}
