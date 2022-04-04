/* eslint-disable import/no-cycle */
import { logOut } from '../lib/firebase.js';
import { savePost } from '../lib/postFirebase.js';
//import { dataCall } from '../';

import {ReadPost} from './post/readPost.js';

export const timeline = () => {
  const timelineContainer = document.createElement('div');
  timelineContainer.setAttribute('id', 'main_timeline');

  const timelineSecCont = document.createElement('div');
  timelineSecCont.setAttribute('id', 'sec_timeline');

  const logoHdr = document.createElement('img');
  logoHdr.setAttribute('id', 'logo_timeline');
  logoHdr.setAttribute('src', './components/images/solovino header.png');

  const logOutButton = document.createElement('p');
  logOutButton.setAttribute('id', 'button_logout');
  logOutButton.textContent = 'Cerrar sesión';
  logOutButton.addEventListener('click', () => {
    logOut();
  });

  const timelineThirdCont = document.createElement('section');
  timelineThirdCont.setAttribute('id', 'third_timeline');

  const form = document.createElement('form');
  form.id = 'form';

  const createPost = document.createElement('input');
  createPost.placeholder = 'Escribe algo..';
  createPost.id = 'post_place';
  createPost.classList.add('post_classes');

  const sendButton = document.createElement('button');
  sendButton.setAttribute('id', 'button_send');
  sendButton.textContent = 'Publicar';
  sendButton.addEventListener('click', (e) => {
    const postPlace = document.getElementById('post_place').value;
    savePost(postPlace, new Date());
    e.preventDefault();
    form.reset();
  });

  const posts = document.createElement('div');
  posts.append(ReadPost());

  timelineContainer.append(timelineSecCont, timelineThirdCont, posts);
  timelineSecCont.append(logoHdr, logOutButton);
  timelineThirdCont.appendChild(form);
  form.append(createPost, sendButton);

  return timelineContainer;
};
