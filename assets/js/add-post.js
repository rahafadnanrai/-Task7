
document.getElementById('form').onsubmit = e => {
  e.preventDefault();

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      userId: userId.value
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("post Added",data);
   
    location.href = 'posts.html';
    location.href = '.';
  });
};
