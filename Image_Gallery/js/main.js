//overlay container 
var overlayColor = document.querySelector('.overlay')
// Color changing button 
var button=document.querySelector('.dark')
// images names
const imagesArray=[
  {"url":"Images/pic1.jpg","alt":"human blue eye"},
  {"url":"Images/pic2.jpg","alt":"White smokes"},
  {"url":"Images/pic3.jpg","alt":"Blue flowers"},
  {"url":"Images/pic4.jpg","alt":"Pyramid inside pic"},
  {"url":"Images/pic5.jpg","alt":"Butterfly"},
]
//Images list displaying container 
var smallScreen=document.querySelector('.thumb-bar')
//Big Screen image tag 
var bigScreen=document.querySelector('.displayed-img')
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

//thumb-bar images display
document.addEventListener('DOMContentLoaded',()=>{
    
    //display image function
    function displayImages(url){
       
        for (let index = 0; index < url.length; index++) {
            //small screen image tag
            let img = document.createElement('img');
            //Geting each images from array 
            let images=url[index];
            img.src=images.url;
            img.alt=images.alt;
            img.addEventListener('click',()=>showBigImage(images.url,images.alt))
            //aading the images in the thumb-bar container
            smallScreen.appendChild(img)
        }
    }
    displayImages(imagesArray);
})

function showBigImage(url,alt) {
    console.log(url,alt);
    bigScreen.src=url;
    bigScreen.alt=alt;
}