/* eslint-disable import/no-cycle */
import { logOut } from '../lib/firebase.js';
import { savePost } from '../lib/postFirebase.js';

//import { dataCall } from '../';

import {ReadPost} from './post/ReadPost.js';

export const timeline = () => {
  const timelineContainer = document.createElement('div');
  timelineContainer.setAttribute('id', 'timeline_cont');

  const containerHdr = document.createElement('div');
  containerHdr.setAttribute('id', 'container_hdr');

  const logoHdr = document.createElement('img');
  logoHdr.setAttribute('id', 'logo_hdr');
  logoHdr.setAttribute('src', './components/images/solovino header.png');

  const logOutButton = document.createElement('p');
  logOutButton.setAttribute('id', 'button_logout');
  logOutButton.textContent = 'Cerrar sesión';
  logOutButton.addEventListener('click', () => {
    logOut();
  });

  const containerTwo = document.createElement('section');
  containerTwo.setAttribute('id', 'container_two');

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
  });

  const posts = document.createElement('div');
  posts.append(ReadPost());

  containerHdr.append(logoHdr, logOutButton);
  form.append(createPost, sendButton);
  containerTwo.appendChild(form);
  timelineContainer.append(containerHdr, containerTwo, posts);
  return timelineContainer;
};
