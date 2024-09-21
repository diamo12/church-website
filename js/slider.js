//Author: Isaiah L Bowman

$('.slider-left').on('click', function() {
  prevSlide();
});

$('.slider-right').on('click', function() {
  nextSlide();
});

$('.slider-container').on('mouseenter', function() {
  stopAutoSlider();
});

$('.slider-container').on('mouseleave', function() {
  startAutoSlider();
});

$('.slider-radio').on('click', '.radio-button', function() {
  if(!$(this).hasClass('active-radio')) {
    var ndx = $('.radio-button').index(this);
    var slide = $('.slide')[ndx];

    makeSlideActive(slide);
  }
});

addRadioButtons();
startAutoSlider();

var slideTimer;
var clickEnabled = true;

function startAutoSlider() {
  slideTimer = setInterval(nextSlide, 5000);
}

function stopAutoSlider() {
  clearInterval(slideTimer);
}

function addRadioButtons() {
  $('.slide').each(function() {
    $('.slider-radio')
      .append($('<div>', {class: 'radio-button'}).html('<i class="far fa-circle"></i>'));
  });

  $('.radio-button').first().toggleClass('active-radio');
  $('.radio-button>i').first().toggleClass('far fas');
}

function nextSlide() {
  var nxtSlide = $('.active-slide').next('.slide').length>0 ? $('.active-slide').next('.slide') : $('.slide').first();

  makeSlideActive(nxtSlide);
}

function prevSlide() {
  var prvSlide = $('.active-slide').prev('.slide').length>0 ? $('.active-slide').prev('.slide') : $('.slide').last();

  makeSlideActive(prvSlide);
}

function makeSlideActive(newActiveSlide) {
  if(clickEnabled) {
    clickEnabled = false;
    $('.active-slide')
      .add(newActiveSlide)
      .toggleClass('active-slide');

    var ndx = $('.slide').index(newActiveSlide);
    $('.active-radio>i').toggleClass('far fas');
    $('.active-radio').add($('.radio-button')[ndx]).toggleClass('active-radio');

    $('.active-radio>i').toggleClass('far fas');

    setTimeout(function() { clickEnabled = true; }, 400);
  }
}
