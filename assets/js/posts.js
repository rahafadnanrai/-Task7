//مصفوفة لتعريف المستخدمين 
let users = [];

//نحتاج اسماء المستخدمين لربطهم بالمنشورات
//الfetch  يرسل طلب ل API ويحول الرد الى JSON 
fetch('https://dummyjson.com/users?limit=208')
.then(apiresult =>apiresult .json())

.then(usersData => {
  users = usersData.users;
  return fetch('https://dummyjson.com/posts');
})
.then(result => result.json())
.then(postsData => {
  //الوصول الى عنصر ال html 
  const postsDiv = document.getElementById('posts');
//المرور على المنشورات منشور منشور 
  postsData.posts.forEach(post => {
    const user = users.find(USER => {
      USER.id === post.userId});
    //اسم الكاتب ان وجد يعرض اسمه والا يعرض رسالة انه غير موجود  
    const author = user ? user.firstName + ' ' + user.lastName : 'Unknown';
   //نضيف المحتوى القديم للمحتوى الجديد ونعرض البيانات داخل الصفحة 
    postsDiv.innerHTML += `
      <div>
      
        <h2>${post.title}</h2>
        <p>${post.body}...</p>
        <h5>Author: ${author}</h5><br>
        <a href="post.html?id=${post.id}">Details</a>
      </div>
      <hr>
    `;
  });
//نحتاج اليها للقيام بطباعة البيانات 
  console.log(postsData);
});
