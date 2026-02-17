document.addEventListener('DOMContentLoaded', async () => {

let water = document.getElementsByClassName("water")[0];
let element = document.getElementsByClassName('bowl')[0];
let left = element.getBoundingClientRect().left;
let right = element.getBoundingClientRect().right;
let bottom = element.getBoundingClientRect().bottom;

console.log(right-left);
while(true) {
    spawnBubble();
    await new Promise(resolve => setTimeout(resolve, 300));
}

async function spawnBubble () {
    let randomX = Math.random() * (right - left);
    let randomSize = Math.random() * (30)
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = randomX +'px';
    bubble.style.bottom = bottom;

    bubble.style.width = randomSize + "px";
    bubble.style.height = randomSize + "px";
    water.append(bubble);
    await new Promise(resolve => setTimeout(resolve, 5000));
    bubble.remove();
}

});