"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@calcTest" }, function () {
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@calcTest" }, function () {
    console.log("test case completed...");
    //browser.manage().window().maximize();
});
cucumber_1.Before({ tags: "@angTest" }, function () {
    console.log("in the sceond hook...");
    //browser.manage().window().maximize();
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        const world = this;
        if (scenario.result.status == cucumber_1.Status.FAILED) {
            //write a code to take the screenshot
            let screenshot = yield protractor_1.browser.takeScreenshot();
            world.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBaUQ7QUFDakQsMkNBQXFDO0FBR3JDLGlCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUU7SUFDMUIsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUU7SUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3RDLHVDQUF1QztBQUMzQyxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUU7SUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3JDLHVDQUF1QztBQUMzQyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsVUFBZSxRQUFROztRQUN6QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxpQkFBTSxDQUFDLE1BQU0sRUFBRTtZQUN6QyxxQ0FBcUM7WUFDdEMsSUFBSSxVQUFVLEdBQUksTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2pELEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9