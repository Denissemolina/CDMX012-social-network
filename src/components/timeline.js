/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { logOut } from '../lib/singIn.js';
import { savePost } from '../components/post/ReadPost.js'
//import { dataCall } from '../';

import ReadPost from './post/ReadPost.js';

export const timeline = () => {
  const timelineDiv = document.createElement('div');
  timelineDiv.setAttribute('id', 'timeline_div');

  const posti = document.createElement('input');
  posti.placeholder = 'Crear publicación';
  posti.id = 'post_place';
  posti.classList.add('post_classes');

 

  const sendButton = document.createElement('button');
  sendButton.setAttribute('id', 'button_send');
  sendButton.textContent = 'Publicar';
  sendButton.addEventListener('click', () => {
   const postiPlace = document.getElementById('post_place'); 
   savePost(postiPlace, new Date());
  });

  const logOutButton = document.createElement('button');
  logOutButton.setAttribute('id', 'button_logout');
  logOutButton.textContent = 'Cerrar sesión';
  logOutButton.addEventListener('click', () => {
    logOut();
  });

  const posts = document.createElement('div');
  posts.append(ReadPost(posti.value, new Date()));

  timelineDiv.append(posti, sendButton, logOutButton, ReadPost(posti.value, new Date()));
  return timelineDiv;
};
