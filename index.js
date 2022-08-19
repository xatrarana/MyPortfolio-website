function starter(){
   firstScript();
}
function firstScript(){
   var scriptTag = document.createElement('script');
   scriptTag.src = 'getData.js';
   scriptTag.type = 'application/javascript';
   document.body.append(scriptTag); 
   
}
document.addEventListener('load',starter());

