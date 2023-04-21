const harmburger = document.getElementById('harmburger')
const navbars = document.getElementById('work')

harmburger.addEventListener('click', function(){
    if(navbars.style.display == 'block'){
        navbars.style.display = 'none'
    }else {
        navbars.style.display="block"
       

    }
    
})

document.onreadystatechange = function () {
    var loader = document.querySelector(".loader-wrapper");
    loader.style.visibility = "hidden";
    loader.style.opacity = "0";
  };
  
  window.onload = function () {
    var loader = document.querySelector(".loader-wrapper");
    loader.style.visibility = "hidden";
    loader.style.opacity = "0";
  };

  


