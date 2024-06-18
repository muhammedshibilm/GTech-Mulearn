var overlayColor = document.querySelector('.overlay')
var button=document.querySelector('.dark')

let values=true
//changing overlay div and button text 
function overlayButton(){
    //Get current class name of that button
    let currentClass=button.className;

    if (currentClass=="dark") {
     overlayColor.style.backgroundColor='black';
     button.textContent="Lighten"
     button.className="light"
    }else{
        overlayColor.style.backgroundColor=null;
        button.textContent="Darken"
        button.className="dark"
    }
}

// Button event hander 
button.addEventListener('click',()=>overlayButton());