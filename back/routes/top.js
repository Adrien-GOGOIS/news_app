const express = require("express");
const app = express();
const router = express.Router();

const axios = require('axios').default;

router.get('/', async(req, res) => {
    axios({
            method: 'get',
            url: 'https://newsapi.org/v2/top-headlines?country=fr',
            params: {
                apiKey: process.env.API_KEY
            }
        })
    .then(function (response) {
        res.json({
            data: response.data.articles
        })
    });
})

module.exports = router;