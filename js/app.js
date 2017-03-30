$(function init() {

    var prev          = $('#prevPicture');
    var next          = $('#nextPicture');
    var sliderWindow  = $('.slider');
    var slider        = sliderWindow.find('ul');
    var allSlides     = slider.find('li');
    var index         = 1;
    var heightPicture = allSlides.height();
    var widthPicture  = allSlides.width();

    sliderWindow.css({'width': widthPicture - 2, 'height': heightPicture });

    var firstSlide = allSlides.eq(0).clone();
    var lastSlide  = allSlides.eq(-1).clone();

    slider.append(firstSlide);
    slider.prepend(lastSlide);

    slider.css('width', widthPicture * slider.find('li').length);

    function showFirst(){
        index = 1;
        slider.css({right: widthPicture});
    }

    function showLast(){
        index = allSlides.length;
        slider.css({right: widthPicture * index});
    }

    showFirst();

    next.on('click', function () {
        index++;
        slider.animate({right: widthPicture * index}, 600, function () {
            if (index > allSlides.length) {
                showFirst();
            }
        });
    });

    prev.on('click', function () {
        index--;
        slider.animate({right: widthPicture * index}, 600, function(){
            if (index < 1) {
                showLast();
            }
        });
    });
});
