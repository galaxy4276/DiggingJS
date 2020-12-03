import express from "express";
import { getCreate, getHome, postCreate, getMovie, patchMovie, deleteMovie, searchMovies } from './movieController';

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get('/create', getCreate);
movieRouter.get('/search', searchMovies);
movieRouter.get('/', getHome);
movieRouter.get('/:_id/edit', getMovie);
movieRouter.post('/:_id/edit', patchMovie);
movieRouter.get('/:_id/delete', deleteMovie);
movieRouter.get('/:_id', getMovie);
movieRouter.post('/create', postCreate);

export default movieRouter;
