(function() {
    var cmdaCarrousels = document.querySelectorAll("section");

    for (var i=0;i<cmdaCarrousels.length;i++) {
        var cmdaCarrouselItems = cmdaCarrousels[i].querySelectorAll("li");
        if (cmdaCarrouselItems.length > 0) {
            var bolletjes = document.createElement("ul");
            bolletjes.classList.add("cmda-bolletjes");
            for (var j=0;j<cmdaCarrouselItems.length;j++) {
                var bolletje = document.createElement("li");
                bolletjes.appendChild(bolletje);
            }
            cmdaCarrousels[i].appendChild(bolletjes);
            cmdaIniActiveBolletje(cmdaCarrousels[i]);
        }
    }
})();

function cmdaIniActiveBolletje(deCarrousel) {
    var carrouselContainer = deCarrousel.querySelector("ul:first-of-type")
    cmdaSetNummer(carrouselContainer);
    carrouselContainer.addEventListener("scroll", function(event){
        cmdaSetNummer(this);
    });
}

function cmdaSetNummer(carrouselContainer) {
    var carrouselWidth = carrouselContainer.offsetWidth;
    var carrouselItems = carrouselContainer.querySelectorAll("li");
    var carrouselItemFirstWidth = carrouselItems[0].offsetWidth;
    var carrouselItemNormalWidth = carrouselItems[1].offsetWidth;
    var carrouselItemPaddingRightPX = window.getComputedStyle(carrouselItems[0]).getPropertyValue("padding-right");
    var carrouselItemPaddingRight = parseInt((carrouselItemPaddingRightPX.substring(0, carrouselItemPaddingRightPX.length - 2)),10);
    var scrollPos = carrouselContainer.scrollLeft;

    var hetNummer = 0;
    if ( scrollPos < ( carrouselItemFirstWidth - (carrouselItemPaddingRight / 2) - (carrouselWidth / 2)  )) {
        // hetNummer = 0;
    } else {
        var t = 1;
        while (hetNummer == 0) {
            if ( scrollPos < (  ( carrouselItemFirstWidth - (carrouselItemPaddingRight / 2) - (carrouselWidth / 2)  )  + (t * carrouselItemNormalWidth) )) {
                hetNummer = t;
            }
            t++
        }
    }

    var bolletjes = carrouselContainer.parentElement.querySelectorAll(".cmda-bolletjes li");
    for(var b=0; b<bolletjes.length; b++) {
        bolletjes[b].classList.remove("active");
    }
    bolletjes[hetNummer].classList.add("active");
}
