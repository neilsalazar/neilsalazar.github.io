
$(document).ready(function () {
        if (!Modernizr.touch) {
                $("#home").hover(
                  function () {
                      $('body').css("background", "#c44500");
                      $('#home').css("background", "#c44500");
                      $('#home').css("color", "#fff");
                  },
                  function () {
                      $('body').css("background", "#c44500");
                      $('#home').css("background-color", "rgba(255, 255, 255, 0.0)");
                      $('#home').css("color", "#000");
                  }
                );

                $("#folio").hover(
                  function () {
                      $('body').css("background", "#000");
                      $('#folio').css("background", "#000");
                      $('#folio').css("color", "#fff");         
                  },
                  function () {
                   
                      $('#folio').css("background", "rgba(255, 255, 255, 0.0)");
                      $('#folio').css("color", "#000");
                  }
                );

                $("#about").hover(
                  function () {
                      $('body').css("background", "#392200");
                      $('#about').css("background", "#392200");
                      $('#about').css("color", "#fff");
                  }, 
                  function () {
                
                      $('#about').css("background", "rgba(255, 255, 255, 0.0)");
                      $('#about').css("color", "#000");
                  }
                );

                $("#contact").hover(
                  function () {
                      $('body').css("background", "#00c498");
                      $('#contact').css("background", "#00c498");
                      $('#contact').css("color", "#fff");
                  }, 
                  function () {
              
                      $('#contact').css("background", "rgba(255, 255, 255, 0.0)");
                      $('#contact').css("color", "#000");
                  }
                );
};//modernizr
/*************************ON CLICK SCRIPT***************************/
                $("#home").click(
                  function() {
                      $('#imagebackground').css("background-image", "url(/images/miyajima.png)");
                      $('#imagebackground').css("background-position", "top");
                      $('#imagebackground').css("background-size", "100%");
                      $('#imagebackground').css("bottom", "0");
                      $('#imagebackground').css("margin-top", "0");
                  }
                );
                $("#folio").click(
                  function() {
                      $('#imagebackground').css("background-image", "url(/images/develop.png)");
                      $('#imagebackground').css("background-size", "100%");
                      $('#imagebackground').css("background-position", "bottom");
                      $('#imagebackground').css("bottom", "124rem");
                      $('#imagebackground').css("margin-top", "63.3rem");
                  }
                );
                $("#about").click(
                  function() {
                      $('#imagebackground').css("background-image", "url(/images/fambot.png)");
                      $('#imagebackground').css("background-position", "bottom");
                      $('#imagebackground').css("background-size", "100%");
                      $('#imagebackground').css("bottom", "48.5rem");
    
                  }
                );
});//document ready

