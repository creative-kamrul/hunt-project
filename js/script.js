// const spyscroll=()=>{
//   const section = document.querySelectorAll('section')
//   window.onscroll = ()=>{
//       const scrollposition = document.documentElement.scrollTop || document.body.scrollTop
//       section.forEach((item)=>{
//           if(item.offsetTop <= scrollposition){
//               document.querySelector("li.active").classList.remove("active")
//           } else{
//             document.querySelector("li.active").classList.add("active")
//           }
          
//       })
//   }
  
// }

// const smooth = ()=>{
//   const links = document.querySelectorAll(".nav-link")
//   links.forEach((item)=>{
//       item.addEventListener("click",function(event){
//           event.preventDefault();
//           document.querySelector(item.hash)
//           .scrollIntoView({
//               behavior: "smooth"
//           })
          

//       })
//   })
// }

// spyscroll()
// smooth()



  // =======================================================
  $(".navbar-collapse a").click(function(){
    $(".navbar-collapse").collapse('hide')
  })

$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()
  if(scrollamount > 10){
    $(".menu").addClass("fixed")
  }else{
    $(".menu").removeClass("fixed")
  }
  if(scrollamount > 500){
    $(".btop").fadeIn();
  }else{
    $(".btop").fadeOut();
  }
})




$(".btop").click(function(){
$("html,body").animate({
  scrollTop:0
},1000)
}),



new WOW().init();


//  =================== banner slider start ==========================
$('#bannnerPart').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-left bnrprev"></i>',
    nextArrow: '<i class="fas fa-arrow-right bnrnext"></i>',
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //  =================== banner slider end ==========================


  $('.pslide').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


//  =================== vanu box start ==========================

  $('.venobox').venobox();

//  =================== vanu box end ============================

//  =================== service slider start ==========================
  $('.slideup').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-up srvcup"></i>',
    nextArrow: '<i class="fas fa-chevron-down srvcdown"></i>',
    // autoplay: true,
    // autoplaySpeed: 1000,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          vertical: true,
         verticalSwiping: true,
         centerMode: true,
         centerPadding: '0px',
         focusOnSelect: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
          centerMode: true,
          centerPadding: '0px',
          focusOnSelect: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
//  =================== service slider end ==========================
//  ===================  testimonial slider start ====================

  $('.imgslide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-up tup"></i>',
    nextArrow: '<i class="fas fa-chevron-down tdown"></i>',
    // autoplay: true,
    // autoplaySpeed: 1000,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    asNavFor: '.textslider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          centerMode: true,
          centerPadding: '0px',
          focusOnSelect: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          centerMode: true,
          centerPadding: '0px',
          focusOnSelect: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.textslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.imgslide',
    dots: false,
    // vertical: true,
    // verticalSwiping: true,
    // centerMode: true,
    // centerPadding: '0px',
    fade: true,
    speed: 1000,
    focusOnSelect: true,
    arrows: false,
  });
//  ===================  testimonial slider end ====================
// ============ counter up==============

window.onscroll = ()=>{
  let counter = document.querySelectorAll(".counter")
let counterarr = Array.from(counter)
counterarr.map((item)=>{
  let i = 0
  let endnumber = item.dataset.number
  let speed = item.dataset.speed
  function counterjs() {
   item.innerHTML = i
   if (i == endnumber) {
       clearInterval(stop)
   }
  }
  let stop = setInterval(() => {
      i++
    counterjs()
  }, speed);
})
},
// ==================counter end====================

// ==================team prat start====================
$('.member').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  // autoplay: true,
  // autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// ==================team part end====================

// ==================add part start====================
$('.aditem').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ==================add part end====================










