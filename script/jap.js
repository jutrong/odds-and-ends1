// checkbox all select

$('.checkbox-all').change(function(){
  if(this.checked){
    $('.checkbox-item:not(:checked)').prop('checked',true);
    $('.register__chk-title').addClass('on')
  }
  else{
    $('.checkbox-item:checked').prop('checked',false)
    $('.register__chk-title').removeClass('on')
  }
});
$('.checkbox-item').change(function(){
  let allChecked = $('.checkbox-item:not(:checked)').length == 0;
  if('.checkbox-item',allChecked){
    $('.register__chk-title').addClass('on')
    $('.checkbox-all').prop('checked',true)
  }
  else{
    $('.register__chk-title').removeClass('on')
    $('.checkbox-all').prop('checked',false)
  }
})


// tab menu

$('.login__btn a').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')

  var tab = $(this).attr('data-alt')
  $('.login__content section').removeClass('active')
  $('#' + tab).addClass('active')
})

// header Scroll Change

$(window).scroll(function(){
  if($(window).scrollTop() > 30) {
    $('header').addClass('active')
  }
  else {
    $('header').removeClass('active')
  }
  })
  

// slide //
var slides = document.querySelector('.slide__wrapper-slides'),
    slide = document.querySelectorAll('.slide__wrapper-slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 300,
    slideMargin = 30,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

    
    function moveSlide(num) {
      slides.style.left = -num * 330 + 'px';
      currentIdx = num;
      
    };
    nextBtn.addEventListener('click', function(){
      if(currentIdx < slideCount - 3){
        moveSlide(currentIdx + 1);
      }else{
        moveSlide(0);
      }
    });
    prevBtn.addEventListener('click', function(){
      if(currentIdx > 0){
        moveSlide(currentIdx - 1);
      }else{
        moveSlide(slideCount - 3);
      }
    });

// hover image change

tablet.onmouseover= function(){
  tablet.src = "image/tablet2.jpg";
}
tablet.onmouseout= function(){
  tablet.src = "image/tablet1.jpg";
}
eraser.onmouseover= function(){
  eraser.src = "image/eraser2.png";
}
eraser.onmouseout= function(){
  eraser.src = "image/eraser.png";
}
money.onmouseover= function(){
  money.src = "image/money2.png";
}
money.onmouseout= function(){
  money.src = "image/money1.png";
}
bag.onmouseover= function(){
  bag.src = "image/bag2.png";
}
bag.onmouseout= function(){
  bag.src = "image/bag1.png";
}
binu.onmouseover= function(){
  binu.src = "image/binu2.png";
}
binu.onmouseout= function(){
  binu.src = "image/binu1.jpg";
}
diary.onmouseover= function(){
  diary.src = "image/diary2.png";
}
diary.onmouseout= function(){
  diary.src = "image/diary1.png";
}
ruler.onmouseover= function(){
  ruler.src = "image/ruler2.png";
}
ruler.onmouseout= function(){
  ruler.src = "image/ruler1.png";
}
memo.onmouseover= function(){
  memo.src = "image/memo2.png";
}
memo.onmouseout= function(){
  memo.src = "image/memo1.png";
}


