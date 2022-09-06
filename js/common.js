    function navWeb(){
        $('nav>div>ul>li:nth-child(4)').on('click',function(){
            let brandName = $(this).attr('name');
            // console.log(brandName)
            if(brandName == 'on'){
                $('#headerWrap').css('height','500px');
                $('nav>div>ul>li>div').show();
                $('nav .close').show();
                $(this).attr('name','off');
                $('nav>div>ul>li:nth-child(4)>a').css({color:'#6F9475',fontWeight:'bolder'})
            }
            else{
                $('#headerWrap').css('height','194px');
                $('nav>div>ul>li>div').hide();
                $('nav .close').hide();
                $(this).attr('name','on');
                $('nav>div>ul>li:nth-child(4)>a').css({color:'#595959',fontWeight:'normal'})
            }
    // close
            $('nav .close').on('click',function(){
            $('#headerWrap').css('height','194px');
            $('nav>div>ul>li>div').hide();
            $('nav .close').hide();
            $('nav>div>ul>li:nth-child(4)').attr('name','on');
            $('nav>div>ul>li:nth-child(4)>a').css({color:'#595959',fontWeight:'normal'})
        });
        })
    }

    function navTablet(){
        $('.btn').on('click',function(e){
            $('nav').css('right','0px');
            $('nav .close').css('display','block')
        });
        // 타블렛
        $('nav .close').on('click',function(e){
            $('nav').css('right','-350px');
            $('nav .close').css('display','none')
        });
    }

    function navMobile(){
        $('.btn').on('click',function(e){
            $('nav').css('right','0px');
            $('nav .close').css('display','block')
        });
        $('nav .close').on('click',function(e){
            $('nav').css('right','-100vw');
            $('nav .close').css('display','none')
        });
    }

    function navTM(){
        $('#memberMenu').on('click',function(e){
            $('nav .close').show();
            let memberMenuName = $(this).attr('name');
                if(memberMenuName == 'on'){
                    $('nav #memberMenu>ul').slideDown(300);
                    $('nav #brandMenu>ul').slideUp(300);
                    $('nav #brandMenu').attr('name','on');
                    $(this).attr('name','off');
                }
                else{
                    $('nav #memberMenu>ul').slideUp(300);
                    $(this).attr('name','on');
                }
        });
        $('#brandMenu').on('click',function(e){
            $('nav .close').show();
            let brandMenuName = $(this).attr('name');
                if(brandMenuName == 'on'){
                    $('nav #brandMenu>ul').slideDown(300);
                    $('nav #memberMenu>ul').slideUp(300);
                    $('nav #memberMenu').attr('name','on');
                    $(this).attr('name','off');
                }
                else{
                    $('nav #brandMenu>ul').slideUp(300);
                    $(this).attr('name','on');
                }
        });
    }

    function gallery(){
        //준비하기
        let i = 1;
        let galleryWidth = $('#box01>ul>li').width();
         //prev
        $('.prev').on('click',function(e){
            i++;
            if(i>=4){
            i=1;
            }
        $('#box01>ul').append('<li></li>')
        $('#box01>ul>li:last').css(
            'background-image','url(../img/intro0'+ i +'.png)')
        $('#box01>ul').stop().animate({marginLeft:'-='+galleryWidth+'px'},500,function(){
            $('#box01>ul>li:first').remove();
            $('#box01>ul').css('margin-left','0')
        }) 
        }
        )
        //next
        $('.next').on('click',function(e){
            i--;
            if(i<=0){
            i=3;
            }
        $('#box01>ul').css('margin-left','-'+galleryWidth+'px').prepend('<li></li>')

        $('#box01>ul>li:first').css('background-image','url(../img/intro0'+ i +'.png)')
        $('#box01>ul').stop().animate({marginLeft:'+='+galleryWidth+'px'},500,function(){
            $('#box01>ul>li:last').remove();
            $('#box01>ul').css('margin-left','0')
        }) 
        })
        //picnav
        $('#box01>ol>li').on('click',function(e){
            let abc = $(this).attr('data-num');
            // console.log(abc)
            // console.log(i)
          if(abc != i){
            $('#box01>ul').append('<li></li>');
            $('#box01>ul>li:last').css('background-image','url(../img/intro0'+ abc +'.png)')
            $('#box01>ul').stop().animate({marginLeft:'-='+galleryWidth+'px'},500,function(){
            $('#box01>ul>li:first').remove();
            $('#box01>ul').css('margin-left','0')
            i = abc;
            })             
          }
        })
    }

    function modalWeb(){
        //준비하기
        $('body').append('<div id="back"></div>');
    // login
        $('header ul>li:first').on('click',function(e){
            $('#login').show();
            $('#back').show();
            
            $('#login .close').on('click',function(e){
                $('#login').hide();
                $('#back').hide();
            })
        });
    // join
        $('header ul>li:nth-child(2)').on('click',function(e){
            $('#join').show();
            $('#back').show();
            
            $('#join .close').on('click',function(e){
                $('#join').hide();
                $('#back').hide();
            })
        });

    // interest
        $('header ul>li:nth-child(3)').on('click',function(e){
            $('#interest').show();
            $('#back').show();
            
            $('#interest .close').on('click',function(e){
                $('#interest').hide();
                $('#back').hide();
            })
        });
    // basket
        $('header ul>li:last').on('click',function(e){
            $('#basket').show();
            $('#back').show();
            
            $('#basket .close').on('click',function(e){
                $('#basket').hide();
                $('#back').hide();
            })
        });
    }

    function modalTM(){
        //준비하기
        $('body').append('<div id="back"></div>');
        // login
        $('.loginM').on('click',function(e){
            $('#login').show();
            $('#back').show();
                            
            $('#login .close').on('click',function(e){
                $('#login').hide();
                $('#back').hide();
            })
        });
        // join
            $('.joinM').on('click',function(e){
                $('#join').show();
                $('#back').show();
                            
                $('#join .close').on('click',function(e){
                    $('#join').hide();
                    $('#back').hide();
                })
            });
                
            // interest
                $('.interestM').on('click',function(e){
                    $('#interest').show();
                    $('#back').show();
                            
                    $('#interest .close').on('click',function(e){
                        $('#interest').hide();
                        $('#back').hide();
                    })
                });
            // basket
                $('.basketM').on('click',function(e){
                    $('#basket').show();
                    $('#back').show();
                            
                    $('#basket .close').on('click',function(e){
                        $('#basket').hide();
                        $('#back').hide();
                    })
                });
    }



    function view(){
        //준비하기
        let viewAllWidth = $('#view>section>div').width()/12;
        // console.log(viewAllWidth);
        $('#view>section>div').css('margin-left','-'+viewAllWidth+'px');
    // 움직임
        function action(){
            $('#view>section>div').stop().animate({marginLeft:'-='+viewAllWidth+'px'},1000,function(){
                $('#view>section>div>figure:first').appendTo('#view>section>div');
                $('#view>section>div').css('margin-left','-'+viewAllWidth+'px');
            })
    }
    // 타이머
        function timer(){
            str = setInterval(action,3000)
        }
        function stop(){
            clearInterval(str)
        }
        timer();

    // 마우스이벤트
        $('#view>section>div').each(function(){
            $(this).on('mouseover',function(e){
                stop()
            })
            $(this).on('mouseout',function(e){
                timer()
            })
        })
    }

    function resize(){
        $(window).on('resize',function(e){
            window.location.reload();
        });
    }
        
        