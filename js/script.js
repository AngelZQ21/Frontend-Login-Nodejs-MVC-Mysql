import validacion from '../js/validaciones.js';

const btnLogin = document.getElementById('btnLogin');
const btnRegister = document.getElementById('btnRegister');

btnRegister.addEventListener('click', () => {

    const username = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtContraseña').value;

    let ArrayValue = []

    // console.log(ValEmail + ' ' + ValContraseña)
    if (!validacion.ValidarEmail(username)) {
        throw Error("Hubo un error al validar Email");
    }

    if (!validacion.ValidarPassword(password)) {
        throw Error("Hubo un error al validar la contraseña");
    }

    ArrayValue = {
        username,
        password
    }

    ArrayValue = JSON.stringify(ArrayValue);

    /*console.log(ArrayValue);*/

    const registerUser = async () => {

        try {

            const response = await fetch('http://localhost:4000/api/users/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: ArrayValue
            });

            if (!response) {
                throw Error("Hubo un error al hacer el registro");
            }

            const result = await response.json();

            console.log(result);
            return result;

        } catch (e) {
            console.log(e.message);
        }

    }

    registerUser();

});


btnLogin.addEventListener('click', () => {

    const username = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtContraseña').value;

    let ArrayValue = []

    // console.log(ValEmail + ' ' + ValContraseña)
    if (!validacion.ValidarEmail(username)) {
        throw Error("Hubo un error al validar Email");
    }    

    if (!validacion.ValidarPassword(password)) {
        throw Error("Hubo un error al validar la contraseña");
    }

    ArrayValue = {
        username,
        password
    }

    ArrayValue = JSON.stringify(ArrayValue);

    /*console.log(ArrayValue);*/

    const loginUser = async () => {
        
        try {
            
            const response = await fetch('http://localhost:4000/api/users/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: ArrayValue
            });

            if (!response) {
                throw Error("Hubo un error al Iniciar Session");
            }

            const result = await response.json();

            console.log(result);
            return result;

        } catch (e) {
            console.log(e.message);
        }

    }

    loginUser();
    
});
