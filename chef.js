let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu2');
let search = document.querySelector('.icon_search');
let formSearch = document.querySelector('.form_search');
let iconCart = document.querySelector('.icon_cart');
let formCart = document.querySelector('.form_cart');

slideIndex = 0;
slides();
function slides() {
    var slide = document.querySelectorAll('div.home .slide');
    for(var i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > slide.length) {
        slideIndex = 1;
    }
    slide[slideIndex-1].style.display = 'block';
    setTimeout(slides,4000);
}




window.onscroll = () => {
    bar = document.remove('fa-times');
    menu = document.remove('active');
    search = document.remove('fa-times');
    formSearch = document.remove('active');
    iconCart = document.remove('fa-times');
    formCart = document.remove('active');
}

window.onscroll = function() {
    var header = document.getElementById('header');
    if(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        header.style.position = 'fixed';
        header.style.left = 0;
        header.style.right = 0;
        header.style.zIndex = '1000';
    } else{
        header.style.position = 'static';
    }
}

bar.addEventListener('click', () => {
    bar.classList.toggle('fa-times');
    menu.classList.toggle('active');
});

search.addEventListener('click', () => {
    search.classList.toggle('fa-times');
    formSearch.classList.toggle('active');
});

iconCart.addEventListener('click', () => {
    iconCart.classList.toggle('fa-times');
    formCart.classList.toggle('active');
});

$(document).ready(function() {
    $('.bar').click(function() {
        $('.menu2').slideToggle('snow');
    });
});

$(document).ready(function (){
    $('.icon_search').click(function () {
        $('.form_search').slideToggle('snow');
    });
    $('.icon_cart').click(function() {
        $('.form_cart').slideToggle('snow');
    });
});




$(document).ready(function() {
    var heart = document.querySelectorAll('i.heart')
    for(var i = 1; i <= heart.length; i++){
        $('.heart1_'+ i +'').click(function() {
            $(this).toggleClass('heartt');
        });
    }
});

$(document).ready(function() {
    $(".shapePlus").click(function(){
        $(this).hide();
        $(".shapeReduce").show();
        // $(".shapePlus").hide();
    });
      
    $(".shapeReduce").click(function(){
        $(this).hide();
        $(".shapePlus").show();
        // $(".shapeReduce").hide();
    });
});

$(document).ready(function() {
    $('.shapePlus').click(function() {
        $('.menu_shape').css({
            'height' : '100%',
            'overflow' : 'visible'
        });
    });
});

$(document).ready(function() {
    $('.shapeReduce').click(function() {
        $('.menu_shape').css({
            'height' : '68rem',
            'overflow' : 'hidden'
        });
    });
});








// function load() {
//     document.querySelector('.load').classList.add('load_off');
// }

// function loadOff() {
//     setInterval(load,3000);
// }
// window.onload = loadOff;




