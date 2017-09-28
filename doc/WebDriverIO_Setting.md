### WebDriverIO Helper 設定說明
* url - base url of website to be tested
* browser - browser in which perform testing
* restart (optional, default: true) - restart browser between tests.
* smartWait: (optional) enables SmartWait; wait for additional milliseconds for element to appear. Enable for 5 secs: "smartWait": 5000
* disableScreenshots (optional, default: false) - don't save screenshot on failure
* uniqueScreenshotNames (optional, default: false) - option to prevent screenshot override if you have scenarios with the same name in different suites
* keepBrowserState (optional, default: false) - keep browser state between tests when restart set to false.
* keepCookies (optional, default: false) - keep cookies between tests when restart set to false.
* windowSize: (optional) default window size. Set to maximize or a dimension in the format 640x480.
* waitForTimeout: (option) sets default wait time in ms for all wait* functions. 1000 by default;
* desiredCapabilities: Selenium's desired capabilities
* manualStart (optional, default: false) - do not start browser before a test, start it manually inside a helper with this.helpers["WebDriverIO"]._startBrowser()
* timeouts: WebDriverIO timeouts defined as hash.