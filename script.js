function createNotification(anchor, position, html) {
    let notification = document.createElement('span');
    notification.className = "note";
    let curentPrice = document.querySelector('input');
    // let curentPriceGreen = curentPrice.value.style.background = "green";
    notification.innerHTML = `Curent price: ${curentPrice.value}`;
    form.before(notification);

    positionAt(anchor, position, notification);
}
let form = document.querySelector('form')


function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();
    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - 5 - elem.offsetHeight + "px";
    }

}

function selectValue() {
    let range = new Range();
    let input = document.querySelector('input');
    range.setStart(input, 0, );
    range.setEnd(input, 0, );
    // input.value.style.color = "green";
    document.getSelection().addRange(range);
};



form.addEventListener("focusout", () => createNotification(form, "top", "note"));
form.addEventListener("focusout", () => selectValue());

// price.onblur = function() {
//     createNotification(form, "top", "note");
// };

// body.onclick = function(event) {
//     // if (!event.price) {
//     createNotification(form, "top", "note");
//     // }
// };
// body.onclick = function(event) {
//     alert(event.type + " на " + event.currentTarget);
//     // alert("Координаты: " + event.clientX + ":" + event.clientY);
// };