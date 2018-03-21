const cheerio = require("cheerio");
const assert = require("assert");
Feature('BacchusBase');

Scenario('Bacchus 設定測試', function* (I) {
    //打開這個瀏覽器
    // I.amOnPage('http://bacchus.linktravel.tw/1/login');
    I.amOnPage('http://127.0.0.1:8888/1/login');

    //登入
    I.fillField('input[placeholder=使用者]', 'a14017');
    I.fillField('input[placeholder=密碼]', 'mis');
    I.selectOption('select', 'MIRACHU');
    I.click('button[id=login_btn]');

    //選擇系統別
    I.wait(1);
    I.click('//*[@id="sysoption-app"]/div[2]/div/div/div/div/div/div[3]/div/div[2]/a/div');
    I.wait(2);

    I.click('設定', '#subsysUl > li');
    // I.click('//*[@id="subsysUl"]/li[7]');

    I.click('//*[@id="settingUl"]/li[4]/a');

    I.wait(2);
    //修改
    I.executeScript(function (el) {
        let updIdx = 0;
        let updData = {
            state_nam: 'India-ininDer~'
        };
        $(el).datagrid('selectRow', updIdx).datagrid('beginEdit', updIdx);
        $(el).datagrid('updateRow', {
            index: updIdx,
            row: updData
        });
        $(el).datagrid('beginEdit', updIdx);
        $(el).datagrid('endEdit', updIdx);
    }, "#prg_dg");

    I.wait(2);



    //新增
    // I.click("新增");
    I.executeScript(function (el) {

        let addData = {
            state_cod: '22',
            state_nam: 'Jun-俊州~'
        };

        $(el).datagrid('appendRow', addData);
        let addIndex = $(el).datagrid("getRows").length - 1;
        $(el).datagrid('selectRow', addIndex).datagrid('beginEdit', addIndex);
        $(el).datagrid('endEdit', addIndex);

    }, "#prg_dg");

    I.wait(2);

    I.click("刪除");
    I.click("儲存");

    I.wait(1);
    I.seeInPopup("success");
    I.acceptPopup();
    I.wait(2);
});
