/*
سنقرأ الid من الرابط  1.
2. احضار بيانات المنشور بال fetch
3.نملئ الفورم  وننتظر التعديل */

const id = new URLSearchParams(location.search).get('id');

fetch(`https://dummyjson.com/posts/${id}`)
.then(res => res.json())
.then(post => {
  title.value = post.title;
  body.value = post.body;
});

document.getElementById('form').onsubmit = event => {
  //منع تحميل الصفحة وهو الحدث الافتراضي للفورم 
  event.preventDefault();

  fetch(`https://dummyjson.com/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({title: title.value, body: body.value
    })
  })
  //سنتعامل مع الرد ومن خلال الطباعة نتاكد ان العملية  قد تمت 
  .then(res => res.json())
  .then(data => {
    console.log("post updted",data);
    location.href = `post.html?id=${id}`;
  });
};
