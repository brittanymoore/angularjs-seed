describe('Todo: E2E:', function () {

    it('Sanity Check', function () {
        expect(0).toBe(0);
    });

    it('Save Button', function () {
        browser.get(browser.baseUrl);
        element(by.id('todoRoute')).click();

        var nameInput = element(by.model('vm.name'));
        var submitButton = element(by.id('submit'));

        expect(submitButton.isEnabled()).toBe(false);

        nameInput.sendKeys('test task');
        expect(submitButton.isEnabled()).toBe(true);
    });

});