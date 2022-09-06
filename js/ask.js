
  function send(){
    $('.ask button').on('click',function(){
      $('.ask dd>input').val('');
      $('.ask dd>textarea').val('');
      alert('전송되었습니다.');
    });
  }

  function accodianW(){
    $('.qna dd').hide();
    // 클릭이벤트
    $('.qna dt').on('click',function(){
        let str = $(this).next('dd').css('display');
        if(str === 'none'){
            $(this).next('dd').slideDown(300);
            $(this).children('div').css('transform','rotate(135deg)')
        }
        else{
            $(this).next('dd').slideUp(300);
            $(this).children('div').css('transform','rotate(315deg)')
        }
    });
  }
  
  function accodianTM(){
        $('.qna dt:first').addClass('selected');
        $('.qna dd').hide();
        $('.qna dt').on('click',function(){  
            let str = $(this).next('dd').css('display');
            if(str === 'none'){
                $('dt.selected').next('dd').slideUp(300);
                $(this).next('dd').slideDown(300);
                $('.qna dt').removeClass('selected');
                $(this).addClass('selected');
            }
            else{
                $(this).next('dd').slideUp(300);
            }
        });
  }