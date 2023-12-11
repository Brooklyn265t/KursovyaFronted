let captcha1;
let captcha2;
let sum = 0;

function generateRandomCaptcha() {
    document.getElementById("submit").value = "";
    let captcha1 = document.getElementById("image");
    let uniquechar = "";
    let randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(Math.floor(Math.random() * randomchar.length));
    //charAt доступ к символам
    }
    captcha1.innerHTML = uniquechar; 
    /*озволяет считать содержимое элемента в виде HTML-строки 
    или установить новый HTML */
}

function generateRandomNUMBCaptcha() {
    let numb1;
    let numb2;
    randomnumb = "0123456789";
    numb1 = Math.floor(Math.random() * 10);
    numb2 = Math.floor(Math.random() * 10);
    sum = numb1 + numb2;
    document.getElementById("submit").value = ""; //находим эдемент по индификатору
    captcha2 = document.getElementById("image");
    captcha2.innerHTML = numb1 + " + " + numb2 + " = ";
}

function printmsg() {
    const usr_input = document.getElementById("submit").value;
    let captcha1 = document.getElementById("image");
    if (usr_input == captcha1.innerText) {
        document.getElementById("key").innerHTML = "Matched";
        generateRandomCaptcha();
    } else {
        if (sum && usr_input == sum) {
            document.getElementById("key").innerHTML = "Matched";
            generateRandomNUMBCaptcha();
        } else {
            document.getElementById("key").innerHTML = "Not Matched";
            generateRandomNUMBCaptcha();
        }
    }
}

window.onload = generateRandomCaptcha