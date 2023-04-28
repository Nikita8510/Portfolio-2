document.querySelector('.hamburger').addEventListener('click', function() {
    var elementOne = document.getElementById('one');
    
    
    if (elementOne.classList.contains("menu-active")) {
      elementOne.classList.remove("menu-active");
   
    } else {
      elementOne.classList.add("menu-active");
   
    }
  })



  // marker


