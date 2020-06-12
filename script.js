function createNotification(anchor, position, html) {
    let notification = document.createElement('span');
    notification.className = "note";
    let curentPrice = document.querySelector('input');
    notification.innerHTML = `Curent price: ${curentPrice.value}`;
    price.before(notification);

    positionAt(anchor, position, notification);
}
let form = document.querySelector('form')
createNotification(form, "top", "note");

function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();
    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - 5 - elem.offsetHeight + "px";
    }

}