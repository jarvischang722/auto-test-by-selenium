var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .saveScreenshot(__dirname + '/googleScreenshot.png')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    }
).end();
