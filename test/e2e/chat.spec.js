describe('E2E: Sanity Check', function () {

    var urlChanged = function (url) {
        return function () {
            return browser.getCurrentUrl().then(function (currentUrl) {
                return url != currentUrl;
            });
        };
    };

    it('Save Disabled', function () {

        browser.get(browser.baseUrl);
        element(by.id('route-chat')).click();

        var nameInput = element(by.model('vm.name'));
        var messageInput = element(by.model('vm.message'));
        var submitButton = element(by.id('chat-submit'));
        
        expect(submitButton.isEnabled()).toBe(false);

        nameInput.sendKeys('Brittany');
        messageInput.sendKeys('This is a test message');

        expect(submitButton.isEnabled()).toBe(true);

    });

    it('Save Enabled', function () {

        browser.get(browser.baseUrl);
        element(by.id('route-chat')).click();

        var nameInput = element(by.model('vm.name'));
        var messageInput = element(by.model('vm.message'));
        var submitButton = element(by.id('chat-submit'));

        nameInput.sendKeys('Brittany');
        messageInput.sendKeys('This is a test message');

        expect(submitButton.isEnabled()).toBe(true);

    });

});