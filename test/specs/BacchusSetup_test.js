
Feature('BacchusBase');

Scenario('Bacchus 設定測試', (I) => {
    //打開這個瀏覽器
    I.amOnPage('http://bacchus.linktravel.tw/1/login');

    //登入
    I.fillField('input[placeholder=使用者]', 'a14017');
    I.fillField('input[placeholder=密碼]', '111');
    I.selectOption('select','MIRACHU');
    I.click('button[id=login_btn]');

    //選擇系統別
    I.wait(1);
    I.click('//*[@id="sysoption-app"]/div[2]/div/div/div/div/div/div[3]/div/div[2]/a/div');
    I.wait(2);

    I.click('//*[@id="subsysUl"]/li[7]');
    I.wait(2);

    //修改
    let update_data = "jun34";
    I.click('//*[@id="datagrid-row-r1-2-0"]/td[2]/div');
    I.fillField('//*[@id="_easyui_textbox_input2"]',update_data);

    //新增
    I.click("新增");


    I.click("儲存");

    I.wait(1);
    I.seeInPopup("success");
    I.acceptPopup();
    I.wait(2);
});
