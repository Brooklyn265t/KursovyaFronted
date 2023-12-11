let cart = []; // Массив товаров в корзине
let item1 = { id: 1, name: 'Windows 10', sale: 30};
let item2 = { id: 2, name: 'Windows', sale: 60};

var increment = document.getElementById('+');
var decrement = document.getElementById('-');

function AddItem(item, cart){
    cart.push(item);
    var counter;
    if(item == item1)
        counter  = document.getElementById('input-item1');
    else
        counter  = document.getElementById('input-item2');

    counter.value = countall(item, cart);
    cartPrint();
}

function RemoveItem(item, cart){
    var index = cart.indexOf(item);
    if(index != -1)
        cart.splice(index, 1);
    var counter;
    if(item == item1)
        counter  = document.getElementById('input-item1');
    else
        counter  = document.getElementById('input-item2');

    counter.value = countall(item, cart);
    cartPrint();
}

function countall(item, cart){
    var sum = cart.filter(element => element == item).length;
    return sum;
}
function cartPrint(){
    let items = cart.map(bought => {
        return `<div class="gap">
        ${bought.name} (x${bought.sale}$)
        </div>`
    }).join("");
    let container = document.getElementsByClassName("cart-container");
    container[0].innerHTML = items;
    
}

function clearCart(){
    cart = [];
    cartPrint();
    document.getElementById('input-item1').value="0";
    document.getElementById('input-item2').value="0";
}