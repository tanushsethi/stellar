// Loading Screen

$("body").css("overflow", "hidden");

$(window).on("load", function () {
    $(".loader-container").delay(1000).fadeOut();
    $('body')
        .delay(1100)
        .queue(function (next) {
            $(this).css('overflow-y', 'scroll');
            next();
        });
});

// Load Login Window

$(".login-button").click(() => {
    window.location.href = "Pages/Sign Up/signup.html";
});

// Changing Logo Image on resize

if ($(window).width() <= 600) {
    $(".logo").attr("src", "logoS.png");
    $(".logo").css({
        "height": "60px",
        "width": "76px"
    });
    if ($(window).width() > 600) {
        $(".logo").attr("src", "logo.png");
        $(".logo").css({
            "height": "170%",
            "width": "120px"
        });
    }
}

$(window).resize(() => {
    if ($(window).width() <= 600) {
        $(".logo").attr("src", "logoS.png");
        $(".logo").css({
            "height": "60px",
            "width": "76px"
        });
    }
    if ($(window).width() > 600) {
        $(".logo").attr("src", "logo.png");
        $(".logo").css({
            "height": "170%",
            "width": "120px"
        });
    }
});

// Small Navbar Styling on Scroll

$(window).scroll(function () {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 145) {
        $("#nav-bar").css({
            "background-color": "black",
            "z-index": 99
        });
    }
    if ($(window).scrollTop() < 145) {
        $("#nav-bar").css("background-color", "transparent");
    }
});

// Map

mapboxgl.accessToken = 'pk.eyJ1IjoidXNqayIsImEiOiJja29ncXFydmkwcnNnMnVsYXh5bjN5ZDc1In0.Sy6f1oaJ7uuhC2wLfWEDKg';

navigator.geolocation.getCurrentPosition(successlocation, errorlocation, {
    enableHighAccuracy: true
})

function successlocation(position) { 
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorlocation() {
    setupMap[20.5937, 78.9629]
} 

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 1.6
    });
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)  

    // After the map style has loaded on the page,
    // add a source layer and default styling for a single point
    map.on('load', function () {
        map.addSource('single-point', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': []
            }
        });

        map.addLayer({
            'id': 'point',
            'source': 'single-point',
            'type': 'circle',
            'paint': {
                'circle-radius': 10,
                'circle-color': '#448ee4'
            }
        }); 
    });

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    )


    var marker1 = new mapboxgl.Marker()
        .setLngLat([78.476681027237, 22.1991660760527])
        .addTo(map);

    // Some Default Location Markers

    var marker2 = new mapboxgl.Marker({ color: 'black' })
        .setLngLat([12.65147, 55.608166])
        .addTo(map);

    var marker3 = new mapboxgl.Marker({ color: 'red' })
        .setLngLat([-97.9222112121185, 39.3812661305678])
        .addTo(map);

    var marker4 = new mapboxgl.Marker({ color: 'blue' })
        .setLngLat([96.6697054604756, 61.9945734073292])
        .addTo(map);

    var marker5 = new mapboxgl.Marker({ color: 'yellow' })
        .setLngLat([134.489562606981, -25.7349684916223])
        .addTo(map);

    var marker6 = new mapboxgl.Marker({ color: 'green' })
        .setLngLat([23.9137106762068, -28.3782721906973])
        .addTo(map);

    var marker7 = new mapboxgl.Marker({ color: 'orange' })
        .setLngLat([-51.6197890205486, -9.58890301712257])
        .addTo(map);

    var marker8 = new mapboxgl.Marker({ color: 'cyan' })
        .setLngLat([138.592229549504, 36.3864928218528])
        .addTo(map);

    var marker9 = new mapboxgl.Marker({ color: 'khaki' })
        .setLngLat([-4.05568501525488, 41.2948556295683])
        .addTo(map);

    var marker10 = new mapboxgl.Marker({ color: 'purple' })
        .setLngLat([2.61878695312962, 47.8249046208979])
        .addTo(map);

    var marker11 = new mapboxgl.Marker({ color: 'purple' })
        .setLngLat([101.901875103385, 35.4867029846329])
        .addTo(map);

    var marker12 = new mapboxgl.Marker({ color: 'pink' })
        .setLngLat([-105.750595856519, 55.5859012851966])
        .addTo(map);

}

// Subscribe Button

$("#subscribe").click(() => {
    $("input[type='email']").val("");
    alert("Subscribed Successfully!!!")
});

// Phone Menu
const ham = document.querySelector('.ham-menu');
const navlist = document.querySelector('.nav-list');
// const links = document.querySelectorAll('.nav-list li');

ham.addEventListener('click', () => {
    navlist.classList.toggle('open');
    ham.classList.toggle('animateLine');
});


// Swiper JS

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
});

// ------

// Basic css for a footer button

$(".wrapper a").mouseenter(() => {
    $(".wrapper i").css("transform", "translateX(15px)");
});
$(".wrapper a").mouseleave(() => {
    $(".wrapper i").css("transform", "translateX(-1px)");
});

// Counters 

var a = 0;
$(window).scroll(function () {
    var oTop = ($('.counterIt').offset().top - window.innerHeight) + 50;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counterIt').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
        });
        a = 1;
    }
});