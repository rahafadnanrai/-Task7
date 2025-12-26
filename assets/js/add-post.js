
document.getElementById('form').onsubmit = event => {
  event.preventDefault();
//
  fetch('https://dummyjson.com/posts/add', {
    
    method: 'POST',
    //نخبر السيرفر ان البيانات بصيغة JSON
    headers: { 'Content-Type': 'application/json' },
    //البيانات المرسلة 
    body: JSON.stringify({
      title: title.value, //عنوان المنشور 
      body: body.value,// محتوى المنشور 
      userId: userId.value
    })
  })
   //تحويل الرد الى JSON 
  .then(result => result.json())
  .then(data => {
    console.log("post Added",data);
   
    location.href = 'index.html';
  
  });
};

