var count = 0;
let intervalId;

function printNotifCount(count) {
    let indicator = document.getElementById("indicator");
    indicator.textContent = count;

}

function printmsg(count, message){
    let listmsg = document.getElementById("listnotif");
    let msg = document.createElement("li");
    msg.innerHTML = message;
    
    // создание кнопки удаления оповещения
    let deleteButton = document.createElement("button");
    deleteButton.className = 'remove-button';
    deleteButton.innerHTML = '[x]';
    
    // добавления к оповещению
    msg.appendChild(deleteButton);
    
    listmsg.appendChild(msg);
}

let timerId = setInterval(function(){
    count++;
    printNotifCount(count);
    printmsg(count, "msg");
    if (count === 10) {
        clearInterval(timerId);
    }
 }, 3000);

 function stopNotifCount() {
    clearInterval(timerId); // Остановить счетчик уведомлений
    setTimeout(function() { 
        intervalId = setInterval(function() {
            count++;
            printNotifCount(count);
            printmsg(count, "msg");
            if (count === 10) {
                clearInterval(timerId);
            }
        }, 3000);
    }, 10000); // Запустить счетчик уведомлений через 10 секунд
}
//делегирование событий используется в обработчике событий onclick для элемента listnotif.
//вместо того, чтобы назначть для каждрй ячейки, назначим на их общего предка
var listnotif = document.getElementById("listnotif");

listnotif.onclick = function(event) {
   if (event.target.className == 'remove-button') {
       let pane = event.target.closest('li');
       pane.style.display = 'none';
   }
};