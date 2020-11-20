import { getDocumentation } from '../controllers/api';

const router = require('express').Router();

router.get('/documentation', getDocumentation);

export default router;