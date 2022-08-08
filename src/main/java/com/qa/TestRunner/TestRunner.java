package com.qa.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\Study_Java\\FrameWork_WorkSpace\\Cucumber_POMDesign\\src\\main\\java\\com\\qa\\features\\TC1_Amazon_Home.feature",
		glue = {"com\\qa\\stepDefinitions"},
		format = {"pretty", "html:test-output", "json:json_output/cucumber.json", "junit: junit_xml/cucumber.xml"},  //to generate output in some report format
		dryRun = false,//"true" = to check each annotation in feature file has method in stepDefination file, once everything checks out make it "false"
		monochrome = true,   //display output in readable format
		strict = true       //it will stop execution, if there is any undefine  steps
		//tags = {"~@SmokeTest" , "@RegressionTest"} //give tags which need to be run
		// tags = {"@SmokeTest"}  = just one test tags
		// tags = {"@SmokeTest , @RegressionTest"}   = SmokeTest or RegressionTest / OR condition
		// tags = {"@SmokeTest" , "@RegressionTest"}  = SmokeTest and RegresionTest / AND condition
		// tags = {"~@SmokeTest" , "@RegressionTest"}  = ignour SmokeTest  / Ignoure Testcase tag
		)

public class TestRunner {

}
