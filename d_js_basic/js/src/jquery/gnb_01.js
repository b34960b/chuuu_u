// gnb_01.js

(function () {
  const gnb = $('#gnb');
  const gnbArea = gnb.children('ul');
  const gnbArLi = gnbArea.children('li');
  // gnbArLi.children('a').attr('class','titleLink');
  gnbArLi.children('a').addClass('titleLink');

  const titleLink = $('.titleLink');
  const partList = titleLink.next('ul');
  const subLink = partList.find('a');


  /*
  // ==============================================
  // 1번 기능 수행하기
  gnb.css({'backgroundColor':'transparent'});
  gnbArea.css({'height': 'auto', 'backgroundColor': '#fff', 'boxShadow':'0.2rem 0.2rem 0.2rem rgba(0,0,0,0.3)'});
  // 포커스 잡히면 보이게하기
  titleLink.on('focus', function(e){
    e.preventDefault();
    partList.stop().slideDown(timed);
  });
  // 마지막요소 블러처리되면 사라지게
  subLink.eq(-1).on('blur', function(){
    partList.stop().slideUp(timed);
  });
  // gnbArea 마우스 올렸을 경우 나타나게하기
  gnbArea.on('mouseenter', function(){
    partList.stop().slideDown(timed);
  });
  gnb.on('mouseleave', function(){
    partList.stop().slideUp(timed);
  });

  // =============================================
  // 2번 기능 수행하기
  gnbArea.css({'height':'100%'});
  // 이외의 기능은 1번 기능과 동일

  */

  // =============================================
  // 3번 기능 수행하기
  titleLink.on('mouseenter focus', function(){
    let ulSlide = $(this).naxt(partList);
    ulSlide.parent().siblings().find(partList).slideUp();
    ulSlide.slideDown();
  });

  ulSlide.find('a').eq(-1).on('blur', function(){
    ulSlide.slideUp();
  });


})(jQuery);
