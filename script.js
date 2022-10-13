let slideIndex = 1;
document.onload=showSlides(slideIndex);

function hov(x)
{
document.getElementById(x).style.display = "none";
}
function hovOut(x)
{
document.getElementById(x).style.display = "block";
}


function plusSlides(n) {
    let nt;
    let slides = document.getElementsByClassName("mini");
    if(n<0 && slideIndex==1)
    {
        showSlides(slides.length);
    }
    else if(n>0 && slideIndex==slides.length)
    {
        slideIndex=1;
        showSlides(slideIndex);
    }

    else
    showSlides(slideIndex += n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mini");

    for (i = 1; i <= slides.length; i++) 
     {
        if(i==n)
       slides[i-1].style.display = "flex";

       else
       slides[i-1].style.display = "none";  

     }
    
    






    // if (n > slides.length) 
    // {
    //     slideIndex = 1;
    // }    
    // if (n < 1) 
    // {
    //     slideIndex = slides.length;
    // }
    
    // for (i = 0; i < slides.length; i++) 
    // {
    //   slides[i].style.display = "none";
    // }
    
    // slides[slideIndex-1].style.display = "block";  
    
  }

  