(function ($) {
    const gnb = $('#gnb');
    const gnbUl = gnb.find('ul');
    const gnbLi = gnb.find('li');
    const gnbDl = gnb.find('dl');
    const gnbDt = gnb.find('dt');
    const gnbDd = gnb.find('dd');
    const gnbTitleLink = gnbDt.children('a');
    const gnbListLink = gnbDd.children('a');




    gnbUl.on('mouseenter', function(){
        gnbDd.stop().slideDown();
    });

    gnbUl.on('mouseleave', function(){
        gnbDd.stop().slideUp();
    });

    gnbTitleLink.on('focus', function(){
        gnbDd.stop().slideDown();
    });

    gnbListLink.eq(-1).on('focus', function(){
        gnbDd.stop().slideUp();
    });



})(jQuery);