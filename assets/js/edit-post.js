
const id = new URLSearchParams(location.search).get('id');

fetch(`https://dummyjson.com/posts/${id}`)
.then(res => res.json())
.then(post => {
  title.value = post.title;
  body.value = post.body;
});

document.getElementById('form').onsubmit = e => {
  e.preventDefault();

  fetch(`https://dummyjson.com/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title.value,
      body: body.value
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("post updted",data);
    location.href = `post.html?id=${id}`;
  });
};
