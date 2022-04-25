(function(){
    const list = document.querySelector('.menu-links');
    const menu = document.querySelector('.menu-hamburguer');

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 992){
            if(list.classList.contains('menu-links--show'))
                list.classList.remove('menu-links--show');
        }        
    });


    menu.addEventListener('click', ()=> list.classList.toggle('menu-links--show'))

})();

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}