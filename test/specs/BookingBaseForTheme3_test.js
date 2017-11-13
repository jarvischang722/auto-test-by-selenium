/**
 * 版三基本測試程序一般結帳
 */
const $ = require('cheerio');
Feature('BookingBaseForTheme3');

Scenario('test booking hotel for theme 3', function*(I){
    // I.haveRequestHeaders({
    //     'Accept': 'application/json',
    //     'User-Agent': 'Unirest Node.js'
    // });
    // const result1 = yield I.sendPostRequest("http://192.168.1.73:8080/bacchus/GatewaySvc",{'TxnData':'eyJSRVZFLUNPREUiOiJCQUMwOTAwODAzMDAwMCJ9'});
    //
    // console.log(result1.raw_body);
    //打開這個瀏覽器
    I.amOnPage('http://rsv.linktravel.tw/webhotel/0184');
    // I.seeElement('.ui-dialog-titlebar-close');
    // I.click('.ui-dialog-titlebar-close');

    // let Adult = yield I.grabValueFrom('#Adult');
    // let btt = yield I.grabHTMLFrom('.ButtonSt1');

    //填入搜尋條件
    I.fillField('ArrivalDate', '2017/11/26');  //入住日期
    I.fillField('DepartureDate', '2017/11/27'); //退房日期
   // I.selectOption('Adult','2'); //小孩人數
    I.click('搜尋');


    //選擇某一項產品
    // I.see('高鐵聯票專案(繁體中文)');
    I.see('聯票專案');
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

    I.checkOption('input[value="31"]');

    I.checkOption('#pa_PolicyAckCheckBox');
    I.click('確認預訂');
    I.wait(5);
    I.seeInCurrentUrl("https://testepos.chinatrust.com.tw/auth/SSLAuthUI.jsp");
    I.seeInTitle('信用卡付款頁面');
    I.fillField('pan_no1', '4311');
    I.fillField('pan_no2', '9522');
    I.fillField('pan_no3', '2222');
    I.fillField('pan_no4', '2222');
    I.fillField('cvc2', '222');
    I.selectOption('expire_year', '2022');
    I.wait(5);
    I.click('確認付款 To Pay');

    I.see('訂單編號');
    I.see('RMWHD');
    // let order_no = 'RV11234';
    // I.saveScreenshot('order_'+order_no+'.png');
    I.wait(10);
});
