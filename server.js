import express from 'express';
import bodyParser from "body-parser";

import appRoutes from './routes/index.js'

const app = express();
const PORT = 3333;

app.use(bodyParser.json());

app.use('/', appRoutes);
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
