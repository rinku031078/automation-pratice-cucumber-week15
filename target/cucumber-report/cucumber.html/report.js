$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/WomenCategoryPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page",
  "description": "",
  "id": "women-category-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9718669200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2040428800,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user should navigagte to women cagtagory page successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-navigagte-to-women-cagtagory-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on \u0027Women\u0027 page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmOnWomenPageSuccessfully()"
});
formatter.result({
  "duration": 55009700,
  "status": "passed"
});
formatter.after({
  "duration": 807268800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"\u003cProduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"\u003cSize\u003e\" from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"\u003cColour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "Product",
        "Quantity",
        "Size",
        "Colour"
      ],
      "line": 19,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 20,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 21,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 22,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 23,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5399712100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2568087300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"M\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 1744100500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 191382500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 250280000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColour(String)"
});
formatter.result({
  "duration": 129070800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 96344900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 737411500,
  "status": "passed"
});
formatter.after({
  "duration": 797267200,
  "status": "passed"
});
formatter.before({
  "duration": 5372435400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1922038200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"L\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 1356276100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 142547000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 158676300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColour(String)"
});
formatter.result({
  "duration": 111959100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 94098800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 1116403800,
  "status": "passed"
});
formatter.after({
  "duration": 841949900,
  "status": "passed"
});
formatter.before({
  "duration": 5425709700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1715550500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"S\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 2468071500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 115597400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 88473900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColour(String)"
});
formatter.result({
  "duration": 106562000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 112518900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 666960600,
  "status": "passed"
});
formatter.after({
  "duration": 825069400,
  "status": "passed"
});
formatter.before({
  "duration": 6054594300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2207162100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"M\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 1543682700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 117047600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 121817600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColour(String)"
});
formatter.result({
  "duration": 93787600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 111930800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 735917700,
  "status": "passed"
});
formatter.after({
  "duration": 854424300,
  "status": "passed"
});
});