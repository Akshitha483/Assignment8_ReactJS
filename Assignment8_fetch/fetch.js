/*getText("https://jsonplaceholder.typicode.com/posts");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("demo").innerHTML = myText;
}*/

let url= 'https://jsonplaceholder.typicode.com/users'

async function fetchPosts(){
    let response = await fetch(url)
    let data = await response.json();

    console.log(data);
}

fetchPosts()