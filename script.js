let notification = document.createElement('span');
// <<<<<<< HEAD
// function createNotification(anchor, position, html) {

   
    
// =======

function createNotification(anchor, position, html) {

// >>>>>>> 4e209c851a47c21dd37e4cdfc2ac1e25418c962e
    notification.className = "note";
    let curentPrice = document.querySelector('input');
    console.log(typeof(curentPrice.value));
    if (curentPrice.value < 0) {

        notification.innerHTML = `Please enter correct price`;
        form.after(notification);
        input.style.border = 'red';
        positionAt(anchor, "bottom", notification);
    } else {
        // let curentPriceGreen = curentPrice.value.style.background = "green";
        notification.innerHTML = `Curent price: ${curentPrice.value}`;
        form.before(notification);

        positionAt(anchor, "top", notification);

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

            elem.style.left = anchorCoords.left + 5 + elem.offsetWidth + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
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

console.log(crossButton);
// let span = document.querySelector('span');
// console.log(span);
crossButton.addEventListener("onclick", () => notification.remove());

function selectValue() {
// <<<<<<< HEAD
  let input = document.querySelector('input');
  document.querySelector('.closeButton').addEventListener("click", () => {
  notification.remove()
  // setElementById.price.value.innerHTML=''
  });
  // let range = new Range();
  
  // range.setStart(form, 2);
  // range.setEnd(form, 5);
  // let greenStyle = input.value;
  input.style.color = "green";
  // input.style.color = "white";
  console.log(input.value);
  
  // document.getSelection().addRange(range);
// =======
//     // let range = new Range();
//     let input = document.querySelector('input');
//     // range.setStart(form, 2);
//     // range.setEnd(form, 5);
//     // let greenStyle = input.value;
//     input.style.background = "green";
//     input.style.color = "white";
//     console.log(input.value);

//     // document.getSelection().addRange(range);
// >>>>>>> 4e209c851a47c21dd37e4cdfc2ac1e25418c962e
};


form.addEventListener("focusout", () => {
  notification.remove()
  createNotification(form, "top", "bottom", "note")
  selectValue()
});

// <<<<<<< HEAD
//  form.addEventListener("focusout", () => createNotification(form, "top", "note"));
// form.addEventListener("focusout", () => selectValue());
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
// =======

// form.addEventListener("focusout", () => notification.remove());
// form.addEventListener("focusout", () => createNotification(form, "top", "bottom", "note"))
// form.addEventListener("focusout", () => selectValue());

// // closeButton.addEventListener("onclick", () => remove.notification);
// >>>>>>> 4e209c851a47c21dd37e4cdfc2ac1e25418c962e
