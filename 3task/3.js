const btn = document.querySelector('.btn');

function error() {
  console.log ('Информация о местоположении недоступна')
}

function success(position) {
  const crd = position.coords;
  console.log(crd.latitude, crd.longitude);
}

btn.addEventListener('click', () => {
  console.log(`Ширина вашего экрана ${window.screen.width}`);
  console.log(`Высота вашего экрана ${window.screen.height}`);
  
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success,error)
} else {
  console.log('Информация о местоположении недоступна')
}

})