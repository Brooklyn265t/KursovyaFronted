function showNotification({top = 0, right = 0, className, html}) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
      notification.classList.add(className);
    }

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
  }

  let i = 1;
  setTimeout(() => {
    showNotification({
      top: 10,
      right: 10,
      html: 'Hello ' + i++
    });
  }, 2000);
  /*свойства DOM: Style, innerHTML, className, classList*/
  /*прототипное наследование - наследование при котором можно получить свойства и метода у другого объекта*/
