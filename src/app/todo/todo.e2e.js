describe('E2E: ToDo:', () => {

    let nameInput, addButton;

    beforeEach(() => {

        // After landing on home page, click link to ToDo page.
        browser.get(browser.baseUrl);
        element(by.id('todoRoute')).click();

        // Get relevant form controls.
        nameInput = element(by.model('vm.name'));
        addButton = element(by.id('submit'));        

    });

    it('Should disable add button when task field is empty.', () => {

        expect(nameInput.getAttribute('value')).toBe('');
        expect(addButton.isEnabled()).toBe(false);

    });

    it('Should enable add button when task field contains a value.', () => {

        nameInput.sendKeys('test task');
        expect(nameInput.getAttribute('value')).toBe('test task');
        expect(addButton.isEnabled()).toBe(true);

    });

    it('Should add new task and clear form after add button clicked.', () => {

        // There should be two mock tasks initially.
        let tasks = element.all(by.css('#taskList > li'));
        expect(tasks.count()).toEqual(2);

        // Provide a name and click Add.
        nameInput.sendKeys('test task');
        addButton.click();

        // Wait for click response to complete.
        browser.waitForAngular();

        // Verify page state.
        tasks = element.all(by.css('#taskList > li'));
        expect(tasks.count()).toEqual(3);
        expect(nameInput.getAttribute('value')).toBe('');

    });

});