
import { After, Before, Status } from "cucumber";
import { browser } from "protractor";


Before({ tags: "@calcTest" }, function () {
    browser.manage().window().maximize();
});

After({ tags: "@calcTest" }, function () {

    console.log("test case completed...");
    //browser.manage().window().maximize();
});

Before({ tags: "@angTest" }, function () {

    console.log("in the sceond hook...");
    //browser.manage().window().maximize();
});

After(async function(scenario){
    const world = this;
    if (scenario.result.status == Status.FAILED) {
        //write a code to take the screenshot
       let screenshot =  await browser.takeScreenshot();
       world.attach(screenshot,"image/png");
    }
});
