$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Study_Java/FrameWork_WorkSpace/Cucumber_POMDesign/src/main/java/com/qa/features/TC1_Amazon_Home.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Home Page Test",
  "description": "",
  "id": "amazon-home-page-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Open Browser and Search for Amazon",
  "description": "",
  "id": "amazon-home-page-test;open-browser-and-search-for-amazon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user open browser and goes to webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user verify the home page title and page URL",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_open_browser_and_goes_to_webpage()"
});
formatter.result({
  "duration": 1175754300,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.apache.log4j.Logger.info(Object)\" because \"com.qa.util.TestBase.print\" is null\r\n\tat com.qa.util.TestBase.openBrowser(TestBase.java:32)\r\n\tat com.qa.stepDefinitions.TC1_Amazon_StepDefinitions.user_open_browser_and_goes_to_webpage(TC1_Amazon_StepDefinitions.java:24)\r\n\tat ✽.Given user open browser and goes to webpage(D:/Study_Java/FrameWork_WorkSpace/Cucumber_POMDesign/src/main/java/com/qa/features/TC1_Amazon_Home.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_verify_the_page_title_and_page_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_quit()"
});
formatter.result({
  "status": "skipped"
});
});