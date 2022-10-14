let slideIndex = 1;
document.onload = showSlides(slideIndex);

function hov(x) {
    document.getElementById(x).style.display = "none";
}
function hovOut(x) {
    document.getElementById(x).style.display = "block";
}


function plusSlides(n) {
    let nt;
    let slides = document.getElementsByClassName("mini");
    if (n < 0 && slideIndex == 1) {
        slideIndex = slides.length
        showSlides(slideIndex);
    }
    else if (n > 0 && slideIndex == slides.length) {
        slideIndex = 1;
        showSlides(slideIndex);
    }

    else
        showSlides(slideIndex += n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mini");

    for (i = 1; i <= slides.length; i++) {
        if (i == n) {
            slides[i - 1].style.display = "flex";
            console.log(i, slideIndex)
        }


        else
            slides[i - 1].style.display = "none";

    }



}



function revSl(n) {
    let nt;
    let slides = document.getElementsByClassName("review");
    if (n < 0 && slideIndex == 1) {
        slideIndex = slides.length
        revSlides(slideIndex,n);
    }
    else if (n > 0 && slideIndex == slides.length) {
        slideIndex = 1;
        revSlides(slideIndex,n);
    }

    else
        revSlides(slideIndex += n,n);
}


function revSlides(n,h) {
    let i;
    let slides = document.getElementsByClassName("review");

    for (i = 1; i <= slides.length; i++) {
        if (i != n)
        {
            slides[i - 1].style.display = "none";
            
        }


        else
        {
            slides[i - 1].style.display = "flex";
            if (h > 0) 
            {
                slides[i - 1].style.animationName = "ceaseR"
                
            }
            else
                slides[i - 1].style.animationName = "ceaseL"
        }

    }


}

