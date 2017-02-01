// This is where it all goes :)

function changeBG(path) {
  $(document.body).css({"background-image": "url(images/"+path+".jpg)"})
}
function resetBG() {
  $(document.body).css({"background-image": "none"})
}

$(document).ready(function($){

  var isChromium = window.chrome,
    winNav = window.navigator,
    vendorName = winNav.vendor,
    isOpera = winNav.userAgent.indexOf("OPR") > -1,
    isIEedge = winNav.userAgent.indexOf("Edge") > -1,
    isIOSChrome = winNav.userAgent.match("CriOS");
    embed = $(".embed-container");

    if(isIOSChrome){
   // is Google Chrome on IOS
} else if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
   // is Google Chrome
   embed.css({"filter": "brightness(105%)"});
} else {
   // not Google Chrome
}

//  FADE IN TOP
var fader = $("#content-fade");
var projHead = $(".intro")
var abtBG = $(".about-bg")

fader.css({ 'opacity': 0});
if (fader.height()) {
  $(window).on('scroll', function () {
      var scrollTop = $(document.body).scrollTop();
      var value = $(fader).offset().top-$(window).height()*.25;
      var calc = scrollTop/value;

      console.log(scrollTop)

      fader.css({ 'opacity': calc });
      projHead.css({ 'opacity': 1-calc});

      if (abtBG.height()) {
        abtBG.css({'opacity': 1-calc, 'background-position': scrollTop*.15});
      }

      if ( calc > '1' ) {
        fader.css({ 'opacity': 1 });
      } else if ( calc < '0' ) {
        fader.css({ 'opacity': 0 });
      }
  });
}
  $(window).on('scroll', function () {
    var scrollTop = $(document.body).scrollTop();
    projHead.css({ 'transform': 'translate3d(0, -'+scrollTop*.5+'px, 0)'});
  });
});
