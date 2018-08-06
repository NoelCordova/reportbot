const express = require('express');
const axios = require('axios');

const app = express();


const url = 'https://ddragon.leagueoflegends.com';
const imgUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading';

const handleError = (res, reason, message, code) => {
  console.error("ERROR:" + reason);
  res.status(code || 500).json({"error": message});
};

/*
  '/api/champions'
  GET: Get all champions

  CHAMPIONS: http://ddragon.leagueoflegends.com/cdn/6.24.1/data/es_MX/champion.json
  CHAMPION: http://ddragon.leagueoflegends.com/cdn/8.13.1/data/es_MX/champion/Aatrox.json 
  VERSION: https://ddragon.leagueoflegends.com/api/versions.json
  REALMS: https://ddragon.leagueoflegends.com/realms/lan.json
  IMAGES: http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
*/
app.get('/api/champions', (req, res) => {

  axios.get(`${url}/realms/lan.json`)
  .then( server => {

    axios.get(`${url}/cdn/${server.data.v}/data/${server.data.l}/champion.json`)
    .then( response => {

      let champions = [];
      let keys = Object.keys(response.data.data);

      for (key of keys) {

        champions.push({
          id: response.data.data[key].id,
          name: response.data.data[key].name,
          img: `${imgUrl}/${response.data.data[key].id}_0.jpg`,
          info: {
            attack: response.data.data[key].info.attack,
            defense: response.data.data[key].info.defense,
            magic: response.data.data[key].info.magic,
            difficulty: response.data.data[key].info.difficulty 
          },  
          tags: [
            response.data.data[key].tags[0],
            response.data.data[key].tags[1]
          ]
        });        

      }

      res.status(200).json(champions);

    })
    .catch( error => handleError(res, error, 'Error en campeones' ));

  })
  .catch( error => handleError(res, error, 'Error en información de servidor LAN' ));

});


module.exports = app;