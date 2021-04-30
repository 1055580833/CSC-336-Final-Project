(function () {
    "use strict";

    window.onload = function(){
        gallery();
        document.getElementById("submit").addEventListener("click", sub)

    
        
    }

    //Change the main image automatically
    function gallery(){
        let gallery = document.getElementById("imageGallery");
    //    Get the branch


        let start = true;
        let add = setInterval(function (){
            if(start) {
                let old = document.getElementById("mainPicture");
                old.parentNode.removeChild(old);

                //Randomly change the image
                let random = parseInt(Math.random() * 10);
                let img = document.createElement("img");
                img.id = "mainPicture"
                img.src = "img/" + random + ".jpeg";
                gallery.append(img);
            }else{
                clearInterval(add)
            }
        },4000)
    }

    //Subscribe button action
    function sub(){
        alert("Thank you for subscription!")
    }

})();

