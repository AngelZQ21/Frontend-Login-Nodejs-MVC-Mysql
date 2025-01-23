export default class Validaciones {

    static ValidarEmail(email) {
        
        if (email.lenght >= 20) {
            console.error('No se puede registrar un usuario con mas de 20 caracteres');
            return false
        }

        if (!typeof email === 'string') {
            console.error('Solo se permite texto');
            return false;
        }

        if (email.trim() === '') {
            console.error('Es necesario ingresar un usuario');
            return false;
        }

        return true;
    }
    
    static ValidarPassword(password) {
        
        if (password.lenght >= 10) {
            console.error('La contraseña tiene que ser menor a 10 caracteres');
            return false
        }

        if (!typeof password === 'string') {
            console.error('Solo se permite texto');
            return false;
        }

        if (password.trim() === '') {
            console.error('Es necesario ingresar una contraseña');
            return false;
        }

        return true;
    }

}