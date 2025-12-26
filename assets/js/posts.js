
let users = [];

fetch('https://dummyjson.com/users?limit=208')
.then(res => res.json())
.then(usersData => {
  users = usersData.users;
  return fetch('https://dummyjson.com/posts');
})
.then(res => res.json())
.then(postsData => {
  const postsDiv = document.getElementById('posts');

  postsData.posts.forEach(post => {
    const user = users.find(u => u.id === post.userId);
    const author = user ? user.firstName + ' ' + user.lastName : 'Unknown';

    postsDiv.innerHTML += `
      <div>
        <h3>${post.title}</h3>
        <p>${post.body.substring(0, 80)}...</p>
        <small>Author: ${author}</small><br>
        <a href="post.html?id=${post.id}">Details</a>
      </div>
      <hr>
    `;
  });

  console.log(postsData);
});
