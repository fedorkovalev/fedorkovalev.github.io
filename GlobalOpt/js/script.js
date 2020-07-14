$(document).ready(function () {

    //slider

    $('.slider').slick({
        centerMode: true,
        centerPadding: '250px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow/right_arrow.svg"></button>',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '50px'
            }
            },
            {
            breakpoint: 480,
            settings: {
                centerMode: true,
                centerPadding: '20px'
            }
            }
        ]
    });
    
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data:$(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });

    //Smooth scroll and pageup
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 650) {
            $('.pageup').fadeIn('slow');
        } else {
            $('.pageup').fadeOut('slow');
        }
    });
    
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


    


});

//map

function initMap() {
    let pos = {lat: 55.747985, lng: 37.627280};
    let posMarker = {lat: 55.747991, lng: 37.627280};

    let opt = {
        center: pos,
        zoom: 16,
        disableDefaultUI: true
    };

    let map = new google.maps.Map(document.getElementById('map'), opt);

    let marker = new google.maps.Marker({
        position: posMarker,
        map: map,
        icon: 'icons/marker.png'
    });
    
    let info = new google.maps.InfoWindow({
        content: '<div class="addres__info"><div class="address__subtitle">г. Москва</div><div class="address__place">ул. Садовническая, дом 5, офис 4-6<br>700 от м. Новокузнецкая</div><div class="address__tel"><a href="tel:+79264230100">Тел: +7 (926) 423 01 00</a></div><div class="address__mail">info@glopt.ru</div></div>'
    });

    marker.addListener('click', function() {
        info.open(map, marker);
    });
};