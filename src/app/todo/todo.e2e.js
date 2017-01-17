describe('E2E: ToDo:', () => {

    it("Save button should be disabled when task field is empty.", () => {

        // After landing on home page, click link to ToDo page.
        browser.get(browser.baseUrl);
        element(by.id('todoRoute')).click();

        // Get relevant form controls.
        let nameInput = element(by.model('vm.name'));
        let submitButton = element(by.id('submit'));

        // Submit button by default should be disabled.
        expect(nameInput.getAttribute('value')).toBe('');
        expect(submitButton.isEnabled()).toBe(false);

        // After entering some keys in the name field, submit button should be enabled.
        nameInput.sendKeys('test task');
        expect(nameInput.getAttribute('value')).toBe('test task');
        expect(submitButton.isEnabled()).toBe(true);

    });

});