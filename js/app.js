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

//Validacion de Formulario

const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const direccion = document.getElementById("direccion").value;
  const ciudad = document.getElementById("ciudad").value;
  const codigoPostal = document.getElementById("codigoPostal").value;
  const email = document.getElementById("email").value;
  const generos = document.getElementsByName('genero');

  const errorNombre = document.getElementById("errorNombre");
  const errorApellido = document.getElementById("errorApellido");
  const errorDireccion = document.getElementById("errorDireccion");
  const errorCiudad = document.getElementById("errorCiudad");
  const errorCodigoPostal = document.getElementById("errorCodigoPostal");
  const errorEmail = document.getElementById("errorEmail");
  const errorGeneros = document.getElementById("errorGenero");

  errorNombre.innerText = "";
  errorApellido.innerText = "";
  errorDireccion.innerText = "";
  errorCiudad.innerText = "";
  errorCodigoPostal.innerText = "";
  errorEmail.innerText = "";
  errorGeneros.innerText = "";


  if(!isValid(nombre)){
    e.preventDefault();
    errorNombre.innerText = "Ingrese Nombre!";
  }
  if(!isValid(apellido)){
    e.preventDefault();
    errorApellido.innerText = "Ingrese Apellido!";
  }
  if(!isValid(direccion)){
    e.preventDefault();
    errorDireccion.innerText = "Ingrese direccion!";
  }
  if(!isValid(ciudad)){
    e.preventDefault();
    errorCiudad.innerText = "Ingrese ciudad!";
  }
  if(!isValid(codigoPostal)){
    e.preventDefault();
    errorCodigoPostal.innerText = "Ingrese codigo Postal!";
  }
  if(!isValid(email)){
    e.preventDefault();
    errorEmail.innerText = "Ingrese correo electrónico!";
  }else if(!validarEmail(email)){
    e.preventDefault();
    errorEmail.innerText = "Ingrese dirección válida de correo electrónico!";
  }

  if(!((generos[0].checked) || (generos[1].checked) || (generos[2].checked))){   
    e.preventDefault();
    errorGeneros.innerText = "Seleccione una opción!";
  }

  errorNombre.style.color = "#e5be01";
  errorApellido.style.color = "#e5be01";
  errorDireccion.style.color = "#e5be01";
  errorCiudad.style.color = "#e5be01";
  errorCodigoPostal.style.color = "#e5be01";
  errorEmail.style.color = "#e5be01";
  errorGeneros.style.color = "#e5be01";

});

function isValid(element) {
  return element !== '' && element !== null;
}

function validarEmail( email ) {
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if ( !expr.test(email) ){
    return 0;
  }else {return 1;}
}
