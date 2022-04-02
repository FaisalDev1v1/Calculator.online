const keys = document.querySelector('.clac-keys');
const display = document.getElementById('display');

keys.addEventListener('click' , (event) => {
 
  let target = event.target;

  if(!target.matches('button')){  return false ; }
  
  if (target.classList.contains('equal')){

try {
  let result = eval(display.value);
  display.value = result ; 

}catch(e) {
if (e instanceof SyntaxError){
    alert('Error , I will remove your Opreator')
    display.value = " ";

    }

  }

  }else if (target.classList.contains('all-clear')){
            display.value=' ' ;
  }else {
    display.value += target.value ; 
  }




 

  
});
































// class UserCard extends HTMLElement {


// draw(){
//     let firstName = this.getAttribute('firstname');
//     let lastName = this.getAttribute('lastName')
//     let yob = this.getAttribute('yob');
//     let age = new Date().getFullYear() - yob ;

//     this.innerHTML = `
//     <h3> Name : ${firstName} ${lastName} </h3>
//     <p> age : ${age} </p>
//      ` 
//     }



//     connectedCallback() {
//       this.draw() 
// }


// static get observedAttributes() {
//      return ['firtst' , 'lastname' , 'yob ']

//     }

// }
// customElements.define('user-card' , UserCard );









// let openreq =indexedDB.open('app' , 9 );


// openreq.onupgradeneeded = () => {
//  let db = openreq.result;
  
//   // product 
// if (!db.objectStoreNames.contains('products')){
//     db.createObjectStore('products' , {keyPath: 'id'})
// }

// if (!db.objectStoreNames.contains('users')){
//     db.createObjectStore('users' , {keyPath: 'id'})
// }
 
// console.log('Up grade ');
// }


// openreq.onsuccess = () => {
//  console.log('sucess');
//  let db = openreq.result;

//  db.onversionchange = () => {
//      db.close();
//      location.reload();
//  }
//  let tx = openreq.transaction;
//  tx = db.transaction(['products', 'users'] , "readwrite");
// let productobj = tx.objectStore('products');
// let usersobj = tx.objectStore('users');


// let product = {
//     id: 2 , name: 'Book' ,  price: 10   , made : new Date()
// }




// let insertReq = productobj.put(product);
// let usersreq = usersobj.add({id: 1 , name: ' Faisal' })


// insertReq.onsuccess = () => {
//     alert(`product ${product.name} added right`);
// }
// }

// // insertReq.onerror = () => {
// //     alert('Error:' + insertReq.error)
// // }

// openreq.onerror = () => {
// console.log('Error: ' + openreq.error  );

// }




// user.onsubmit = function(e){
// e.preventDefault();

// localStorage.setItem('name' , user.name.value)
// localStorage.setItem('age' , user.age.value)

// showdata();
// }
// showdata();
// function showdata(){
   
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// if (name && age){
// let  div  = document.createElement('div')
// div.innerHTML = `Hi ${name} you are   ${age} good luck`;

// document.body.append(div)
  
//  }
// }



// localStorage.setItem('name' , 'amal')
// localStorage.setItem('age' , '15')


// console.log(localStorage.getItem('name') );



// let date = new Date();

// let expires = date.toUTCString(Date.now() + 10000);


// document.cookie = "user=Ali ; expires="+expires ;
// // document.cookie = "country=ksa"

//  console.log(document.cookie)





// let xhr = new XMLHttpRequest();
// xhr.timeout = 10000 ;

// xhr.open('POST' , 'https://reqres.in/api/users');
// xhr.setRequestHeader('content-type' , 'appliction/json')


// let user = JSON.stringify ({name: 'Faisal' , job: 'cs'});

// xhr.send(users);

// xhr.onload = function() {
//      console.log(xhr.response);
// }




// let xhr = new XMLHttpRequest();

// xhr.open ('GET' , 'url' , false , 'username' , 'password')
// xhr.setRequestHeader('name' , 'value')
// xhr.send(body)

// xhr.onload = function(){

//     xhr.status;  //200
//     xhr.statusText; // not found
//     xhr.response;  
//     xhr.responseText;
// }

// xhr.onprogress = function(){
// e.lengthComputable // bool
// e.total ;
// e.loaded ;
// }

// xhr.onerror = function (){

// }







// url object 
// let url = new URL('https://reqres.in:8080/api/')
// let usersurl = new URL('users', url );
// usersurl.search = 'page=2';
// console.log(usersurl.protocol);




//  window.onload = async () => {

// let abortCtrl = new AbortController();

// setTimeout(() => {
//     abortCtrl.abort()
// }, 1000)

// try {

//     let res = await fetch('https://reqres.in/api/users?page=2', {
//         signal: abortCtrl.signal
//     });

// }catch (error) {
//     if(error.name === 'AbortError'){
//         alert('Sorry, you connection is slow')
//     }else{
//         console.log(error)
//     }
// }
// }