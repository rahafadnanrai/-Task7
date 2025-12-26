
const id = new URLSearchParams(location.search).get('id');
let users = [];

fetch('https://dummyjson.com/users?limit=208')
.then(res => res.json())
.then(usersData => {
  users = usersData.users;
  return fetch(`https://dummyjson.com/posts/${id}`);
})
.then(res => res.json())
.then(post => {
  const user = users.find(u => u.id === post.userId);
  const author = user ? user.firstName + ' ' + user.lastName : 'Unknown';

  document.getElementById('post').innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <p><strong>Author:</strong> ${author}</p>
  `;

  document.getElementById('edit').href = `edit-post.html?id=${id}`;
  console.log(post);
});

document.getElementById('delete').onclick = () => {
  fetch(`https://dummyjson.com/posts/${id}`, { method: 'DELETE' })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    location.href = 'posts.html';
  });
};
