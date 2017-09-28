/**
 * 版三基本測試程序一般結帳
 */

Feature('BookingBaseForTheme3');

Scenario('test booking hotel for theme 3', (I) => {

    I.amOnPage('http://rsv.linktravel.tw/webhotel/0184'); //打開這個瀏覽器
    //填入搜尋條件
    I.fillField('ArrivalDate', '2017/10/26');  //入住日期
    I.fillField('DepartureDate', '2017/10/27'); //退房日期
    I.selectOption('#Adult','2'); //小孩人數
    I.click('搜尋');


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

    I.wait(5);
});
