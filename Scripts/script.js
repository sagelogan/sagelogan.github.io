/*var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    document.location.href ="/mobile";
}
 var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 1500;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };
  */



//array of all my project images
var images = ["./Assets/Pictures/lyfehere.png", "./Assets/Pictures/collegeplus.png", "./Assets/Pictures/TheRangeSite.png","/pictures/LasCrucesNMGrid/Events.png", "/pictures/LasCrucesNMGrid/Outdoor-Activities.png", "/pictures/LasCrucesNMGrid/Music.png", "/pictures/LasCrucesNMGrid/Clubs-Groups.png", "/pictures/LasCrucesNMGrid/Museums.png", "/pictures/LasCrucesNMGrid/Downtown.png", "/pictures/LasCrucesNMGrid/Movies.png", "/pictures/LasCrucesNMGrid/Lodging.png", "/pictures/LasCrucesNMGrid/Art.png"];

function onLoad(){


    var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);

    $("#download-resume").click(function(){
        document.location.href = "./Assets/Resume.pdf"
    });

   
    $("#shop2").mouseover(largeIMG1);
    $("#shops3").mouseover(largeIMG1);
    $("#shop2").mouseout(function(){
            $("#shops").attr("src", images[0]);
    });
    $("#shop2").click(function(){
       window.location.href = "https://lyfehere.com/LasCruces";
       console.log("test")
    });
    $("#deals2").mouseover(largeIMG2);
    $("#deals3").mouseover(largeIMG2);
    $("#deals2").mouseout(function(){
            $("#deals").attr("src", images[1]);

    });
    $("#deals2").click(function(){
        window.location.href ="https://collegeplus.us";
    });
    $("#food2").mouseover(largeIMG3);
    $("#food3").mouseover(largeIMG3);
    $("#food2").mouseout(function(){
            $("#food").attr("src", images[2]);

    });
    $("#food2").click(function(){
        window.location.href ="https://therangelc.com";
        console.log("test")
    });
    $("#events2").mouseover(largeIMG4);
    $("#events3").mouseover(largeIMG4);
    $("#events2").mouseout(function(){
            $("#events").attr("src", images[3]);

    });
    $("#events2").click(function(){
        document.location.href ="/LasCrucesEvents";
    });
    $("#outdoors2").mouseover(largeIMG5);
    $("#outdoors3").mouseover(largeIMG5);
    $("#outdoors2").mouseout(function(){
            $("#outdoors").attr("src", images[4]);

    });
    $("#outdoors2").click(function(){
        document.location.href ="/LasCrucescategorydirectory#OutdoorDirectory";
    });
    $("#music2").mouseover(largeIMG6);
    $("#music3").mouseover(largeIMG6);
    $("#music2").mouseout(function(){
            $("#music").attr("src", images[5]);

    });
    $("#music2").click(function(){
        document.location.href ="/LasCrucescategorydirectory#MusicDirectory";
    });
    $("#clubs2").mouseover(largeIMG7);
    $("#clubs3").mouseover(largeIMG7);
    $("#clubs2").mouseout(function(){
            $("#clubs").attr("src", images[6]);

    });
    $("#clubss2").click(function(){
        document.location.href ="/LasCrucescategorydirectory#ClubsDirectory";
    });
    $("#museums2").mouseover(largeIMG8);
    $("#museums3").mouseover(largeIMG8);
    $("#museums2").mouseout(function(){
            $("#museums").attr("src", images[7]);

    });
    $("#museums2").click(function(){
        document.location.href ="/LasCrucescategorydirectory#MuseumsDirectory";
    });
    $("#downtown2").mouseover(largeIMG9);
    $("#downtown3").mouseover(largeIMG9);
    $("#downtown2").mouseout(function(){
            $("#downtown").attr("src", images[8]);

    });
    $("#downtown2").click(function(){
        document.location.href ="/LasCrucescategorydirectory#DowntownDirectory";
    });
    $("#movies2").mouseover(largeIMG10);
    $("#movies3").mouseover(largeIMG10);
    $("#movies2").mouseout(function(){
            $("#movies").attr("src", images[9]);

    });
    $("#movies2").click(function(){
        document.location.href ="/LasCrucescategorydirectory#MoviesDirectory";
    });
    $("#lodging2").mouseover(largeIMG11);
    $("#lodging3").mouseover(largeIMG11);
    $("#lodging2").mouseout(function(){
            $("#lodging").attr("src", images[10]);

    });
    $("#lodging2").click(function(){
        document.location.href ="/LasCrucescategorydirectory#LodgingDirectory";
    });
    $("#art2").mouseover(largeIMG12);
    $("#art3").mouseover(largeIMG12);
    $("#art2").mouseout(function(){
            $("#art").attr("src", images[11]);

    });
    $("#art2").click(function(){
        document.location.href ="/LasCrucescategorydirectory#ArtDirectory";
    });
}

function largeIMG1(){
    $("#shops").attr("src", "./Assets/Pictures/lyfehere.png");
}
function largeIMG2(){
    $("#deals").attr("src", "./Assets/Pictures/collegeplus.png" );
}
function largeIMG3(){
    $("#food").attr("src", "./Assets/Pictures/TheRangeSite.png");
}
function largeIMG4(){
    $("#events").attr("src", "/pictures/LasCrucesNMGrid/Events-Blur.png");
}
function largeIMG5(){
    $("#outdoors").attr("src", "/pictures/LasCrucesNMGrid/Outdoor-Activities-Blur.png");
}
function largeIMG6(){
    $("#music").attr("src", "/pictures/LasCrucesNMGrid/Music-Blur.png");
}

function largeIMG7(){
    $("#clubs").attr("src", "/pictures/LasCrucesNMGrid/Clubs-Groups-Blur.png");
}
function largeIMG8(){
    $("#museums").attr("src", "/pictures/LasCrucesNMGrid/Museums-Blur.png");
}
function largeIMG9(){
    $("#downtown").attr("src", "/pictures/LasCrucesNMGrid/Downtown-Blur.png");
}
function largeIMG10(){
    $("#movies").attr("src", "/pictures/LasCrucesNMGrid/Movies-Blur.png");
}
function largeIMG11(){
    $("#lodging").attr("src", "/pictures/LasCrucesNMGrid/Lodging-Blur.png");
}
function largeIMG12(){
    $("#art").attr("src", "/pictures/LasCrucesNMGrid/Art-Blur.png");

}


window.onload = onLoad;
