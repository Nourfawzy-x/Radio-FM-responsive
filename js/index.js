$(document).ready(function(){
$('.carousel').flipster({
    style:"carousel",
    spacing:-0.3
  });
  ////////////////////////////////////////////////////////////
    $(".loader").fadeOut(1000,function(){
      $("#loading").fadeOut(500,function(){
        $("body").css("overflow","auto");
        $(".loader").remove();
      })
    })
    ////////////////////////////////////////////////////////
    $(".slider-img").slick({
      dots:true,
      arrows:false,
      autoplay:true,
      autoplaySpeed:2000,
      fade:true,
      fadeSpeed:1000
    })
    ////////////////////////////////////////////////
    let navbarOffset= $("#navbar2").offset().top;//navbar wa'fa la fen
    $(window).scroll(function(){
      let WindowScroll1=$(window).scrollTop(); //window scroll ad eh
     if(WindowScroll1>navbarOffset-600){
  $(".navbar1").css('display',"none");
  $("#btnUp").fadeIn(500)

     }
     else{
      $(".navbar1").css('display',"block");
      $("#btnUp").fadeOut(500)
     }
    
    })
    /////////////////////////////////////////////
  
    $(window).scroll(function(){
      let windowScroll2=$(window).scrollTop();
      if(windowScroll2>navbarOffset){
      $("#navbar2").addClass("fixed-top");
      
      }
      else{
        $("#navbar2").removeClass("fixed-top")
      }
    })
    //////////////////////////////////////////////////////////
    $('.nav-item.dropdown').hover(function(){
      $(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();
    }, function(){
      $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
    });
    $(".content").animate({right:"50px"},2000);
    $(".nav-link").click(function(){
      $(".nav-link").css("color","#c80913");
    })
    ////////////////////////////////////////////////////////////////////////
    var collectionOffset=$(".first-p").offset().top;
    $(window).scroll(function(){
      let windowScrol3=$(window).scrollTop();
      if(windowScrol3>collectionOffset-400){
        $(".collection .container h3").fadeIn(300,function(){
          $(".collection .container .second-p").show(500,function(){
            $(".collection .container .col-md-6").slideDown(1000);
          });
      
       })
  
      }
    }
  
    )
    var titleOffset=$("#feautred .title").offset().top;
   // console.log(titleOffset);
    $(window).scroll(function(){
      let WindowScroll4=$(window).scrollTop();
      if(WindowScroll4>=titleOffset-400){
        $("#feautred h3").slideDown(400)
      }
    })
    var featuresOffset=$(".feautres").offset().top;
    $(window).scroll(function(){
      let windowScrol5=$(window).scrollTop();
      if(windowScrol5>featuresOffset-500){
        $(".feautres h3").slideDown(500,function(){
          $(".feautres .titles").slideDown(500)
      
       })
  
      }
    }
  
    )
    var downloadOffset = $("#download").offset().top;

  $(window).scroll(function () {
    let windowScroll = $(window).scrollTop();

    // Adjust the offset value as needed
    if (windowScroll > downloadOffset-200) {
      // Fade in the left element from the left
      $("#download .col-md-8").animate({
        opacity: 1,
        left: 0
      }, 1000);

      // Fade in the right element from the right
      $("#download .col-md-3").animate({
        opacity: 1,
        right: 0
      }, 1000);
    }
  });
  var contactOffset = $("#contact-Us").offset().top;

  $(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > contactOffset+200) {
      // Fade in the left element from the left
      $("#contact-Us .container .row .text-start").animate({
        opacity: 1,
        left: 0
      }, 1000);
      $("#contact-Us .pic-second").animate({
        opacity: 1,
        bottom: 100
      }, 3000);
    }
  });
  /////////////////////////////////////////////
  $("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0},200)
  })
   
  })
  ///////////////////////////////////////////////
  var currentAudio = null;
  $(".audio-button").on("click", function() {
    var audioId = $(this).attr('audio-id');
    var audioElement = $("#" + audioId)[0];
    var icon = $(this).find(".musicIcon");
    if (currentAudio == audioElement) {
    if (audioElement.paused) {
    icon.removeClass("fa-play");
    icon.addClass("fa-pause");
    audioElement.play().catch(function(error) {
     console.log("Error occurred while trying to play the audio: ", error);
    });
    } else {
    audioElement.pause();
    icon.addClass("fa-play");
    icon.removeClass("fa-pause");
    }
    } else {
    if (currentAudio !== null && !currentAudio.paused) {
    currentAudio.pause();
    $(currentAudio).prev().find(".musicIcon").addClass("fa-play");
    $(currentAudio).prev().find(".musicIcon").removeClass("fa-pause");
    }
    currentAudio = audioElement;
    icon.removeClass("fa-play");
    icon.addClass("fa-pause");
    currentAudio.play().catch(function(error) {
    console.log("Error occurred while trying to play the audio: ", error);
    });
    }
   });
 
 
  
  

  
  
  