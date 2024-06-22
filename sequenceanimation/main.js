const item1=document.querySelector('#itemone');
const item2=document.querySelector('#itemtwo');
const item3=document.querySelector('#itemthree');


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

function startAnimation() {
    const duration=2000;
    
    
    animation(item1,duration)

}

startAnimation()
