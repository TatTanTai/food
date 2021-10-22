$(document).on('click','.addTocart', function() {
    var shapeAnimate = $(this).parents('.box');
    var cartIcon = $(document).find('#icon_cart');
    var srcAnimate = shapeAnimate.find('img').attr('src');
    var top = shapeAnimate.offset().top;
    var left = shapeAnimate.offset().left;
    $('<img />', {
        class: 'shapeAnimate',
        src: srcAnimate
    }).appendTo('body').css({
        'top': top + 115,
        'left': parseInt(left) + 115
    });
        setTimeout(function() {
            $(document).find('.shapeAnimate').css({
                'top': cartIcon.offset().top,
                'left': cartIcon.offset().left
            });
            setTimeout(function() {
                $(document).find('.shapeAnimate').remove();
            },500)

    },200)
});












if(document.readyState == 'loadding') {
    document.addEventListener('DOMContent', ready)
} else{
    ready();
    
}

function ready() {
    var close = document.getElementsByClassName('close');
    for(var i = 0; i < close.length; i++) {
        var buttonClose = close[i];
        buttonClose.addEventListener('click', closeCart);
    }

    var addToCart = document.getElementsByClassName('addTocart');
    for(var i = 0; i < addToCart.length; i++) {
        var buttonClick = addToCart[i];
        buttonClick.addEventListener('click', pushCart);   
    }

    var quantity = document.getElementsByClassName('quantity');
    
    for(var i = 0; i < quantity.length; i++) {
        var buttoninput = quantity[i];
        buttoninput.addEventListener('change', pushInput);   
    }

}


function numberCartss(event) {
    numbers = event.target;
    var spanCart = document.getElementsByClassName('numberCartttt')
    console.log(spanCart);
}


function closeCart(event) {
    var closes = event.target;
    closes.parentElement.parentElement.remove();
    sumToTal();
    closeNumberCart();
    
}

function closeNumberCart(){
    var closeNumberRow = document.getElementsByClassName('cartRow')[0];
    var closeNumbers = document.getElementsByClassName('close');
    var closeIconNumber = document.getElementsByClassName('icon')[0];
    var closeSpanNumber = closeIconNumber.getElementsByClassName('numberCartttt')[0].innerText = closeNumbers.length;
}










function pushCart(event) {
    buttonClick = event.target;
    var item = buttonClick.parentElement.parentElement;
    var title = item.getElementsByClassName('name')[0].innerText;
    var img = item.getElementsByTagName('img')[0].src;
    console.log(img);
    var buy = item.getElementsByClassName('buy')[0].innerText;
    addCart(title, buy, img);
    sumToTal();
    
}



function pushInput(event) {
    var input = event.target
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    sumToTal();
}




function addCart(title, buy, img) {
    var cartRow = document.getElementsByClassName('cartRow')[0];
    var cart = document.createElement('ul');

    cart.classList.add("carttt"); 
    var cartItemNames = cartRow.getElementsByClassName('namess');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Mặt hàng đã có trong giỏ')
            return
        }
    }

    var cartContent = `
    <li class="carts">
        <div>
            <img src="${img}">
        </div>
        <p class="namess">${title}</p>
    </li>
    <li>
        
        <input class="quantity" type="number" value="1" max="10">
        
    </li>
    <li>
        <p class="price">${buy}</p>
    </li>
    <li>
        <a class="close">Remove</a>
    </li>
    `
    cart.innerHTML = cartContent;

    cartRow.append(cart);

    cart.getElementsByClassName('close')[0].addEventListener('click', closeCart);

    cart.getElementsByClassName('quantity')[0].addEventListener('change', pushInput);

    
}





function sumToTal() {
    var carRows = document.getElementsByClassName('cartRow')[0];
    var cart_contents = carRows.getElementsByClassName('carttt');
    var total = 0
    for(var i = 0; i < cart_contents.length; i++) {   
         var cart_content = cart_contents[i];
         var cart_price = cart_content.getElementsByClassName('price')[0];
         var cart_input = cart_content.getElementsByClassName('quantity')[0];
         var priceText = parseFloat(cart_price.innerText.replace('$', ''));
         var inputValue = cart_input.value;
         total = total + (priceText * inputValue);
    }
   
    total = Math.round(total*100)/100;
    
    document.getElementsByClassName('prices')[0].innerText = '$' + total;
 }




$(document).ready(function (){
    $('.addTocart').click(function(){
        var cartNumberRow = document.getElementsByClassName('cartRow')[0];
        
        var cartItemNumber = cartNumberRow.getElementsByClassName('namess');
        var count = 1;
        for(var i = 0; i < cartItemNumber.length; i++){
            $('.numberCartttt').text(count++);
        }
        
    });
});






















