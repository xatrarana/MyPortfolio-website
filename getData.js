var name ;


    fetch('manifest.json').then((response) => response.json()).then((data) => document.querySelector(".logoName").append(data.short_name));
   const path = './manifest.json';
   async function getData(){
    const response = await fetch(path);
     const data = await response.json();
     const {f_name} = data;
    name = f_name;
    // console.log(data);
    
   }
   getData();
   console.log(name);


  //creating image tag
    function imageTag(){
        fetch('manifest.json').then((response) => response.json()).then((data) =>
        {
        var imageTag = document.createElement('img');
        imageTag.classList.add('open_img');
        imageTag.src = `${data.icons[0].src}`;
        // console.log(data.icons[0].src);
        imageTag.type = `${data.icons[0].type}`;
       
        document.getElementById("menu_div").appendChild(imageTag);

        var imageTag = document.createElement('img');
        imageTag.classList.add('close_img')
        imageTag.src = `${data.icons[1].src}`;
        // console.log(data.icons[0].src);
        imageTag.type = `${data.icons[1].type}`;
       
        document.getElementById("menu_div").appendChild(imageTag);
        

        })
     } 
     imageTag();
 //------------------------------------------------------------------------  
     // menu button
     const menu_button = document.querySelector("#menu_div");
     const  navigation_div = document.querySelector(".navigation_div");
     function toogleNavbar(){
         
         navigation_div.classList.toggle('active');
     }
     menu_button.addEventListener("click", ()=> toogleNavbar());

 //---------------------------------------------------------------------        
// creating the div continer
function createDiv(){
    var infoDiv = document.createElement('div');
    infoDiv.classList.add('devinfo');
    document.querySelector(".first-container").appendChild(infoDiv);
    
    
 }
 createDiv();
 function createInfo(){
    var name = document.createElement('h1');
    name.classList.add('name');
    document.querySelector(".devinfo").appendChild(name);
}
createInfo();
document.querySelector(".name").append(name);
    
    


