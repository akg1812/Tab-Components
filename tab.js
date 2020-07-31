//deafult loading of page
function codeAddress() {
 alert("the page is loaded");
 return title.textContent;
 
}
window.onload = codeAddress;
const loading=document.querySelector(".loading");

//adding classList
let ul_index = document.createElement("ul");
ul_index.classList.add("index");

let ul_name = document.createElement("ul");
ul_name.classList.add("names");

let ul_email = document.createElement("ul");
ul_email.classList.add("emails");


//button for getId
let b1=document.createElement("button");
    b1.textContent="id";
    root.appendChild(b1);
    b1.addEventListener("click",getId=()=>{
//fetching id data

let main=null;
    ul_index.textContent="";
    main = document.getElementById("main");
    ul_index.style.display="inline-block";
fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((people) =>  getListOfIds(people))
      .catch((err)=> alert(err));
      
const getListOfIds = (people) => {
        let temp =null;
        people.forEach(person => {
            temp=document.createElement("li");
            temp.textContent=`${person.id}`;
            ul_index.appendChild(temp)
        })
        console.log(ul_index);
        main.appendChild(ul_index);
        loading.style.display="none";
        alert("error");
        ul_name.style.display="none";
        ul_email.style.display="none";
        

};
})


//creating button for name
let b2=document.createElement("button");
      b2.textContent="Name";
      root.appendChild(b2);
      b2.addEventListener("click",getName=()=>{
//fetching name data        
let main=null;  
     ul_name.textContent="";
     main = document.getElementById("main");
     ul_name.style.display="inline-block";
fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((people) => getListOfNames(people));

const getListOfNames = (people) =>{
        let temp =null;
        people.forEach(person => {
            temp=document.createElement("li");
            temp.textContent=`${person.name}`;
            ul_name.appendChild(temp);
        })
        console.log(ul_name);
        main.appendChild(ul_name);
       
        ul_email.style.display = "none";
        ul_index.style.display="none";
       
       
       
};
})

//button for getting email
  let b3=document.createElement("button");
        b3.textContent="Email";
        root.appendChild(b3);
        b3.addEventListener("click",getEmail=()=>{
  let main=null;
  //fetching email data
        ul_email.textContent="";
        main = document.getElementById("main");
        ul_email.style.display = "inline-block";
  fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((people) => getListOfNames(people));

  const getListOfNames = (people) =>{
        let temp =null;
        people.forEach(person => {
            temp=document.createElement("li");
            temp.textContent=`${person.email}`;
            ul_email.appendChild(temp)
        })
        console.log(ul_email);
        main.appendChild(ul_email);
        
         ul_name.style.display = "none";
         ul_index.style.display="none";
      
      
        
};
})
