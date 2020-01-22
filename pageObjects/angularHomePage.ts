import { ElementFinder, element, by } from "protractor";

export class angularHomePage {

    angularLink: ElementFinder;
    searchInput: ElementFinder;

    constructor() {
        this.angularLink = element(by.partialLinkText('angular.io'));
        this.searchInput = element(by.css('input[type="search"]'));
    }
}