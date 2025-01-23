import validacion from '../js/validaciones.js';

const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', () => {

    const ValEmail = document.getElementById('txtEmail').value;
    const ValContraseña = document.getElementById('txtContraseña').value;

    let ArrayValue = []

    // console.log(ValEmail + ' ' + ValContraseña)
    if (!validacion.ValidarEmail(ValEmail)) {
        throw Error("Hubo un error al validar Email");
    }    

    if (!validacion.ValidarPassword(ValContraseña)) {
        throw Error("Hubo un error al validar la contraseña");
    }

    ArrayValue = {
        ValEmail,
        ValContraseña
    }

    ArrayValue = JSON.stringify(ArrayValue);

    /*console.log(ArrayValue);*/

    fetch('/registration', {
        method: 'POST',
        headers: {
            "Conten-Type": "application/json"
        },
        body: ArrayValue
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e.Message);
    });
});
