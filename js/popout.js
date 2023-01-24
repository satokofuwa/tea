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
