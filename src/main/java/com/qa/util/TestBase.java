package com.qa.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

public class TestBase {

	public static WebDriver driver;
	public static Properties prop;
	public static Logger log;
	

	public static void openBrowser() throws IOException {
		
		log = Logger.getLogger("CucumberAmazonFrameWork");
		PropertyConfigurator.configure("log4j.properties");
		log.setLevel(Level.DEBUG);
		
		FileInputStream f = new FileInputStream(
				"D:\\Study_Java\\FrameWork_WorkSpace\\Cucumber_POMDesign_Amazon\\src\\main\\java\\com\\qa\\config\\config.properties");
		Properties prop = new Properties();
		prop.load(f);

		String browserName = prop.getProperty("browser");
		
		log.info("opening a "+browserName);
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
		log.info("End of Test, Closing Browser");
		driver.quit();
	}
	
//	public void TestLog() {
//		log = Logger.getLogger("CucumberAmazonFrameWork");
//		PropertyConfigurator.configure("log4j.properties");
//		log.setLevel(Level.DEBUG);
//	}
}
