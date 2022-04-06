import {
  onSnapshot, orderPost, deletePosts, editPost, getPost,
} from '../../lib/postFirebase.js';
import { user } from '../../main.js';
import { timeline } from '../timeline.js';

export const ReadPost = () => {
  const allPost = document.createElement('div');
  allPost.id = 'all_posts';

  onSnapshot(orderPost, (querySnapshot) => {
    while (allPost.firstChild) {
      allPost.removeChild(allPost.firstChild);
    }

    // OBTENIENDO FECHA EN TIEMPO REAL
    function getDate(date) {
      return new Date(
        date.seconds * 1000 + date.nanoseconds / 1000000,
      ).toDateString();
    }

    querySnapshot.forEach((doc) => {
      const divPosts = document.createElement('div');
      divPosts.setAttribute('id', 'post_div');

      const userPost = document.createElement('h2');
      //  userPost.textContent = doc.data().email;

      const datePost = document.createElement('h3');
      datePost.textContent = getDate(doc.data().date);

      const textPost = document.createElement('p');
      textPost.textContent = doc.data().post;

      const reactionsPosts = document.createElement('section');
      reactionsPosts.setAttribute('id', 'reactions');

      const likeButt = document.createElement('img');
      likeButt.setAttribute('id', 'like_post');
      likeButt.setAttribute('class', 'btn_like');
      likeButt.setAttribute('src', './components/images/huella_like.png');
      likeButt.addEventListener('click', () => {
      });

      const editButt = document.createElement('img');
      editButt.setAttribute('id', 'edit_post');
      editButt.setAttribute('class', 'btn_edit');
      editButt.setAttribute('data-id', doc.id);
      editButt.setAttribute('src', './components/images/edit_post.png');
      editButt.addEventListener('click', () => {

      });

      const sendButt = document.createElement('button');
      sendButt.setAttribute('id', ('editt'));
      sendButt.setAttribute('data-id', doc.id);
      sendButt.addEventListener('click', () => {
        const postValue = document.getElementById('input_value');
        divPosts.append(sendButt);
        editPost(doc.id, editInput.value, doc.data().data);
        console.log(postValue);
      });

      const editContainer = document.createElement('div');
      editContainer.classList.add('newEditcontainer');
      const editInput = document.createElement('input');
      editInput.id = 'input_value';
      editInput.classList.add('postNewInput');
      editContainer.append(editInput, sendButt);

     
      const deleteButt = document.createElement('img');
      deleteButt.setAttribute('id', 'delete_post');
      deleteButt.setAttribute('class', 'btn_delete');
      deleteButt.setAttribute('data-id', doc.id);
      deleteButt.setAttribute('src', './components/images/delete_post.png');
      deleteButt.addEventListener('click', ({ target: { dataset } }) => {
        deletePosts(dataset.id);
      });

      divPosts.append(userPost, datePost, textPost, reactionsPosts, editContainer);
      reactionsPosts.append(likeButt, editButt, deleteButt);
      allPost.appendChild(divPosts);
    });
  });

  return allPost;
};
