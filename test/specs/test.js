import { expect } from "@wdio/globals";
import eCommercePage from "../pageobjects/eCommercePage"

describe("Sort Function", () => {

    it("A_Z", async () => {

        await eCommercePage.openBrowser()

        await eCommercePage.verifyAllFiltersAreDisabled()

        await eCommercePage.sort()

        await eCommercePage.verifySortFunctionWorks()
    });
});