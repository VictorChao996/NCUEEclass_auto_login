
const {Builder, By}  = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
require('dotenv').config();
//預設需要用到的參數(若.env沒設定則會使用)
const waitingTime = process.env.WAIT_TIME || 0;
const account = process.env.ACCOUNT || "Account";
const password = process.env.PASSWORD || "Password";

(async () => {
    const driver = await new Builder().forBrowser('MicrosoftEdge').build();
    try {
        await Login(driver);
        await driver.manage().window().maximize();
        await driver.sleep(3000);
        await confirmLoginState(driver);
        //如果有設定wait time 就執行登出 & 關閉視窗的動作
        if(waitingTime > 0) {
            await driver.sleep(waitingTime);
            await Logout(driver);
            await driver.quit();
        }
        
    } finally {
        // await driver.quit();
    }
})();

//login acions
async function Login(driver){

    await driver.get('https://ncueeclass.ncu.edu.tw/');
    const accountForm = await driver.findElement(By.xpath('//*[@id="account"]/div/input'));
    const passwordForm = await driver.findElement(By.xpath('//*[@id="password"]/div/div[1]/input'));
    const loginButton = await driver.findElement(By.xpath('//*[@id="login_form"]/div[7]/div/button'));
    await accountForm.sendKeys(account);
    await passwordForm.sendKeys(password);
    await driver.sleep(1000);
    await loginButton.click();
}
// skip the login asking window
async function confirmLoginState(driver){
    try{
        const logoutAllAccountButton = await driver.findElement(By.xpath('//*[@id="categoryForm"]/div[3]/div/a[1]'));
        logoutAllAccountButton.click();
    }catch(e){
        console.log(e);
    }

}
//logout actions
async function Logout(driver){
    console.log("logout action");
    const nameButton = await driver.findElement(By.xpath('//*[@id="page-sysbar"]/nav/div/div[2]/ul/li[2]/a'));
    nameButton.click();
    
    driver.sleep(1000);

    const logoutButton = await driver.findElement(By.xpath('//*[@id="page-sysbar"]/nav/div/div[2]/ul/li[2]/ul/li[4]/a'));
    
    logoutButton.click();
}


