const prices = [
    28500,
    9850,
    15400,
    18700,
    26250,
    42500,
    32500,
    29800
];
let products = [
    "موز",
    "لیمو ترش",
    "سیب",
    "پرتقال",
    "انار",
    "سبزی خوردن",
    "سبزی کوکو",
    "سبزی آشی",
];

let code = prompt("لطفا کد محصول را وارد نمایید");
let price = prices[code];

let weight = prompt("لطفا وزن محصول " + products[code] + " را وارد نمایید");
let sum = weight * price;

document.write("مجموع قیمت " + products[code] + " : " + sum);

console.log("hello Hossein in javascript course");