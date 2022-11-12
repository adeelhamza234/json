// const btn = document.getElementById('abc');
    
// btn.addEventListener('click', function onClick(event) {
//   const color = btn.style.color;

//   if (color === 'red') {
//     btn.style.color = 'blue';

    
//   } else if(color === 'blue'){
//     btn.style.color = 'green';
//  }else if(color === 'green'){
//     btn.style.color = 'yellow';
//  }else{
//     btn.style.color = 'red';
//  }
// });
 async function addTodo(){
   var id=document.getElementById("userId").value;
   var title=document.getElementById("title").value;
   var descr=document.getElementById("descr").value;
const fetchPromise= await fetch("https://bootcamp.todo.arhamsoft.org/client/todo/create",{
   method:"POST",
   body:JSON.stringify({
      userId:id,
      title:title,
      desc:descr
   }),
   headers: {
      "Content-type": "application/json; charset=UTF-8"
  }   
})
const data=await fetchPromise.json;
console.log(data);
}