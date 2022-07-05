$(function(){

    $('.type-pay a').on('click',function(){
      let index = $(this).data('index');

      $('.type-pay a').removeClass('active');
      $(this).addClass('active');

      $('.type-pay').slick('slickGoTo', index);
      return false;
    });
    
  
    $('#summ').on('input', function(){
      let $this = $(this),
        curVal = $this.val(),
        minVal = $this.attr('min'),
        maxVal = $this.attr('max'),
        curPersent = curVal*100/maxVal;
      $this.closest('.slider').find('.progress').css('width',curPersent+'%');
      $('#current-sum').html(curVal);
    });
    $('#monts').on('input', function(){
      let $this = $(this),
        curVal = $this.val(),
        minVal = $this.attr('min'),
        maxVal = $this.attr('max'),
        curPersent = (curVal-minVal)*100/(maxVal-minVal);
      $this.closest('.slider').find('.progress').css('width',curPersent+'%');
      $('#current-month').html(curVal);
    });

    $('#monts').on('input', function(){
      let $this = $(this);
      let curVal = $this.val();
      
      $('#current-month').html(curVal);
    });



    
  })


