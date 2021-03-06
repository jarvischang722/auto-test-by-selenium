/**
 * 版二基本測試程序一般結帳
 */
Feature('BookingBaseForTheme2');

Scenario('test something', (I) => {
    //打開這個瀏覽器
    I.amOnPage('http://rsv.linktravel.tw/webhotel/0182');


    I.executeAsyncScript(function(done) {
      alert('test!!!!');
    });
    I.click('.remodal-confirm');

    //填入搜尋條件
    I.fillField('ArrivalDate', '2017/10/26');  //入住日期
    // I.selectOption('#Adult','2'); //小孩人數
    I.click('div.immediatelyBook.a');


    //選擇某一項產品
    I.see('高鐵聯票專案(繁體中文)');
    I.see('檢視空房');
    I.click('檢視空房');

    //填寫訂購人資料
    I.click('a.SelectProductBtn');
    I.wait(3);  //等待3秒
    I.see('TEST 訂位酒店');
    I.fillField('#payer_LastName', '張');
    I.fillField('#payer_FirstName', '駿志');
    I.selectOption('#payer_Gender','M');
    I.fillField('#order_passwd', '1111');
    I.fillField('#payer_Email', 'mmm@con.tw');
    I.fillField('#payer_phone', '0912222333');
    I.fillField('#payer_Person_id', 'A123456789');
    I.fillField('#order_rmk', 'hello');
    I.checkOption('#lodgerAsPurchaser');

    I.checkOption('input[value="F1"]');

    I.checkOption('#pa_PolicyAckCheckBox');
    I.click('確認預訂');
    I.wait(5);

    I.see('訂單編號');
    I.see('RMWHD');
    // let order_no = 'RV11234';
    // I.saveScreenshot('order_'+order_no+'.png');
    I.wait(10);

});
