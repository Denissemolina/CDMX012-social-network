import { q, onSnapshot } from '../../lib/postFirebase.js';

export const ReadPost = () => {
  const allPost = document.createElement('div');
  onSnapshot(q, (querySnapshot) => {
    while (allPost.firstChild) {
      allPost.removeChild(allPost.firstChild);
    }
    querySnapshot.forEach((doc) => {
      const divPosts = document.createElement('div'); // aqui habias puesto Posts??
      divPosts.setAttribute('id', 'post_div');
      divPosts.textContent = doc.data().post;

      const reactionsPosts = document.createElement('section');
      reactionsPosts.setAttribute('id', 'reactions');

      const likeButt = document.createElement('img');
      likeButt.setAttribute('id', 'like_post');
      likeButt.setAttribute('class', 'reactions');
      likeButt.setAttribute('src', './components/images/huella_like.png');
      likeButt.addEventListener('click', () => {

      });

      const editButt = document.createElement('img');
      editButt.setAttribute('id', 'edit_post');
      editButt.setAttribute('class', 'reactions');
      editButt.setAttribute('src', './components/images/edit_post.png');
      editButt.addEventListener('click', () => {

      });

      const deleteButt = document.createElement('img');
      deleteButt.setAttribute('id', 'delete_post');
      deleteButt.setAttribute('class', 'reactions');
      deleteButt.setAttribute('src', './components/images/delete_post.png');
      deleteButt.addEventListener('click', () => {

      });

      reactionsPosts.append(likeButt, editButt, deleteButt);
      divPosts.appendChild(reactionsPosts);
      allPost.appendChild(divPosts);
    });
  });

  return allPost;
};
