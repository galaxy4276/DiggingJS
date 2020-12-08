import {getIndex, uploadFile} from "../controllers/globalControllers";
import { uploads } from '../controllers/globalControllers';

const globalRouter = require('express').Router();

globalRouter.get('/', getIndex);
globalRouter.post('/read', uploads.single('text'), uploadFile);

export default globalRouter;