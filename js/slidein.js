//フェードインさせる要素を取得
const FADEIN_ELEM = document.getElementsByClassName('fadein')
window.addEventListener('scroll', () => {
  [...FADEIN_ELEM].forEach(function(element){
    const FADEIN_ELEM_TOP = element.getBoundingClientRect().top;
    //ブラウザの高さ
    const WINDOW_HEIGHT = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        element.classList.add('fadein-after');
    }else{
        element.classList.remove('fadein-after');
    }
  });

});


