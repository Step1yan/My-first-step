const {Builder, By, Key, until} = require("selenium-webdriver");
const { elementsLocated } = require("selenium-webdriver/lib/until");
require('chromedriver');

async function example(){

    const searchString = "laptop";
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.get("https://www.amazon.com/");
    await driver.findElement(By.css('[id="twotabsearchtextbox"]')).sendKeys(searchString);
    await driver.findElement(By.css('[id="nav-search-submit-button"]')).click();
    let priceElements = await driver.findElements(By.css('.a-price-whole'));

    let selectedPrices = [];

    console.log('All Prices --- ');

    for(let priceElement of priceElements) {
        let priceValue = await priceElement.getText();
        priceValue = +priceValue.replace(',', '');

        console.log(priceValue);

        if (priceValue <= 700) {
            selectedPrices.push(priceValue);
        }
    }

    console.log('Prices Less than or equal 700 --- ');

    for (let price of selectedPrices) {
        console.log(price);
    }
    let nameElements = await driver.findElements(By.css('[class="a-section a-spacing-small a-spacing-top-small"] [class="a-size-mini a-spacing-none a-color-base s-line-clamp-2"]'));
    let selectedNames = [];
    console.log('All Names --- ');

        for (let i = 0; i < nameElements.length; i++) {
        let nameValue = await nameElements[i].getText();
        // nameValue = +nameValue.replace(',', '');
            console.log("________________________________________");
            console.log(nameValue );
        selectedNames.push(nameValue);
    }
    let newArr=[];
    priceElements.forEach((elem)=>{
        let a=nameElements+ elem;
newArr.push(a);})


  //  console.log(newArr);
     //let nor = await priceElements == nameElementst();
    // console.log(nor)









    // await driver.findElements(By.css('[class*="s-result-item s-asin"]'));
    //for (let i = 0; i < class*="s-result-item s-asin"; i++) {
        //text += class*="s-result-item s-asin" + "<br>";






    //
    // await driver.quit();


}

example()


