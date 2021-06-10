// $(window).scroll(function(){

//     var st = $(this).scrollTop()

//     $(".pat_1").css({
//     "transform" : "translate(0%, -" + st/70 +"%"
//     });

//     $(".pat_2").css({
//     "transform" : "translate(0%, " + st/40 +"%"
//     });
// })


$(document).ready(function(){

  $(window).scroll(function(){
    if ( $(this).scrollTop() > 100 ){
        $('.header_fixed').addClass('show');
    } else if($(this).scrollTop() <= 100) {
      $('.header_fixed').removeClass('show');
    }
});

  // $(document).on('click', function(e){
  //   console.log(e.target);
  // })
  $(".phone_mask").mask("+7 (999) 999-9999");
  $('button.more').on('click', function(e){
    // console.log(e.target);
    $('.mobile_fix').addClass('show_more');
    $('button.more').addClass('hide');
  });
  $('.show_form').on('click', function(e){
    e.preventDefault();
    $('#form_popup').addClass('show');
    $('body').css('overflow', 'hidden');
  });
  $('.show_form1').on('click', function(e){
    e.preventDefault();
    $('#form_popup1').addClass('show');
    $('body').css('overflow', 'hidden');
  });
  $('.show_policy').on('click', function(){
    $('#policy').addClass('show');
    $('body').css('overflow', 'hidden');
  });
  $('.show_policy').on('click', function(){
    $('#policy').addClass('show');
    $('body').css('overflow', 'hidden');
  });
  $('.overlay-button').on('click', function(){
    if($('#overlay').hasClass('show')){
      $('body').css('overflow', 'auto');
      $('.header_fixed').removeClass('open');
    }
    else{
      $('body').css('overflow', 'hidden');
      $('.header_fixed').addClass('open');
    }
    $(this).toggleClass('active');
    $('#overlay').toggleClass('show');
    
  });
  $('.overlay_item').on('click', function(){
    $('#overlay').removeClass('show');
    $('.overlay-button').removeClass('active');
    $('.header_fixed').removeClass('open');
    console.log('here');
    $('body').css('overflow', 'auto');
  });
  jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".popup_wrapper"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.popup_container').removeClass('show');
            $('body').css('overflow', 'auto');
      }
    });
  });
  $('.close_popup').on('click', function(){
    $('.popup_container').removeClass('show');
    $('body').css('overflow', 'auto');
  });
    let currentStep = 1,
        firstStep = true,
        backFirst = true,
        current,next,prev,val,
        price = 0, flag_skip = true;

    let steps ={
        'med': 4,
        'farm': 4,
        'educ': 4,
        'alc': 3,
        'dang': 4,
        'another': 2,
    }

    function NextTab(){
      currentStep++;
      let step = currentStep;

      if(currentStep == 2) {
          ym(66464410,'reachGoal', 'step2');
          console.log('step2');  
      }
      
      if(currentStep == 3) {
          ym(66464410,'reachGoal', 'step3');
          console.log('step3');  
      }
      
      if(currentStep == 4) {
          ym(66464410,'reachGoal', 'step4');
          console.log('step4');  
      }
      
      if(firstStep){
          // console.log($('input[name=step1]:checked').val());
          val = $('input[name=step1]:checked').val();
          current = `.tab.${val}.-current`;
          next = `.tab.${val}.-next`;
          prev = `.tab.${val}.-prev`;


          if(currentStep < 4) step = '0'+ currentStep;
          $('span.cur_cont').html(step);
          $('span.all').html(`/ ${steps[val]}`);
          $('.tab.-current').removeClass('-current').addClass('-prev' );
          $(next).addClass('-current').removeClass('-next');
          $('.tab.-current').next(`.tab.${val}`).addClass('-next');
          firstStep= false;
          // console.log(current);
          $('.progress_bar').css('width', `${(Math.floor(100/steps[val])*currentStep)}%`);
          $('.progress_count').html(`${(Math.floor(100/steps[val])*currentStep)}%`);
          ym(66464410,'reachGoal', val); 
      }
      else{  
          if(currentStep < 4) step = '0'+ currentStep;
          $('span.cur_cont').html(step);
          $(current).prev(`.tab.${val}`).removeClass('-prev');
          $(current).removeClass('-current').addClass('-prev');
          $(next).addClass('-current').removeClass('-next');
          $(current).next(`.tab.${val}`).addClass('-next');
          if($(prev).hasClass('checkbox')){
            $(`input[name=step${currentStep-1}_${val}]:checked`).each(function(){
              price += +this.value;
            });
          }
          else{
            price+= +($(`input[name=step${currentStep-1}_${val}]:checked`).val());
          }
          backFirst=false;
          
          console.log(price);
          console.log($(`input[name=step${currentStep-1}_${val}]:checked`));
          $('.progress_bar').css('width', `${(Math.floor(100/steps[val])*currentStep)}%`);
          $('.progress_count').html(`${(Math.floor(100/steps[val])*currentStep)}%`);
          $('.com').removeClass('show');
      } 
      flag_skip = true;
  }
  function PrevTab(){
    currentStep--;
    let step = currentStep;
      if($(current).hasClass('start')){
        if(currentStep < 9) step = '0'+ currentStep;
        $('span.cur_cont').html(step);
        $(next).removeClass('-next');
        $(current).addClass('-next');
        $(current).removeClass('-current');
        $('.tab.-prev').addClass('-current');
        $('.tab.-prev').removeClass('-prev');
        console.log('is first');
        firstStep = true;
      }
      else{
        if(currentStep < 9) step = '0'+ currentStep;
        $('span.cur_cont').html(step);
        $(next).removeClass('-next');
        $(current).addClass('-next').removeClass('-current');
        $(prev).addClass('-current').removeClass('-prev');
        $(current).prev(`.tab.${val}`).addClass('-prev');
        if($(prev).hasClass('checkbox')){
          $(`input[name=step${currentStep-1}_${val}]:checked`).each(function(){
            price -= +this.value;
          });
        }
        else{
          price= price - ($(`input[name=step${currentStep}_${val}]:checked`).val());
        }
      }
        
        // $(current).prev(`.tab.${val}`).removeClass('-prev');
        // $(current).removeClass('-current').addClass('-prev');
        // $(next).addClass('-current').removeClass('-next');
        // $(current).next(`.tab.${val}`).addClass('-next');
        
        
        console.log(price);
        console.log($(`input[name=step${currentStep-1}_${val}]:checked`));
        $('.progress_bar').css('width', `${(Math.floor(100/steps[val])*currentStep)}%`);
        $('.progress_count').html(`${(Math.floor(100/steps[val])*currentStep)}%`);
        $('.com').removeClass('show'); 
}

  $('.tab ').on('click', 'input', function(){
    console.log($(this).attr('type'))
    if( ($(this).attr('type')== 'radio') && !$(this).hasClass('show_com')  && !$(this).hasClass('last')){
      NextTab();
    }
    
  } );
    $('.btn.next').on('click', NextTab);
    $('.btn.prev').on('click', PrevTab);


      //E-mail Ajax Send
      $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize(),
          success: function (dataArray) {
            if (dataArray.length) {
                console.log("Есть данные");
          }
        },

        }).done(function() {
          $('#form_popup').removeClass('show');
          $('#thank').addClass('show');
          ym(66464410,'reachGoal','submit');
          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
            price = 0;
          }, 1000);
        });
        
        return false;
      });
      
       //E-mail Ajax Send From Med.html
      // $("form").submit(function() { //Change
      //   var th = $(this);
      //   $.ajax({
      //     type: "POST",
      //     url: "mail.php", //Change
      //     data: th.serialize(),
      //     success: function (dataArray) {
      //       if (dataArray.length) {
      //           console.log("Есть данные");
      //     }
      //   },
      //
      //   }).done(function() {
      //     $('#form_popup1').removeClass('show');
      //     $('#thank1').addClass('show');
      //     ym(66464410,'reachGoal','submit');
      //     setTimeout(function() {
      //       // Done Functions
      //       th.trigger("reset");
      //       price = 0;
      //     }, 1000);
      //   });
      //
      //   return false;
      // });
      
      
      $(".menu").on("click","a.down", function (event) {
        const id  = $(this).attr('href'); //заберем айдишник блока с параметром URL
        const top = $(id).offset().top; //определим высоту от начала страницы до якоря
        $('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
      });

    $('.btn.final').on('click', function(){
      $('span.cur_cont').html(steps[val]);
      $('.tab.-current').removeClass('-current').addClass('-prev' );
      $('.tab.final').addClass('-current');
      $('span.price_tab').html(price);
      $('.progress_bar').css('width', '100%');
      $('.progress_count').html('100%');

    });
    $('.city').on('click', function(){
      
      if($(`input.city:checked`).hasClass('show_com')){
        $('.com').addClass('show');
      }
      else{
        $('.com').removeClass('show');
      }
      
    });
    $('.skip_q').on('click', function(){
      
      if($(`input.skip_q:checked`).hasClass('no-skip')){
        
        $(`.tab.-skip-${val}`).removeClass('-next');
        $(`.tab.-skip-${val}`).next(`.tab.${val}`).addClass('-next');
        if(flag_skip){
          steps[val]--;
          flag_skip = false;
          $('span.all').html(`/ ${steps[val]}`);
        }
       
      }
      else{
        $(`.tab.-skip-${val}`).addClass('-next');
        $(`.tab.-skip-${val}`).next(`.tab.${val}`).removeClass('-next');
        if(!flag_skip){
          steps[val]++;
          flag_skip = true;
          $('span.all').html(`/ ${steps[val]}`);
        }
        
        
      }
      
    });
    var mySwiper2 = new Swiper('.cases-slider', {
      // Optional parameters
      loop: true,
      simulateTouch: false,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          
          if(+total <= 9){
            return ` <span class="swiper-pagination-current">0${current}</span> / <span class="swiper-pagination-total">0${total}</span>`;
          }
          else{
            if(+current <=9){
              return ` <span class="swiper-pagination-current">0${current}</span> / <span class="swiper-pagination-total">${total}</span>`;
            } 
            else{
              return ` <span class="swiper-pagination-current">${current}</span> / <span class="swiper-pagination-total">${total}</span>`;
            }
            
          }
          
        },
      },
      on: {
        slideChange: function () {
          this.pagination.update()
        },
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    });
    var mySwiper3 = new Swiper('.steps', {
      // Optional parameters
      loop: false,
      spaceBetween: 30,
      slidesPerView: 'auto',
      mousewheel: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          
          if(+total <= 9){
            return ` <span class="swiper-pagination-current">0${current}</span> / <span class="swiper-pagination-total">0${total}</span>`;
          }
          else{
            if(+current <=9){
              return ` <span class="swiper-pagination-current">0${current}</span> / <span class="swiper-pagination-total">${total}</span>`;
            } 
            else{
              return ` <span class="swiper-pagination-current">${current}</span> / <span class="swiper-pagination-total">${total}</span>`;
            }
            
          }
          
        },
      },
      on: {
        slideChange: function () {
          this.pagination.update()
        },
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    });
/*       $('.slick-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slick-slider-nav',
      lazyLoad: 'ondemand',
    });
    $('.slick-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slick-slider',
      focusOnSelect: true,
      lazyLoad: 'ondemand',
    }); */


    $('.cases__slider').slick();
    var mySwiper = new Swiper('.otzivi-slider', {
        // Optional parameters
        // loop: true,
        spaceBetween: 15,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            
            if(+total <= 9){
              return ` <span class="swiper-pagination-current">0${current}</span> / <span class="swiper-pagination-total">0${total}</span>`;
            }
            else{
              if(+current <=9){
                return ` <span class="swiper-pagination-current">${current}</span> / <span class="swiper-pagination-total">${total}</span>`;
              } 
              else{
                return ` <span class="swiper-pagination-current">${current}</span> / <span class="swiper-pagination-total">${total}</span>`;
              }
              
            }
            
          },
          
          
        },
        on: {
          slideChange: function () {
            this.pagination.update()
          },
        },
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }

      });
      console.log($(total));
});