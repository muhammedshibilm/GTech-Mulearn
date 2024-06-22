//Declare the variables 
const item1=document.querySelector('#itemone');
const item2=document.querySelector('#itemtwo');
const item3=document.querySelector('#itemthree');

//animation doing function
function animation(items,duration) {
    items.animate([
        { transform: 'rotate(0deg) scale(1)' },
        { transform: 'rotate(360deg) scale(0)' }
    ], {
        duration: duration,
        iterations: 1,
        fill: 'forwards'
    });
}

//animation excution function
function startAnimation() {
    const duration=2000;
    
    //first animation
    animation(item1,duration)

    //second animation
    setTimeout(() => {
        animation(item2,duration)
    }, duration);

    //Third animation
    setTimeout(() => {
        animation(item3,duration)
    }, duration*2);

}

startAnimation()
