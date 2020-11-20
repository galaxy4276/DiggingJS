import { getConfirmAccount, getHome, getJoin, getLogin } from '../controllers/global';

const router = require('express').Router();

router.get('/', getHome);
router.get('/join', getJoin);
router.get('/login', getLogin);
router.get('/confirm-account', getConfirmAccount);

export default router;