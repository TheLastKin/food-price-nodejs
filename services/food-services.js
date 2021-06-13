const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://tmquoctuan.com/bang-bao-gia-rau-cu-qua/');
    this.data = await page.$$('tr:nth-child(n+2) td:nth-child(n+2)');
    console.log('data loaded');
})();

exports.getVegetables = async () => {
    const products = [];
    if (this.data) {
        for (let i = 0; i < 113 * 3 + 1; i += 3) {
            products.push({
                name: await (await this.data[i].getProperty('textContent')).jsonValue(),
                price: await (await this.data[i + 2].getProperty('textContent')).jsonValue(),
                unit: await (await this.data[i + 1].getProperty('textContent')).jsonValue()
            });
        }
        console.log(products);
    }
    return products;
}

exports.getSpices = async () => {
    const products = [];
    if (this.data) {
        for (let i = 339; i < 340 + (54 * 3); i += 3) {
            products.push({
                name: await (await this.data[i].getProperty('textContent')).jsonValue(),
                price: await (await this.data[i + 2].getProperty('textContent')).jsonValue(),
                unit: await (await this.data[i + 1].getProperty('textContent')).jsonValue()
            });
        }
        console.log(products);
    }
    return products;
}

exports.getFishes = async () => {
    const products = [];
    if(this.data){
        for(let i = 502; i < 503 + (9*3); i+=3){
            products.push({
                name: await(await this.data[i].getProperty('textContent')).jsonValue(),
                price: await(await this.data[i + 2].getProperty('textContent')).jsonValue(),
                unit: await(await this.data[i + 1].getProperty('textContent')).jsonValue()
            });
        }
        console.log(products);
    }
    return products;
}

exports.getChickens = async () => {
    const products = [];
    if (this.data) {
        for (let i = 531; i < 532 + (8 * 3); i += 3) {
            products.push({
                name: await (await this.data[i].getProperty('textContent')).jsonValue(),
                price: await (await this.data[i + 2].getProperty('textContent')).jsonValue(),
                unit: await (await this.data[i + 1].getProperty('textContent')).jsonValue()
            });
        }
        console.log(products);
    }
    return products;
}

exports.getPorks = async () => {
    const products = [];
    if (this.data) {
        for (let i = 557; i < 558 + (4 * 3); i += 3) {
            products.push({
                name: await (await this.data[i].getProperty('textContent')).jsonValue(),
                price: await (await this.data[i + 2].getProperty('textContent')).jsonValue(),
                unit: await (await this.data[i + 1].getProperty('textContent')).jsonValue()
            });
        }
        console.log(products);
    }
    return products;
}

exports.getBeefs = async () => {
    const products = [];
    if (this.data) {
        for (let i = 571; i < 572 + (20 * 3); i += 3) {
            products.push({
                name: await (await this.data[i].getProperty('textContent')).jsonValue(),
                price: await (await this.data[i + 2].getProperty('textContent')).jsonValue(),
                unit: await (await this.data[i + 1].getProperty('textContent')).jsonValue()
            });
        }
        console.log(products);
    }
    return products;
}

exports.getChickenEggs = async () => {
    const products = [];
    if (this.data) {
        for (let i = 636; i < 644; i += 3) {
            if(i==639) i+=1;
            products.push({
                name: await (await this.data[i].getProperty('textContent')).jsonValue(),
                price: await (await this.data[i + 2].getProperty('textContent')).jsonValue(),
                unit: await (await this.data[i + 1].getProperty('textContent')).jsonValue()
            });
        }
        console.log(products);
    }
    return products;
}

exports.getDuckEggs = async () => {
    const products = [];
    if (this.data) {
        for (let i = 649; i < 655; i += 3) {
            if (i == 652) i += 1;
            products.push({
                name: await (await this.data[i].getProperty('textContent')).jsonValue(),
                price: await (await this.data[i + 2].getProperty('textContent')).jsonValue(),
                unit: await (await this.data[i + 1].getProperty('textContent')).jsonValue()
            });
        }
        console.log(products);
    }
    return products;
}

exports.getQuailEggs = async () => {
    const products = [];
    if (this.data) {
        for (let i = 659; i < 662; i += 3) {
            products.push({
                name: await (await this.data[i].getProperty('textContent')).jsonValue(),
                price: await (await this.data[i + 2].getProperty('textContent')).jsonValue(),
                unit: await (await this.data[i + 1].getProperty('textContent')).jsonValue()
            });
        }
        console.log(products);
    }
    return products;
}