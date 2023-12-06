export const standings = async (req, res) => {
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}