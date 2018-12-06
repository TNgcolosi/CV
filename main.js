function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "inline";
  }
}

function showMore() {
  document.getElementById('link').parentElemnet.removeChild('link');
  document.getElementById('readMore').style.display = "block";
}


// $(document).ready(function(){
//     $('.header').height($(window).height());
//    })

//    $(".navbar a").click(function(){
//     $("body,html").animate({
//      scrollTop:$("#" + $(this).data('value')).offset().top
//     },1000)
    
//    })

//    $(document).ready(function () {
//     $(".title-contact, .contact-email").fadeIn("slow");
// });