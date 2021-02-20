//loader

function loadpage(){
  setTimeout(function(){
    $('.loader').fadeToggle();
    $('.page-content').css('display','block');
},2000);
}
loadpage()


// toggle menu script
$('.menu-btn').click(function(){
   $('.info-video').toggleClass('video-inactive');
    $('.navbar .menu').toggleClass('active');
    $('.nav-wrapper').toggleClass('nav-active');
    $('.menu-btn i').toggleClass('nav-active');
    $('.menu-btn i').toggleClass('active');
});



function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//pause video on scroll away
let pauseAtThisHeight = 200
$(document).scroll(function() {
  //hide download button at bottom
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
   $('.download-app').css('display','none')
  }else{
    $('.download-app').css('display','block')
  }
  
  if(currentRoute=='.about-us'){
    if ($(document).scrollTop()> pauseAtThisHeight) {
      $('.info-video').trigger('pause');
    } else {
      $('.info-video').trigger('play');

    }
  }
})

//reduce opacity of video on scroll down
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
      $('.info-video').css({
      opacity: function() {
          var elementHeight = $(this).height(),
          opacity = ((elementHeight - scrollTop*2) / elementHeight);
          return opacity;
      }
  });
});

//contact form submission
document.querySelector('.contact-form').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();

  let name = document.querySelector('.name').value;
  let email = document.querySelector('.email').value;
  let message = document.querySelector('.message').value;

  document.querySelector('.name').value='';
  document.querySelector('.email').value='';
  document.querySelector('.message').value='';

  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'sakahapa@gmail.com',
    Password: 'hztyphmuwyfkgfyc',
    To: 'support@sakahapa.com',
    From: 'sakahapa@gmail.com',
    Subject: `${name} has contacted us from sakahapa website`,
    Body: `Name:${name} <br> Email: ${email}<br>  ${message}`,

  }).then((message)=>showAlert())
}

//show message sent alert
function showAlert(){
  $('.alert').removeClass('mail-not-sent')
setTimeout(function(){$('.alert').addClass('mail-not-sent')  }, 5000);
}

//get the current year for copyright mark
var date = new Date();
var year = date.getFullYear();
document.getElementById('year').innerHTML=year;