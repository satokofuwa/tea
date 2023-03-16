const CLASS ="-visible";
const $target =$(".animation");
const TIMEOUT = 2000;
const BTN = document.querySelector('.btn');
const TEXTS = document.querySelector('.texts');



let animation = document.getElementsByClassName('animation');

for(let i=animation.length-1; i>=0; i--){
 animationAction(animation[i],i)
  }

  function animationAction(animationDOM,animationld){
    animationDOM.addEventListener("click",function(){
      this.classList.toggle('active');
      
      for(let i=animation.length-1; i>=0; i--){
        if(animationld!==i){
          if(animation[i].classList.contains('active')){
            animation[i].classList.remove('active');
          }
        }
      }
    })
  }
  $(function(){
    $(window).scroll(function (){

      $('.fadein').each(function(){
        var elemPos = $(this).offset().top;
        // 要素の高さ
        var scroll = $(window).scrollTop();
        // 現時点での高さ
        var windowHeight = $(window).height();
        // Windowの高さ
        if (scroll > elemPos - windowHeight+100){
          // 現時点の高さが大きい>要素の高さーwindowの高さ
          $(this).addClass('scrollin');
        }
      });
      $('.fadeout').each(function(){
        var elemPos = $(this).offset().top;
        // 要素の高さ
        var scroll = $(window).scrollTop();
        // 現時点での高さ
        var windowHeight = $(window).height();
        // Windowの高さ
        if (scroll > elemPos - windowHeight+100){
          // 現時点の高さが大きい>要素の高さーwindowの高さ
          $(this).addClass('scrollout');
        }
      });
      
    });
  });
  