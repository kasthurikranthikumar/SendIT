import { browser, $, $$, element, ExpectedConditions as EC } from 'protractor'

export class UserSettings {

    private name = $('editable-field[field-value="data.fullName"] input')
    private jobTitle = $('editable-field[field-value="data.jobTitle"] input')
    /* this means - find me element, with tag name - editable-field
    and this element should have attribute field-value equal to data.jobTitle
    and inside this element, find element with tag name - input*/
    private timeFormat = $('#user-time-format')

    async editJobTitle(newJobTitle: string) {
        await this.jobTitle.clear()
        await this.jobTitle.sendKeys(newJobTitle)
        await this.name.click()
    }

    async editName(newName: string) {
        await this.name.clear()
        await this.name.sendKeys(newName)
        await this.jobTitle.click()
    }

    async editTimeFormat() {
        // await this.timeFormat.$('span.value').getText()
        await this.timeFormat.click()
        let currentTime = await this.timeFormat.$('span.value').getText()
        if (currentTime.includes('AM') || currentTime.includes('PM')) {
            console.log('ciao')
        } else {
            console.log('cxxxxxxxxxxxx')
        }
    }


}