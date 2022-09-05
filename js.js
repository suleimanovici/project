
// Zoom in out pe trotineta
function zoomintrotineta() {
         var x = document.getElementById("trotineta");
         x.style.transform ='scale(1.3,1.3)';
         x.style.transitionDuration = '0.2s';
     }
function zoomouttrotineta() {
       var x = document.getElementById("trotineta");
         x.style.transform ='scale(1,1)';
         x.style.transitionDuration = '0.2s';
     }

 
// Zoom in out pe bicicleta 
function zoominbicicleta() {
        var x = document.getElementById("bicicleta");
        x.style.transform ='scale(1.3,1.3)';
        x.style.transitionDuration = '0.2s';
    }
function zoomoutbicicleta() {
      var x = document.getElementById("bicicleta");
        x.style.transform ='scale(1,1)';
        x.style.transitionDuration = '0.2s';
    }

// Zoom in out pe scuter
function zoominscuter() {
    var x = document.getElementById("scuter");
    x.style.transform ='scale(1.3,1.3)';
    x.style.transitionDuration = '0.2s';
}
function zoomoutscuter() {
  var x = document.getElementById("scuter");
    x.style.transform ='scale(1,1)';
    x.style.transitionDuration = '0.2s';
}

// Zoom in out pe motocicleta
function zoominmoto() {
        var x = document.getElementById("motocicleta");
        x.style.transform ='scale(1.3,1.3)';
        x.style.transitionDuration = '0.2s';
    }
function zoomoutmoto() {
      var x = document.getElementById("motocicleta");
        x.style.transform ='scale(1,1)';
        x.style.transitionDuration = '0.2s';
    }

       // START SLIDE Electric Scooters ES1
       function plusSlidesES1(n) {
         showSlidesES1(slideIndexES1 += n);
       }
       function currentSlideES1(n) {
         showSlidesES1(slideIndexES1 = n);
       }
       function showSlidesES1(n) {
         let i;
         let slides = document.getElementsByClassName("mySlidesES1");
         let dots = document.getElementsByClassName("dotES1");
         if (n > slides.length) {slideIndexES1 = 1}    
         if (n < 1) {slideIndexES1 = slides.length}
         for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
         }
         for (i = 0; i < dots.length; i++) {
           dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[slideIndexES1-1].style.display = "block";  
         dots[slideIndexES1-1].className += " active";
       }
       // STOP SLIDE Electric Scooters ES


      // START SLIDE Electric Bikes ES2
      function plusSlidesES2(n) {
        showSlidesES2(slideIndexES2 += n);
      }
      function currentSlideES2(n) {
        showSlidesES2(slideIndexES2 = n);
      }
      function showSlidesES2(n) {
        let i;
        let slides = document.getElementsByClassName("mySlidesES2");
        let dots = document.getElementsByClassName("dotES2");
        if (n > slides.length) {slideIndexES2 = 1}    
        if (n < 1) {slideIndexES2 = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndexES2-1].style.display = "block";  
        dots[slideIndexES2-1].className += " active";
      }
      // STOP SLIDE Electric Bikes ES2

