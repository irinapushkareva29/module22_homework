const btn = document.querySelector('.btn');

const useRequest = (lat,long)=> {
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${lat}&long=${long}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
       console.log(data); 
    })
    .catch(() => {
       console.log('error') 
    });
}

btn.addEventListener ('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=> {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const result = useRequest(latitude,longitude);
    console.log(result["timezone"]);
  })
 
} else {
  console.log('Информация о местоположении недоступна')
}

})