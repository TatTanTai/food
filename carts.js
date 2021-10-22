// if(document.readyState == 'loadding') {
//     document.addEventListener('DOMContentt', input)
// } else{
//     input();
// }



// function input() {
//     var quantity = document.getElementsByClassName('quantity');
    
//     for(var j = 0; j < quantity.length; j++) {
//         var buttonInput = quantity[j];
//         console.log(buttonInput);
//         buttonInput.addEventListener('click', pushInput);   
//     }
// }


// function pushInput(event) {
//     var input = event.target
//     if(isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
//     }
//     sumToTal();
// }

// function sumToTal() {
//    var carRows = document.getElementsByClassName('cartRow')[0];
//    var cart_contents = carRows.getElementsByClassName('cart');
//    var total = 0
//    for(var i = 0; i < cart_contents.length; i++) {   
//         cart_content = cart_contents[i];
//         var cart_price = cart_contents.getElementsByClassName('buy')[0];
//         var cart_input = cart_contents.getElementsByClassName('quantity')[0];
//         var priceText = parseFloat(cart_price.innerText.replace('$', ''));
//         var inputValue = cart_input.value;
//         total = total + (priceText * inputValue);
//    }
//    total = Math.round(total*100)/100;
//    document.getElementsByClassName('prices')[0].innerText = '$' + total;
// }
