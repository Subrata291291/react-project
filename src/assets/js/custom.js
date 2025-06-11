// Modal area js
$(window).ready(function() {
  setTimeout(function() {
    $('#myModal').modal("show")
  }, 10000)
});


// Nav area js   
const navbar_icon = document.querySelector(".navbar_icon");
navbar_icon.addEventListener("click", function() {
  const body = document.body;
  body.classList.toggle("nav-open");
});


// Banner slideer js
$(".banner_slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
});



// product slider js
$(".product_slider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1199,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

// offer slider js
$(".offer_slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1199,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});

// Header js   
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 270) {
      $(".header_area").addClass("shrink")
    } else {
      $(".header_area").removeClass("shrink")
    }
  });
});

// Tab area js
$(document).ready(function() {
  $('ul.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
});



// Video popup js
$(document).ready(function() {
  var openBtn = document.getElementById('video_icon');
  var videoIfra = document.getElementById('videoIfra');

  var overlay = document.getElementById('video-overlay');
  var closeBtn = document.getElementById('close-btn');


  // Function to open the video popup
  function openVideoPopup() {
    overlay.style.display = 'flex';
  }

  // Function to close the video popup
  function closeVideoPopup() {
    overlay.style.display = 'none';
  }

  // Event listeners
  openBtn.addEventListener('click', openVideoPopup);
  closeBtn.addEventListener('click', closeVideoPopup);
});