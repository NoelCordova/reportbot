const express = require('express');
const axios = require('axios');

const app = express();


const url = 'https://ddragon.leagueoflegends.com';
const imgUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading';
const skinsUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash';

const handleError = (res, reason, message, code) => {
  console.error("ERROR:" + reason);
  res.status(code || 500).json({"error": message});
};

/*
  '/api/champion/:id'
  GET: Get an specific champion

  CHAMPIONS: http://ddragon.leagueoflegends.com/cdn/6.24.1/data/es_MX/champion.json
  CHAMPION: http://ddragon.leagueoflegends.com/cdn/8.13.1/data/es_MX/champion/Aatrox.json 
  VERSION: https://ddragon.leagueoflegends.com/api/versions.json
  REALMS: https://ddragon.leagueoflegends.com/realms/lan.json
  IMAGES: http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
*/
app.get('/api/champion/:id', (req, res) => {

  const id = req.params.id;

  axios.get(`${url}/realms/lan.json`)
  .then( server => {

    axios.get(`${url}/cdn/${server.data.v}/data/${server.data.l}/champion/${id}.json`)
    .then( response => {

      let champion = {};
      let skins = [];
      let skinsKeys = Object.keys(response.data.data[id].skins);

      for (skinKey of skinsKeys) {
        skins.push(`${skinsUrl}/${id}_${response.data.data[id].skins[skinKey].num}.jpg`);
      }

      champion = {
        id: response.data.data[id].id,
        name: response.data.data[id].name,
        title: response.data.data[id].title,
        img: `${imgUrl}/${id}_0.jpg`,
        skins,
        lore: response.data.data[id].lore,
        tags: [
          response.data.data[id].tags[0],
          response.data.data[id].tags[1]
        ],
        info: {
          attack: response.data.data[id].info.attack,
          defense: response.data.data[id].info.defense,
          magic: response.data.data[id].info.magic,
          difficulty: response.data.data[id].info.difficulty,
        }
      }

      res.status(200).json(champion);

    })
    .catch( error => handleError(res, error, 'Error en la información del campeón'));

  })
  .catch( error => handleError(res, error, 'Error en información de servidor LAN' ));

});


module.exports = app;