/* eslint-disable import/no-cycle */
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { home } from './components/home.js';
import { register } from './components/register.js';
import { timeline } from './components/timeline.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/timeline': timeline,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    onNavigate('/timeline');
    const uid = user.uid;
    // ...
  } else {
    onNavigate('/');
  }
});

const component = routes[window.location.pathname];
rootDiv.appendChild(component());
