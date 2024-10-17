


window.onload = function() {
    navigator.geolocation.getCurrentPosition(success, failed)

};

function success (position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    console.log(latitude,longitude)
    getContryFromlocation(latitude, longitude)
};

function changeLoc (country){
    const address = document.getElementById('add')
    address.textContent = country;
}


function getContryFromlocation(latitude, longitude){
    const api = 'cad60de3c57648fdafe8975eb58cc311';
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api}`)
        .then(response => response.json())
        .then(data => {
            const country = data.results[0].components.country;
            const countryCode = data.results[0].components.country_code.toUpperCase();
            changeLoc(country);
            flag(countryCode);
        
         })

        .catch(error => console.log("error", error));
}


function failed (){
    console.log("there was some error")
    };



function flag (countryCode){
    const countryFlag = document.getElementById('flag')
    countryFlag.src = `https://flagcdn.com/16x12/${countryCode}.png`;
}   

// hero secton image slider
const image = [
    "images/herosection_1.jpg",
    "images/herosection_2.jpg",
    "images/herosection_3.jpg",
    "images/herosection_4.jpg",
    "images/herosection_5.jpg",
    "images/herosection_6.jpg"
];


let currentIndex = 0;

const hero = document.getElementById('hero')


function changeImage(){
    
    hero.classList.add('slide');
    currentIndex = (currentIndex+1) %image.length;
    console.log(currentIndex)
    hero.style.backgroundImage = `url(${image[currentIndex]})`;
    setTimeout(() => {
        hero.classList.remove('slide');
        }, 1000);
}

setInterval(changeImage, 5000);

//move to Top button
let topButton = document.getElementById('backtotop')

function toTop (){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



