const express = require('express')
const axios = require('axios')
require('dotenv').config()


const app = express();
const PORT = 3333;
const HEADERS = {
    'x-apisports-key': '55e2f9aedf05ca7a0637960f48d52ab3',
    'x-rapidapi-host': 'v3.football.api-sports.io',
    // 'Content-Type': 'text/event-stream',
    // 'Connection': 'keep-alive',
    // 'Cache-Control': 'no-cache'
}

app.use(express.json());

app.get('/standings', async (req, res) => {
    try {
        const { league, season } = req.query;
        const response = await axios.get(`https://v3.football.api-sports.io/standings`, {
            params: {
                league,
                season,
            },
            headers: HEADERS,
        });

        const standings = response.data;

        // const headers = {
        //     'Content-Type': 'text/event-stream',
        //     'Connection': 'keep-alive',
        //     'Cache-Control': 'no-cache'
        // };
        // res.writeHead(200, headers);
        // res.write(standings);

        res.json(standings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', async (req, res) => {
    res.json({ "id": 'test' })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
