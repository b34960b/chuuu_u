// jq_05.js

(function ($) {
  let menu = $('.menu');
  let menuUl = menu.children('ul');
  let menuLi = menuUl.children('Li');
  let menuLink = menuLi.children('a');

  let mLiBg = menuLi.css('backgroundColor');
  let mLiBdr = menuLi.css('borderRadius');
  let mLinkColor = menuLink.css('color');
  let mLinkWeight = menuLink.css('fontWeight');
  menuLink.css({'outline':0});

  let set = {
    licolor : mLiBg,
    liborder : mLiBdr,
    linkcolor : mLinkColor,
    linkbold : mLinkWeight
  };


  //focus: 초점이 잡힌 상태(a, button, form 내부의 요소)
  menuLink.on('focus', function () {
    let mythis = $(this)
    mythis.parent('li').css({ 'backgroundColor': '#0af', 'borderRadius': '0.5rem' });
    mythis.css({ 'color': '#faf', 'fontWeight': 'bold', 'outline': '0' });
  });

  //blue: 초점이 잡힌요소가 풀리는 상황
  menuLink.on('blur', function () {
    let mythis = $(this);
    mythis.parent('li').css({'backgroundColor':set.licolor, 'borderRadius':set.liborder});
    mythis.css({'color':set.linkcolor, 'fontWeight':set.linkbold})
  });


  let mytop = $('.top_link').children('button');

  /*
  mytop.on('mouseenter', function(){});
  mytop.on('mouseleave', function(){});

  mytop.on('mouseenter', function(){})
       .on('mouseleave', function(){});    //메소드 체인을 이용한 경우

  */

  let topColor = mytop.css('backgroundColor');

  mytop.hover(function(){
                $(this).animate({'backgroundColor':'#f05'});
              },     //마우스 올렸을 경우
              function(){   
                $(this).animate({'backgroundColor': topColor});
              });   //마우스 벗어났을 경우


              // 선택자.기능('기능이름', function(){});

  mytop.on('click', function(event){
    event.preventDefault();  //선행되는 이벤트 제거
    $('html, body').animate({'scrollTop':0});
  });

  /**
   * css() => css 기능을 거의 다 쓸 수 있다.
   * animate()는 css의 기능을 쓸 수 있지만, 모두 쓸 수 없다,
                 transform, transition, animation, borderRadius 등
                 흔히 말하는 css3기능은 동작하지 않는다.
                 또 backgroundColor, color 등 색상 관련된 기능은 jquery-ui에서 사용되는 기능
                 animate는 css와는 다른 기능 일부가 첨부되어 있다.(scrollTop)
   */

   const win = $(window);
   const conBox = $('#contentBox');

   win.on('scroll', function(){
     let myscroll = $(this).scrollTop();
    //  console.log(myscroll);
    
    if (myscroll > 150){
     conBox.css({'backgroundColor':'#aca', 'transition':'all 300ms ease'});
    }else{
     conBox.css({'backgroundColor':'#fca', 'transition': 'all 300ms ease'});
    }
   });

  // 크기값이 변경되었을 때 사용하는 기능 (가로,세로 일부 기능 제한 두고 사용)
  let beforeWidth = win.width();   //크기값이 변경되기 전 가로값
   win.on('resize', function(){   
     let afterWidth = win.width();   //크기값이 변경된 후 가로값
     
     if(beforeWidth !== afterWidth){
      console.log('크기가 변경되었습니다.');
      history.go(0);   
     }
  });

  /** 새로고침의 방법
   * location.reload(true);            //새로고침(F5번키)
   * location.href = location.href;    //상단 주소창에 있는 주소로 이동
   * history.go(0);                    //사용기록 중 가장 최근 기록위치로 이동
   */

})(jQuery);