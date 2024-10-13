const image = [
    "images/herosection_1.jpg",
    "images/herosection_2.jpg",
    "images/herosection_3.jpg",
    "images/herosection_4.jpg",
    "images/herosection_5.jpg",
    "images/herosection_6.jpg"
];


let currentIndex = 0;

function changeImage(){
    const hero = document.getElementById('hero')
    hero.classList.add('slide');
    currentIndex = (currentIndex+1) %image.length;
    hero.style.backgroundImage = `url(${image[currentIndex]})`;
    setTimeout(() => {
        hero.classList.remove('slide');
        }, 1000);
}

setInterval(changeImage, 5000);

let topButton = document.getElementById('backtotop')

function toTop (){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



