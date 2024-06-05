import express from 'express';

import { getStandings } from '../controllers/standings/index.js';
import { getFixtureEvents } from '../controllers/events/index.js';
import { getLiveFixtures } from '../controllers/live-fixtures/index.js';

const router = express.Router();

router.get('/standings', getStandings);
router.get('/fixtures', getFixtureEvents);
router.get('/live', getLiveFixtures);

export default router;