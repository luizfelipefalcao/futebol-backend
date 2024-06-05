import axios from 'axios';

const HEADERS = {
    'x-apisports-key': '55e2f9aedf05ca7a0637960f48d52ab3',
    'x-rapidapi-host': 'v3.football.api-sports.io',
}

export const getFixtureEvents = async (req, res) => {
    try {
        const { fixture } = req.query;
        const response = await axios.get(`https://v3.football.api-sports.io/fixtures/events`, {
            params: {
                fixture,
            },
            headers: HEADERS,
        });

        const standings = response.data;
        res.json(standings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}