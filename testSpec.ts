
import { browser, element, by } from "protractor";
import { calculator } from "./pageObjects/calculator";
import { angularHomePage } from "./pageObjects/angularHomePage";


describe('Protractor element demo', () => {

    it('locators', async () => {

        let calc = new calculator();
        await browser.get("http://juliemr.github.io/protractor-demo/");

        await calc.firstEditBox.sendKeys('3');
        await calc.secondEditBox.sendKeys('5');
        await calc.go.click();

        // expect(element(by.css('h2[class="ng-binding"]')).getText()).toBe("8");
        calc.getResult.getText().then(function (text) {
            console.log("this is the output " + text);
        })
    })

    it('angular home page title validation', async () => {

        let ang = new angularHomePage();
        await browser.get("https://angularjs.org");
        await ang.angularLink.click();
        await ang.searchInput.sendKeys("hello there...!!");
    })
})
