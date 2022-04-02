/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { singIn, loginWithGoogle } from '../lib/firebase.js';

export const home = () => {
  const containerHome = document.createElement('div');
  containerHome.setAttribute('id', 'cont_home');

  const containerSec = document.createElement('section');
  containerSec.setAttribute('id', 'cont_home2');
  
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
    const mailValue = document.getElementById('mail_login').value;
    const passValue = document.getElementById('pass_login').value;
    singIn(mailValue, passValue);
  });

  const createAccount = document.createElement('h2');
  createAccount.setAttribute('id', 'account');
  createAccount.textContent = 'Crear una cuenta';

  const containerSec2 = document.createElement('section');
  containerSec2.setAttribute('id', 'cont_home3');

  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('class', 'button_register');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  const googleButt = document.createElement('img');
  googleButt.setAttribute('id', 'google');
  googleButt.setAttribute('src', './components/images/google.png');
  googleButt.addEventListener('click', () => {
    loginWithGoogle();
  });

  // eslint-disable-next-line max-len
  containerHome.append(containerSec, containerSec2);
  containerSec.append(logoHome, mailLogin, passwordLogin, buttonLogin, createAccount);
  containerSec2.append(buttonRegister, googleButt);
  return containerHome;
};
