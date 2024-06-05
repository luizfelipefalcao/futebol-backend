import axios from 'axios';

const HEADERS = {
    'x-apisports-key': '55e2f9aedf05ca7a0637960f48d52ab3',
    'x-rapidapi-host': 'v3.football.api-sports.io',
}

export const getStandings = async (req, res) => {
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
        res.json(standings);

        // const headers = {
        //     'Content-Type': 'text/event-stream',
        //     'Connection': 'keep-alive',
        //     'Cache-Control': 'no-cache'
        // };
        // res.writeHead(200, headers);
        // res.write(standings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}