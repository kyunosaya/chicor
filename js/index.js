function box03(){
    $('#box03 button>a').on('click',function(){
      $('#join').show();
      $('#back').show();
      
      $('#join .close').on('click',function(e){
          $('#join').hide();
          $('#back').hide();
      })
  });
  }

  function send(){
    $('.send').on('click',function(){
      alert('전송에 실패했습니다.')
  })
  }

  function box05(){
    $('.loccitaneLogo').on('click',function(){
      $(location).attr('href','./loccitane.html')
    })
    $('.thebodyshopLogo').on('click',function(){
      $(location).attr('href','./thebodyshop.html')
    })
    $('.kamillLogo').on('click',function(){
      $(location).attr('href','./kamill.html')
    })
    $('.frudiaLogo').on('click',function(){
      $(location).attr('href','./frudia.html')
    })
    $('.onhopeLogo').on('click',function(){
      $(location).attr('href','./onhope.html')
    })
    $('.duftanddoftLogo').on('click',function(){
      $(location).attr('href','./duftanddoft.html')
    })
  }