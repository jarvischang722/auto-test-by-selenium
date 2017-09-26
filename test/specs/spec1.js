var assert = require('assert');
describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        browser.saveScreenshot('./snapshot.png');
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
    it('should save a screenshot of the browser view', function () {
        // receive screenshot as Buffer
        browser.saveScreenshot('./snapshot.png');
    });
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            [1,2,3].indexOf(5).should.equal(-1);
            [1,2,3].indexOf(0).should.equal(-1);
        });
    });
});