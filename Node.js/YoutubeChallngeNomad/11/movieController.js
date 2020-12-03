import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();

  res.render('movies', { movies });
};
export const movieDetail = (req, res) => {
  const movie = getMovieById(req.params.id);
  console.log(movie);
  res.render('detail', { movie });
};
export const filterMovie = (req, res) => {
  if (req.query.year) {
    if (Number.isNaN(parseInt(req.query.year), 10)) {
      throw Error('💔 Fault Parameter');
    }
    return res.render(
        'movies',
        {
          movies: getMovieByMinimumYear(req.query.year),
        },
      );
  }

  if (req.query.rating) {
    if (Number.isNaN(parseInt(req.query.rating), 10)) {
      throw Error('💔 Fault Parameter');
    }
    return res.render(
      'movies',
      {
        movies: getMovieByMinimumRating(req.query.rating),
      },
    );
  }

  throw Error("💢 Parameter Exeception. ");
};
