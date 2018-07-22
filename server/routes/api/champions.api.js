const express = require('express');
const axios = require('axios');

const app = express();


const url = 'http://ddragon.leagueoflegends.com';
const imgUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading';

const handleError = (res, reason, message, code) => {
  console.error("ERROR:" + reason);
  res.status(code || 500).json({"error": message});
};

/*
  '/api/champions'
  GET: Get all champions

  CHAMPIONS: http://ddragon.leagueoflegends.com/cdn/6.24.1/data/es_MX/champion.json
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

      champions.push({
        id: response.data.data.Aatrox.id,
        name: response.data.data.Aatrox.name,
        img: `${imgUrl}/${response.data.data.Aatrox.id}_0.jpg`,
        info: {
          attack: response.data.data.Aatrox.info.attack,
          defense: response.data.data.Aatrox.info.defense,
          magic: response.data.data.Aatrox.info.magic,
          difficulty: response.data.data.Aatrox.info.difficulty 
        },
        tags: [
          response.data.data.Aatrox.tags[0],
          response.data.data.Aatrox.tags[1]
        ]
      });

      champions.push({
        id: response.data.data.Ahri.id,
        name: response.data.data.Ahri.name,
        img: `${imgUrl}/${response.data.data.Ahri.id}_0.jpg`,
        info: {
          attack: response.data.data.Ahri.info.attack,
          defense: response.data.data.Ahri.info.defense,
          magic: response.data.data.Ahri.info.magic,
          difficulty: response.data.data.Ahri.info.difficulty 
        },
        tags: [
          response.data.data.Ahri.tags[0],
          response.data.data.Ahri.tags[1]
        ]
      });

      champions.push({
        id: response.data.data.Akali.id,
        name: response.data.data.Akali.name,
        img: `${imgUrl}/${response.data.data.Akali.id}_0.jpg`,
        info: {
          attack: response.data.data.Akali.info.attack,
          defense: response.data.data.Akali.info.defense,
          magic: response.data.data.Akali.info.magic,
          difficulty: response.data.data.Akali.info.difficulty 
        },
        tags: [
          response.data.data.Akali.tags[0],
          response.data.data.Akali.tags[1]
        ]
      });

      champions.push({
        id: response.data.data.Alistar.id,
        name: response.data.data.Alistar.name,
        img: `${imgUrl}/${response.data.data.Alistar.id}_0.jpg`,
        info: {
          attack: response.data.data.Alistar.info.attack,
          defense: response.data.data.Alistar.info.defense,
          magic: response.data.data.Alistar.info.magic,
          difficulty: response.data.data.Alistar.info.difficulty 
        },
        tags: [
          response.data.data.Alistar.tags[0],
          response.data.data.Alistar.tags[1]
        ]
      });

      champions.push({
        id: response.data.data.Amumu.id,
        name: response.data.data.Amumu.name,
        img: `${imgUrl}/${response.data.data.Amumu.id}_0.jpg`,
        info: {
          attack: response.data.data.Amumu.info.attack,
          defense: response.data.data.Amumu.info.defense,
          magic: response.data.data.Amumu.info.magic,
          difficulty: response.data.data.Amumu.info.difficulty 
        },
        tags: [
          response.data.data.Amumu.tags[0],
          response.data.data.Amumu.tags[1]
        ]
      });

      champions.push({
        id: response.data.data.Anivia.id,
        name: response.data.data.Anivia.name,
        img: `${imgUrl}/${response.data.data.Anivia.id}_0.jpg`,
        info: {
          attack: response.data.data.Anivia.info.attack,
          defense: response.data.data.Anivia.info.defense,
          magic: response.data.data.Anivia.info.magic,
          difficulty: response.data.data.Anivia.info.difficulty 
        },
        tags: [
          response.data.data.Anivia.tags[0],
          response.data.data.Anivia.tags[1]
        ]
      });

      champions.push({
        id: response.data.data.Annie.id,
        name: response.data.data.Annie.name,
        img: `${imgUrl}/${response.data.data.Annie.id}_0.jpg`,
        info: {
          attack: response.data.data.Annie.info.attack,
          defense: response.data.data.Annie.info.defense,
          magic: response.data.data.Annie.info.magic,
          difficulty: response.data.data.Annie.info.difficulty 
        },
        tags: [
          response.data.data.Annie.tags[0],
          response.data.data.Annie.tags[1]
        ]
      });

      champions.push({
        id: response.data.data.Ashe.id,
        name: response.data.data.Ashe.name,
        img: `${imgUrl}/${response.data.data.Ashe.id}_0.jpg`,
        info: {
          attack: response.data.data.Ashe.info.attack,
          defense: response.data.data.Ashe.info.defense,
          magic: response.data.data.Ashe.info.magic,
          difficulty: response.data.data.Ashe.info.difficulty 
        },
        tags: [
          response.data.data.Ashe.tags[0],
          response.data.data.Ashe.tags[1]
        ]
      });

      champions.push({
        id: response.data.data.AurelionSol.id,
        name: response.data.data.AurelionSol.name,
        img: `${imgUrl}/${response.data.data.AurelionSol.id}_0.jpg`,
        info: {
          attack: response.data.data.AurelionSol.info.attack,
          defense: response.data.data.AurelionSol.info.defense,
          magic: response.data.data.AurelionSol.info.magic,
          difficulty: response.data.data.AurelionSol.info.difficulty 
        },
        tags: [
          response.data.data.AurelionSol.tags[0],
          response.data.data.AurelionSol.tags[1]
        ]
      });

      champions.push({
        id: response.data.data.Azir.id,
        name: response.data.data.Azir.name,
        img: `${imgUrl}/${response.data.data.Azir.id}_0.jpg`,
        info: {
          attack: response.data.data.Azir.info.attack,
          defense: response.data.data.Azir.info.defense,
          magic: response.data.data.Azir.info.magic,
          difficulty: response.data.data.Azir.info.difficulty 
        },
        tags: [
          response.data.data.Azir.tags[0],
          response.data.data.Azir.tags[1]
        ]
      });


      // res.status(200).json(response.data.data.Aatrox)
      res.status(200).json(champions);
      // res.status(200).json(response.data.data)
      
    })
    .catch( error => handleError(res, error, 'Error en campeones'));

  })
  .catch( error => handleError(res, error, 'Error en información de servidor LAN'));

});


module.exports = app;