import { getCourses, getMine, getNew } from '../controllers/course';

const router = require('express').Router();

router.get('/', getCourses);
router.get('/new', getNew);
router.get('/mine', getMine);

export default router;