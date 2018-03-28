import 'bootstrap';
import Holder from 'holderjs';
import $ from 'jquery';
import './styles/index.sass';
import 'slick-carousel';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

require("font-awesome-webpack");

  $('.left_bar_top_title').click(function(e){
    e.preventDefault();
    $(this).parent().children('p').slideToggle();
    $(this).parent().find('i').toggleClass('rotateY');
  });


$('.slid').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        dots: true,  
        slidesToShow: 2,      
        slidesToScroll: 2,
      }
    }
  ]
});


// $(function onReady() { // eslint-disable-line prefer-arrow-callback
//   Holder.addTheme('thumb', {
//     background: '#55595c',
//     foreground: '#eceeef',
//     text: 'Thumbnail',
//   });
// });
