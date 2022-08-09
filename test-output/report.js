$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC1_Amazon_Home.feature");
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
  "duration": 9805814000,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_verify_the_page_title_and_page_URL()"
});
formatter.result({
  "duration": 35588500,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_quit()"
});
formatter.result({
  "duration": 2991122300,
  "status": "passed"
});
formatter.uri("TC2_Amazon_Header.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Home Page Header Test",
  "description": "",
  "id": "amazon-home-page-header-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Open Amazon Website and get Header List",
  "description": "",
  "id": "amazon-home-page-header-test;open-amazon-website-and-get-header-list",
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
  "name": "user get the header list",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_open_browser_and_goes_to_webpage()"
});
formatter.result({
  "duration": 9024813100,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_verify_the_page_title_and_page_URL()"
});
formatter.result({
  "duration": 59265800,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_get_the_header_list()"
});
formatter.result({
  "duration": 7183493300,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_quit()"
});
formatter.result({
  "duration": 2115663000,
  "status": "passed"
});
formatter.uri("TC3_Amazon_Search.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Home Page Header Test",
  "description": "",
  "id": "amazon-home-page-header-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Open Amazon Website and search for product",
  "description": "",
  "id": "amazon-home-page-header-test;open-amazon-website-and-search-for-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user search for \"\u003citems\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user get search results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user quit",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "amazon-home-page-header-test;open-amazon-website-and-search-for-product;",
  "rows": [
    {
      "cells": [
        "items"
      ],
      "line": 11,
      "id": "amazon-home-page-header-test;open-amazon-website-and-search-for-product;;1"
    },
    {
      "cells": [
        "Phone"
      ],
      "line": 12,
      "id": "amazon-home-page-header-test;open-amazon-website-and-search-for-product;;2"
    },
    {
      "cells": [
        "Earbuds"
      ],
      "line": 13,
      "id": "amazon-home-page-header-test;open-amazon-website-and-search-for-product;;3"
    },
    {
      "cells": [
        "Watches"
      ],
      "line": 14,
      "id": "amazon-home-page-header-test;open-amazon-website-and-search-for-product;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Open Amazon Website and search for product",
  "description": "",
  "id": "amazon-home-page-header-test;open-amazon-website-and-search-for-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user search for \"Phone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user get search results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_open_browser_and_goes_to_webpage()"
});
formatter.result({
  "duration": 9081869500,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_verify_the_page_title_and_page_URL()"
});
formatter.result({
  "duration": 29329300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 17
    }
  ],
  "location": "TC1_Amazon_StepDefinitions.user_search_for(String)"
});
formatter.result({
  "duration": 2659500700,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_get_search_results()"
});
formatter.result({
  "duration": 207499000,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_quit()"
});
formatter.result({
  "duration": 5052576100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Open Amazon Website and search for product",
  "description": "",
  "id": "amazon-home-page-header-test;open-amazon-website-and-search-for-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user search for \"Earbuds\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user get search results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_open_browser_and_goes_to_webpage()"
});
formatter.result({
  "duration": 9250640600,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_verify_the_page_title_and_page_URL()"
});
formatter.result({
  "duration": 40543900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Earbuds",
      "offset": 17
    }
  ],
  "location": "TC1_Amazon_StepDefinitions.user_search_for(String)"
});
formatter.result({
  "duration": 2229776800,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_get_search_results()"
});
formatter.result({
  "duration": 176373400,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_quit()"
});
formatter.result({
  "duration": 3898250100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Open Amazon Website and search for product",
  "description": "",
  "id": "amazon-home-page-header-test;open-amazon-website-and-search-for-product;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user search for \"Watches\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user get search results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_open_browser_and_goes_to_webpage()"
});
formatter.result({
  "duration": 8691215300,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_verify_the_page_title_and_page_URL()"
});
formatter.result({
  "duration": 31852200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Watches",
      "offset": 17
    }
  ],
  "location": "TC1_Amazon_StepDefinitions.user_search_for(String)"
});
formatter.result({
  "duration": 1839962700,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_get_search_results()"
});
formatter.result({
  "duration": 126371400,
  "status": "passed"
});
formatter.match({
  "location": "TC1_Amazon_StepDefinitions.user_quit()"
});
formatter.result({
  "duration": 2731270600,
  "status": "passed"
});
});