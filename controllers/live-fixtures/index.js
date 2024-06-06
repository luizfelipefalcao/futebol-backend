import axios from 'axios';

const HEADERS = {
    'x-apisports-key': process.env.APISPORTS_KEY,
    'x-rapidapi-host': process.env.APISPORTS_HOST,
}

export const getLiveFixtures = async (req, res) => {
    try {
        const response = await axios.get('https://v3.football.api-sports.io/fixtures?live=all', {
            headers: HEADERS,
        });

        const standings = response.data;
        res.json(standings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}