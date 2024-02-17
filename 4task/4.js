const btn = document.querySelector('.btn');

const useRequest = (lat,long)=> {
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${lat}&long=${long}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
       console.log(`Временная зона,в которой вы находитесь:${data.timezone}`);
       console.log(`Местные дата и время:${data.date_time_txt}`);
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
    useRequest(latitude,longitude);
  })
 
} else {
  console.log('Информация о местоположении недоступна')
}

})