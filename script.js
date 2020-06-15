function createNotification(anchor, position, html) {

   
    let notification = document.createElement('span');
    notification.className = "note";
    
    let curentPrice = document.querySelector('input');
    // let curentPriceGreen = curentPrice.value.style.background = "green";
    notification.innerHTML = `Curent price: ${curentPrice.value}`;
    form.before(notification);

    positionAt(anchor, position, notification);
  
    createCloseCross (notification, "right-in", 'closeButton')
}
let form = document.querySelector('form')

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
  function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
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
             break;}
}

function createCloseCross (anchor, position,) {
    let crossButton = document.createElement('button');
    crossButton.className = 'closeButton'
    
    crossButton.innerHTML = `+`;
    anchor.append(crossButton);

    positionAt(anchor, position, crossButton);
}

function selectValue() {
    let range = new Range();
    let input = document.querySelector('input');
    range.setStart(input, 0, );
    range.setEnd(input, 1, );
    let grenStyle = input.value;
    grenStyle.style.background = "green";
    console.log(input.value);

    // document.getSelection().addRange(range);
};




 form.addEventListener("focusout", () => createNotification(form, "top", "note"));
form.addEventListener("focusout", () => selectValue());
let closeButton = document.querySelector('button');
console.log(closeButton)
// closeButton.addEventListener("onclick", () => remove.notification);


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