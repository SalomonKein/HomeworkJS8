let notification = document.createElement('span');
// <<<<<<< HEAD
// function createNotification(anchor, position, html) {



// =======

function createNotification(anchor, position, html) {

    // >>>>>>> 4e209c851a47c21dd37e4cdfc2ac1e25418c962e
    notification.className = "note";
    let curentPrice = document.querySelector('input');
    console.log(typeof(curentPrice.value));
    console.log(typeof(curentPrice));


    if (curentPrice.value < 0 || !isFinite(curentPrice.value) || curentPrice.value == "" || curentPrice.value === " " || curentPrice.value === "  " || curentPrice.value === "   " || curentPrice.value === "    " || curentPrice.value === "     ") {

        notification.innerHTML = `Please enter correct price`;
        form.after(notification);

        positionAt(anchor, "bottom", notification);
        curentPrice.style.color = "red";
        createCloseCross(notification, 'closeButton')
        console.log(`value = "${curentPrice.value}"`);

        // } else if (curentPrice.value = "empty string") {

    } else {

        notification.innerHTML = `Curent price: ${curentPrice.value}`;
        form.before(notification);

        positionAt(anchor, "top", notification);
        curentPrice.style.color = "green";
        createCloseCross(notification, 'closeButton')
    }


}
let form = document.querySelector('form')

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top,
        left: box.left,
    };
}
console.log(getCoords(form))

function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);
    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - 15 - elem.offsetHeight + "px";
            break;
        case "right-in":

            elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;
        case "bottom":

            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + 75 - elem.offsetHeight + "px";
            break;
    }
}
let crossButton = document.createElement('button');

function createCloseCross(anchor, position, ) {
    let crossButton = document.createElement('button');
    crossButton.className = 'closeButton'

    crossButton.innerHTML = `+`;
    anchor.append(crossButton);

    positionAt(anchor, position, crossButton);


}


crossButton.addEventListener("onclick", () => notification.remove());

function selectValue() {
    let input = document.querySelector('input');
    document.querySelector('.closeButton').addEventListener("click", () => {
        notification.remove()
        input.value = ""
        input.style.color = "black"
    });

    // console.log(input.value);
};


form.addEventListener("focusout", () => {
    createNotification(form, "top", "bottom", "note")
    selectValue()
});

let closeButton = document.querySelector('button');
// console.log(closeButton)