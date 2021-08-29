const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const dni = document.getElementById("dni");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const boton = document.getElementById("enviar");
const resultado = document.querySelector(".resultado");
const resultadoPrecio = document.querySelector(".precio-seguro");
const select = document.querySelector(".opcion-plan");

const mostrar = () => {
    let indice = select.selectedIndex;
    if(indice === -1) return;
    if(indice == 1){
        resultadoPrecio.innerHTML = "Este plan cuesta $500";
    }else if(indice == 2){
        resultadoPrecio.innerHTML = "Este plan cuesta $1000";
    }else if(indice == 3){
        resultadoPrecio.innerHTML = "Este plan cuesta $1500";
    }else if(indice == 0){
        resultadoPrecio.innerHTML = "Elija un plan";  
        }
    }

select.addEventListener("change", mostrar);

const validarCampos = ()=>{
    let indice = select.selectedIndex;
    let dniEntero = parseInt(dni.value);
    let telefonoEntero = parseInt(telefono.value);
    let error = [];
    if(nombre.value.length < 1||
        apellido.value.length < 1||
        dni.value.length < 1||
        telefono.value.length < 1){
        error[0] = true;
        error[1] = "Complete todos los datos";
        return error;
    }else if (nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede tener mas de 40 caracteres";
        return error;
    }else if (apellido.value.length > 40){
        error[0] = true;
        error[1] = "El apellido no puede tener mas de 40 caracteres";
        return error;
    }else if(!Number.isInteger(dniEntero)){
        error[0] = true;
        error[1] = "El dni no es valido";
        return error;
    } 
    else if (email.value.length < 5 ||
                email.value.length > 40 ||
                email.value.indexOf("@") == -1 ||
                email.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El mail es invalido";
        return error;
    }else if (!Number.isInteger(telefonoEntero)){
        error[0] = true;
        error[1] = "El telefono es invalido";
        return error;
    }else if (telefono.value.length > 25){
        error[0] = true;
        error[1] = "El telefono es invalido";
        return error;
    }else if(indice == 0 || indice == ""){
            error[0] = true;
            error[1] = "Elija un plan";
            return error
    }
    error[0] = false;
    return error;
}

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("text-danger");
        resultado.classList.remove("text-success");
    }else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("text-success");
        resultado.classList.remove("text-danger");
    }
})
