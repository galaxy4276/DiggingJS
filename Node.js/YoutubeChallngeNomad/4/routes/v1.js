import { getBuyAPI, getRefundAPI } from '../controllers/v1';

const router = require('express').Router();

router.get('/buy', getBuyAPI);
router.get('/refund', getRefundAPI);

export default router;