import {
  q, onSnapshot, orderPost, deletePosts, editPosts,
} from '../../lib/postFirebase.js';
import { user } from '../../lib/firebase.js';
import { timeline } from '../timeline.js'


export const ReadPost = () => {
  const allPost = document.createElement('div');
  onSnapshot(orderPost, (querySnapshot) => {
    while (allPost.firstChild) {
      allPost.removeChild(allPost.firstChild);
    }

    querySnapshot.forEach((doc) => {
      const divPosts = document.createElement('div');
      divPosts.setAttribute('id', 'post_div');
      divPosts.textContent = doc.data().post;

      const eje = document.getElementById('post_place');
// console.log(eje)
    //  console.log(doc.data().user);
      // divPosts.textContent = doc.data().date;

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
      editButt.setAttribute('data-id', `${doc.id}`);
      editButt.setAttribute('src', './components/images/edit_post.png');
      editButt.addEventListener('click', async (e) => {
        const doc = await editPosts(e.target.dataset.id);
        const edit = doc.data();
      console.log( eje['post_place'] = edit.post);
       // edit;
      });

      const deleteButt = document.createElement('img');
      deleteButt.setAttribute('id', 'delete_post');
      deleteButt.setAttribute('class', 'btn_delete');
      deleteButt.setAttribute('data-id', `${doc.id}`);
      deleteButt.setAttribute('src', './components/images/delete_post.png');
      deleteButt.addEventListener('click', ({ target: { dataset } }) => {
        deletePosts(dataset.id);
      });

      reactionsPosts.append(likeButt, editButt, deleteButt);
      divPosts.appendChild(reactionsPosts);
      allPost.appendChild(divPosts);
    });
  });

  return allPost;
};
