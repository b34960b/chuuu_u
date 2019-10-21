(function($){
  const gnb = $('#gnb');
  const gnbArea = gnb.children('ul');
  const gnbArLi = gnbArea.children('li');
  gnbArLi.children('a').addClass('titleLink');

  const titleLink = $('.titleLink');
  const partList = titleLink.next('ul');
  const subLink = partList.find('a');

  gnbArea.on('mouseenter', function () {
    partList.stop().slideDown();
  });
  gnb.on('mouseleave', function () {
    partList.stop().slideUp();
  });



})(jQuery);