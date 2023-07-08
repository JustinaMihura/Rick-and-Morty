

export default function validation (userData) {
    var errors = {}

    if(!userData.email) { 
        errors.email = "Debes agregar un email"
    }
     else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){ 
        errors.email = "Tiene que ser un email válido"
    }
     else if(userData.email.length > 35) {
        errors.email = "Tu email no debe de ser mayor a 35 caracteres"
    };
    if(!userData.password) {
        errors.password = "Debes ingresar una contraseña"
    }
     else if(!/^(?=.[A-Za-z0-9])(?=.\d)[A-Za-z\d]{8,20}$/.test(userData.password)) {
        errors.password = "Tu contraseña debe de tener al menos 8 a 10 caracteres y un número"
    }
    return errors
};