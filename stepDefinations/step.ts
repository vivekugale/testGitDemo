import { Given, When, Then } from "cucumber";
import { calculator } from "../pageObjects/calculator";
import { browser, element, by } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import chai from "chai";

var expect = chai.expect;

let calc = new calculator();
let ang = new angularHomePage();

Given('I will navigate to the {string} website', async (string) => {

    if (string == "calc") {
        await browser.get("http://juliemr.github.io/protractor-demo/");
    } else if (string == "angularJS") {
        await browser.get("https://angularjs.org");
    }
});


When('I add two numbers {string} and {string}', async (string, string2) => {
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
});

Then('The output displayed should be {string}', async (string) => {
    await calc.go.click();
    await calc.getResult.getText().then(async (text) => {
        console.log("this is the output " + text);
        expect(text).to.equal(string);
    })
});

When('I clicked on header link', async () => {
    await ang.angularLink.click();
});

When('I navigate to the angular page', function () {
    console.log("on the angular.io page...");
});

Then('I Typed in the search box {string}', async (string) => {
    await ang.searchInput.sendKeys(string);
});