import express from 'express';
import bodyParser from "body-parser";
import 'dotenv/config'

import appRoutes from './routes/index.js'

const app = express();
app.use(bodyParser.json());

app.use('/', appRoutes);
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

