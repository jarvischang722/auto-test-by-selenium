

Feature('MyFirstTest');

Scenario('test something', (I) => {
    I.amOnPage('http://rsv.linktravel.tw/webhotel/0184');
    I.fillField('ArrivalDate', '2017/10/26');
    I.fillField('DepartureDate', '2017/10/27');
    I.selectOption('#Adult','2');
    I.click('搜尋');

    I.see('高鐵聯票專案(繁體中文)');
    I.see('檢視空房');
    I.click('檢視空房');

   // I.waitForElement('a.SelectProductBtn', 30);
    I.click('a.SelectProductBtn');

    I.see('TEST 訂位酒店');
    I.fillField('#payer_LastName', '張');
    I.fillField('#payer_FirstName', '駿志');
    I.selectOption('#payer_Gender','M');
    I.fillField('#order_passwd', '1111');
    I.fillField('#payer_Email', 'mmm@con.tw');
    I.fillField('#payer_phone', '0912222333');
    I.fillField('#order_rmk', 'hello');
    I.fillField('#lodgerAsPurchaser', 'check');

});
