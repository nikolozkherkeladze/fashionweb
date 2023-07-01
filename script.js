let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}

document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-4').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-4').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-5').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-5').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-6').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-6').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-7').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-7').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-9').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-9').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-10').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-10').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-11').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-11').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-12').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-12').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-13').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-13').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-14').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-14').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-15').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-15').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-16').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-16').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-17').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-17').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-18').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-18').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-19').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-19').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-20').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-20').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-21').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-21').src = images.getAttribute('src');
    }
});



setInterval(function(){
    countDown()
},1000);

var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


