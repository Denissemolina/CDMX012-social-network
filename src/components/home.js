/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { singIn, loginWithGoogle } from '../lib/firebase.js';

export const home = () => {
  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('id', 'main_home');

  const homeSecCont = document.createElement('section');
  homeSecCont.setAttribute('id', 'sec_home');

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
  passwordLogin.setAttribute('type', 'password');
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

  const homeThirdCont = document.createElement('section');
  homeThirdCont.setAttribute('id', 'third_home');

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
  homeContainer.append(homeSecCont, homeThirdCont);
  homeSecCont.append(logoHome, mailLogin, passwordLogin, buttonLogin, googleButt, createAccount);
  homeThirdCont.append(buttonRegister);
  return homeContainer;
};
