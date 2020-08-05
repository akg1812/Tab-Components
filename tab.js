//deafult loading of page
const url="https://jsonplaceholder.typicode.com/users";
codeAddress=()=> {
 alert("the page is loaded");
 return title.textContent="Welcome User-we have the ids";
 }


//adding classList
let ul_index = document.createElement("ul");
ul_index.classList.add("index");

let ul_name = document.createElement("ul");
ul_name.classList.add("names");

let ul_email = document.createElement("ul");
ul_email.classList.add("emails");



codeAddress();
const loading=document.querySelector(".loading");
loading.textContent="Loading...";
loading.style.display="block";


window.onload= ()=>{
  
let main=null;
    ul_index.textContent="Loading....";
    ul_index.textContent=""
    main = document.getElementById("main");
    ul_index.style.display="inline-block";
 
    try{
    fetch(url)
      .then(response => response.json())
      .then(people =>  getListOfIds (people))
      .catch((err)=> {})
       
      throw new Error(error.textContent="Something went wrong");
      
     
       
const getListOfIds = people => {
        let temp =null;
        people.forEach(person => {
            temp=document.createElement("li");
            temp.textContent=`${person.id}`;
            ul_index.appendChild(temp)
        })
        console.log(ul_index);
        main.appendChild(ul_index);
        ul_name.style.display="none";
        ul_email.style.display="none";
        //title.style.display="none";
        loading.style.display="none";
        
      }
    }
    
catch(e)
   {
     error.textContent="Error:Something went wrong"
     console.log(e);
   }
  }
   
  
//creating button for name
let b2=document.createElement("button");
      b2.textContent="Name";
      root.appendChild(b2);
     
     
 b2.addEventListener("click", ()=>{

  let main=null;  
     ul_name.textContent="";
     main = document.getElementById("main");
     ul_name.style.display="inline-block";
fetch(url)
      .then(response => response.json())
      .then(people => getListOfNames(people));

const getListOfNames = people =>{
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
        title.style.display="none";
        loading.style.display="none";
        error.style.display="none";
       
       
};
})



//button for getting email
  let b3=document.createElement("button");
        b3.textContent="Email";
        root.appendChild(b3);
       
       
b3.addEventListener("click", ()=>{
          
let main=null;
  //fetching email data
        ul_email.textContent="";
        main = document.getElementById("main");
        ul_email.style.display = "inline-block";
  fetch(url)
      .then(response => response.json())
      .then(people => getListOfEmails(people));

  
      const getListOfEmails = people =>{
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
         title.style.display="none";
         loading.style.display="none";
        erro.style.display="none";
       
      
        
};
})
   

