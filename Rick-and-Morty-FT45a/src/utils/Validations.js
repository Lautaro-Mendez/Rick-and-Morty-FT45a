
export default function Validations(input) {
    const errors={};
    const regexEmail=/\S+@\S+\.\S+/;
    const regexPassword= new RegExp("[0-9]");
    
    if(!input.email.length) errors.email = "Ingrese su email";
    else {
        if(!regexEmail.test(input.email)) errors.email = "Ingrese un email valido";
        if(input.email.length > 35) errors.email = "Menor a 35 caracteres"
    }
    
    if(!input.password.length) errors.password = "Ingrese su password";
    else{
        if(!regexPassword.test(input.password)) errors.password = "Debe tener al menos un numero";
        if(input.password.length < 6 || input.password.length > 10) errors.password = "Debe tener entre 6 y 10 caracteres";
    }
    
    return(errors)
}