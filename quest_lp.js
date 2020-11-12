$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
      var elementTop = $(this).offset().top;
      console.log(elementTop); //表示させたいトップのところ
      var scroll = $(window).scrollTop(); //スクロール位置（上）
      console.log(scroll);
      var windowHeight = $(window).height(); //画面の高さ
      console.log(windowHeight);
      if (scroll > elementTop - windowHeight + 200){
          $(this).addClass('scrollin');
      }
      });
  });
});

