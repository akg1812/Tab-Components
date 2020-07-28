
document.getElementById('getId').addEventListener('click',getId);
function getId(){
    const URL = "https://jsonplaceholder.typicode.com/users";
    
    const main = document.getElementById("main");
    main.innerHTML = "<p>Loading...";
    
    fetch(URL)
      .then((response) => response.json())
      .then((people) => main.innerHTML = getListOfIds(people));
    
    const getListOfIds = (people) => {
      const ids = people
        .map((person) => `<li>${person.id}</li>`)
        .join("\n");
    
      return `<ul>${ids}</ul>`;
    };
}
    


document.getElementById('getName').addEventListener('click',getName);
    function getName(){
    const URL = "https://jsonplaceholder.typicode.com/users";
    
    const main = document.getElementById("main");
    main.innerHTML = "<p>Loading...";
    
    fetch(URL)
      .then((response) => response.json())
      .then((people) => main.innerHTML = getListOfNames(people));
    
    const getListOfNames = (people) => {
      const names = people
        .map((person) => `<li>${person.name}</li>`)
        .join("\n");
    
      return `<ul>${names}</ul>`;
    };
}

document.getElementById('getEmail').addEventListener('click',getEmail);
function getEmail(){
    const URL = "https://jsonplaceholder.typicode.com/users";
    
    const main = document.getElementById("main");
    main.innerHTML = "<p>Loading...";
    
    fetch(URL)
      .then((response) => response.json())
      .then((people) => main.innerHTML = getListOfEmails(people));
    
    const getListOfEmails = (people) => {
      const ids = people
        .map((person) => `<li>${person.email}</li>`)
        .join("\n");
    
      return `<ul>${ids}</ul>`;
    };
}
