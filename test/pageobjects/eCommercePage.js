class eCommercePage {

    get allCheckBoxes(){
        return $$(".icheck")
    } 

    get sortHeader(){
        return $('//h4[text() = " Sort"]')
    }

    get sortBox(){
        return $('.form-select')
    }

    get cardHeaders(){
        return $$('.card-title')
    }

    async openBrowser(){
        await browser.url("https://practicesoftwaretesting.com/")
    }

    async verifyAllFiltersAreDisabled(){ 
            for (const eachCheckbox of await this.allCheckBoxes) {
                await expect(eachCheckbox).not.toBeChecked(); 
            }
    }

    async sort(){
        await this.sortHeader.scrollIntoView()
        await this.sortBox.selectByIndex(1)
    }

    async verifySortFunctionWorks(){
        await browser.pause(3000)
        await expect(await this.cardHeaders[0]).toHaveText(/^a/i)
        await browser.pause(3000)

    }

}

export default new eCommercePage()