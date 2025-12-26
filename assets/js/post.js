/* سنقرأ ال id من الرابط ثم نجلب المستخدمين 
نجلب مشنور واحد فقط 
نعرض تفاصيله 
ربط زر التعديل
تنفيذ الحذف ثم العودة للضفحة الرئيسية 
*/


//هذه الصفحة لتفاصيل المنشور الواحد من خلالها يتم عرض منشور و الحذف والتعديل 
const id = new URLSearchParams(location.search).get('id');
let users = [];
//جلب المنشورات 
fetch('https://dummyjson.com/users?limit=208')
.then(result => result.json())
//نخزن كل المستخدمين في مصفوفة users
.then(usersData => {
  users = usersData.users;
  return fetch(`https://dummyjson.com/posts/${id}`);
})
.then(res => res.json())
.then(post => {

  //كل منشور له userid  ونبحث عن المستخدم المقابل المطابق 
  const user = users.find(u => u.id === post.userId);
  const author = user ? user.firstName + ' ' + user.lastName : "Unknown ";
// عرض عنوان والنص والاسم 
  document.getElementById('post').innerHTML =
   `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <p><strong>Author:</strong> ${author}</p>
  `;
// الانتقال لصفحة التعديل 
  document.getElementById('edit').href = `edit-post.html?id=${id}`;
  console.log(post);
});


document.getElementById('delete').onclick = () => {
  fetch(`https://dummyjson.com/posts/${id}`,
     { method: 'DELETE' })
  // بعد الحذف يطبع النتيجة ويعيدنا للصفحة الرئيسية 
  .then(res => res.json())
  .then(data => {
    console.log(data);
    location.href = 'index.html';
  });
};
