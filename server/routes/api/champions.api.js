const express = require('express');
const axios = require('axios');

const app = express();


const url = 'http://ddragon.leagueoflegends.com';
const imgUrl = '';
const champions = [{}];
const champion = {
  id: '',
  img: {
    loading: '',
    icon: ''
  },
  description: ''
};

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

      res.status(200).json(response.data.data)
      
    })
    .catch( error => handleError(res, error, 'Error en campeones'));

  })
  .catch( error => handleError(res, error, 'Error en información de servidor LAN'));

});


module.exports = app;