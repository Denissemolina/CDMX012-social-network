/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { createUser } from '../lib/auth.js';

export const register = () => {
  const divReg = document.createElement('div');
  divReg.setAttribute('id', 'div_register');

  const tittleReg = document.createElement('h1');
  tittleReg.setAttribute('id', 'tittle_1');
  tittleReg.textContent = 'Crear una cuenta';

  const mailReg = document.createElement('input');
  mailReg.placeholder = 'Correo Electrónico';
  mailReg.setAttribute('id', 'mail_register');
  mailReg.setAttribute('class', 'input_register');

  const passwordReg = document.createElement('input');
  passwordReg.placeholder = 'Contraseña';
  passwordReg.setAttribute('id', 'pass_register');
  passwordReg.setAttribute('class', 'input_register');

  const conditions = document.createElement('p');
  conditions.textContent = 'Para completar tu registro, aceptas que has leído los términos y condiciones de uso y el tratamiento y transferencia de tus datos conforme a los dispuesto en las políticas de privacidad.';
  conditions.setAttribute('id', 'conditions');

  const buttonReg = document.createElement('button');
  buttonReg.setAttribute('class', 'button_register');
  buttonReg.textContent = 'Registate';
  buttonReg.addEventListener('click', () => {
    const mailValue = document.getElementById('mail_register').value;
    const passValue = document.getElementById('pass_register').value;
    createUser(mailValue, passValue);
  });

  const backToHome = document.createElement('button');
  backToHome.setAttribute('id', 'button_back');
  backToHome.textContent = 'Regresar al inicio';
  backToHome.addEventListener('click', () => {
    onNavigate('/');
  });

  divReg.append(tittleReg, mailReg, passwordReg, conditions, buttonReg, backToHome);
  return divReg;
};