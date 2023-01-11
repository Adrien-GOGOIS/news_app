const express = require("express");
const app = express();
const router = express.Router();

const axios = require('axios').default;

const sortByDate = require('../utils/dataSorting')

router.get('/', async(req, res) => {
    res.send("<h1>All</h1>");
})

router.get('/:news', async(req, res) => {
    const requestParams = {}
    if (req.query.q) { requestParams.q = req.query.q }
    if (req.query.language) { requestParams.language = req.query.language }

    axios({
            method: 'get',
            url: 'https://newsapi.org/v2/everything',
            params: {
                q: requestParams.q,
                language: requestParams.language,
                apiKey: process.env.API_KEY
            }
        })
    .then(function (response) {
        res.json({
            data: sortByDate(response.data.articles)
        })
    });
})

module.exports = router;