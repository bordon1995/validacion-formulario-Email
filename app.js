//variables
const email=document.querySelector('#email');
const asunto=document.querySelector('#asunto');
const mensaje=document.querySelector('#mensaje');
const btnEnviar=document.querySelector('#enviar');
const bandera=document.querySelector('.banderaa');
const crearElementoError=document.querySelector('#mostrarerror');
const exprecionCorreo=/^([^a-zA-Z0-9]+)?([a-zA-Z0-9]+)([^a-zA-Z0-9]+)?([a-zA-Z0-9]+)?(\@)+([a-zA-Z0-9])+([.com])+([.ar]+)?$/;

//eventos
eventListeners();
function eventListeners(){
  document.addEventListener('DOMContentLoaded', iniciarApp);

  email.addEventListener('blur', validar);
  asunto.addEventListener('blur', validar);
  mensaje.addEventListener('blur', validar);

}


//funciones
function iniciarApp(){
  btnEnviar.classList.add('opaque');
  btnEnviar.disabled=true;
}

function validar(e){
  
  if(e.target.value.length > 0){
    e.target.classList.remove('validacion');
    e.target.classList.add('validacion_true');
    eliminarError();
    if(e.target.type === 'email'){
      if(exprecionCorreo.test(e.target.value)){
        e.target.classList.add('validacion_true');
        e.target.classList.remove('validacion');
        eliminarErrorLabel();
     }else{
        e.target.classList.remove('validacion_true');
        e.target.classList.add('validacion');
        if(!document.querySelector('.parrafo')){
          labelError('Correo no Valido');
        }
     }
   }
  } else {
    e.target.classList.add('validacion');
    e.target.classList.remove('validacion_true');
    mostrarError();
  }

  validarBtn();
}

function mostrarError(){
  const htmlError=document.createElement('p');
  htmlError.textContent='Todos los Campos son Obligatorios';
  htmlError.classList.add('validacion', 'mostrarError','error');
  const bandera=document.querySelectorAll('.error');
  if(bandera.length === 0){
      crearElementoError.appendChild(htmlError);
  }
}

function eliminarError(){
  if(document.querySelector('.error')){
      document.querySelector('.error').remove();
    }
}

function labelError(mensaje){
  const crearhtml=document.createElement('p');
  crearhtml.classList.add('parrafo');
  crearhtml.textContent=mensaje;
  document.getElementById('usuario').appendChild(crearhtml);
}

function validarBtn(){
  if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' && exprecionCorreo.test(email.value)){
    btnEnviar.disabled=false;
    btnEnviar.classList.remove('opaque');
  }else{
    btnEnviar.disabled=true;
    btnEnviar.classList.add('opaque');
  }
}

function eliminarErrorLabel(){
  if(document.querySelector('.parrafo')){
    document.querySelector('.parrafo').remove();
  }
}