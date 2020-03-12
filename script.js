// let codeInsee = '75120';
// let token = '8780505298cf5464c2cfb5a8e9b826243f26d27374fe10c460ccb4882d901d7c';
// // $.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=${token}&insee=${codeInsee}`, function(reponse) {
// //   console.log(`${reponse.forecast.tmax}`);
// //
// //   document.querySelector('p').innerHTML = `${reponse.forecast.tmax}`;
// // });
//
// //
// // console.log(`La ville est : ${reponse.city.name}`);
// // console.log(`La température max est : ${reponse.forecast.tmax}`);
//
//
// document.querySelector('.obtenir-temperature').addEventListener('click', function () {
//   codeInsee = document.querySelector('.code-insee').value;
//   $.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=${token}&insee=${codeInsee}`, function(reponse) {
//     document.querySelector('.temperature').value = `${reponse.forecast.tmax}°C`;
// });
// });


let ville = 'Paris';
let token = '8780505298cf5464c2cfb5a8e9b826243f26d27374fe10c460ccb4882d901d7c';

document.querySelector('.obtenir-temperature').addEventListener('click', function () {
  ville = document.querySelector('.ville').value;
  $.get( `https://api.meteo-concept.com/api/location/cities?token=${token}&search=${ville}` , function(reponse) {
    codeInsee = `${reponse.city}`
    $.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=${token}&insee=${codeInsee}`, function(reponse) {
        document.querySelector('.temperature').value = `${reponse.forecast.tmax}°C`;
    });
});
});
