import { getEditAPI, getRemoveAPI } from '../controllers/v2';

const router = require('express').Router();

router.get('/remove', getRemoveAPI);
router.get('/edit', getEditAPI);

export default router;