/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { singIn } from '../lib/singIn.js';
import { loginWithGoogle } from '../lib/singIn.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('id', 'home_div');

  const logoHome = document.createElement('img');
  logoHome.setAttribute('id', 'logo_home');
  logoHome.setAttribute('src', './components/images/Solovino_Black.png');

  const mailLogin = document.createElement('input');
  mailLogin.placeholder = 'Correo Electrónico';
  mailLogin.setAttribute('id', 'mail_login');
  mailLogin.setAttribute('class', 'input_login');

  const passwordLogin = document.createElement('input');
  passwordLogin.placeholder = 'Contraseña';
  passwordLogin.setAttribute('id', 'pass_login');
  passwordLogin.setAttribute('class', 'input_login');

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'button_login');
  buttonLogin.textContent = 'Iniciar sesión';
  buttonLogin.addEventListener('click', () => {
    const mailValue2 = document.getElementById('mail_login').value;
    const passValue2 = document.getElementById('pass_login').value;
    singIn(mailValue2, passValue2);
  });

  const nodoH2 = document.createElement('h2');
  nodoH2.setAttribute('id', 'nodo_H2');
  nodoH2.textContent = 'Crear una cuenta';

  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('class', 'button_register');

  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  const googleButt = document.createElement('button');
  googleButt.setAttribute('id', 'google');
  googleButt.textContent = 'Google';
  googleButt.addEventListener('click', () => {
    loginWithGoogle();
  });

homeDiv.append(logoHome, mailLogin, passwordLogin, buttonLogin, nodoH2, buttonRegister, googleButt);
  return homeDiv;
};
