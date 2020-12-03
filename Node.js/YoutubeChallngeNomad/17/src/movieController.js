/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const searchMovies = async (req, res, next) => {
  const { year, rating } = req.query;
  try {
    let movies = {};
    let query;
    if (year && rating) {
      throw Error("enter only one query arguments ☺");
    }

    if (year) {
      movies = await Movie.find().where('year').gte(parseInt(year));
      query = 'year: ' + year;
    }
    if (rating) {
      movies = await Movie.find().where('rating').gte(parseInt(rating));
      query = 'rating:' + rating;
    }

    return res.render('home', { movies, msg: `Searching By ${query}` });
  } catch (err) {
    console.log(err);
    next(err);
  }
}
export const getHome = async (req, res, next) => {
  try {
    const movies = await Movie.find({}).sort({ _id: -1 });
    return res.render('home', { movies });
  } catch (err) {
    console.log(err);
    next(err);
  }
}


export const getCreate = (req, res, next) => {
  res.render('create', {});
}

export const postCreate = async (req, res, next) => {
  const {
    title, year, rating, synopsis, genres
  } = req.body;

  if (title.length < 3) {
    throw Error('😅😅 title length at least 3 characters.');
  }

  if (isNaN(year)) {
    throw Error('🥱🥱 year must Number.');
  }

  const arrGenres = genres.split(',');

  try {
    const movie = await Movie.findOne({ title }, (err, data) => {
      if (err) throw Error("cause mongodb error");
      return data;
    });
  
    if (!movie) {
      const createMovie = await Movie.create({
        title,
        year,
        rating,
        synopsis,
        genres: arrGenres,
      });

      return res.redirect(`/${createMovie._id}`);
    } else {
      return res.redirect('/');
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export const patchMovie = async (req, res, next) => {
  const {
    title, year, rating, synopsis, genres
  } = req.body;
  const { _id } = req.params;

  if (title.length < 3) {
    throw Error('😅😅 title length at least 3 characters.');
  }

  if (isNaN(year)) {
    throw Error('🥱🥱 year must Number.');
  }

  try {
    const movie = await Movie.findOneAndUpdate(
      { _id },
      { title, year, rating, synopsis, genres },
      (err, data) => {
      if (err) throw Error("cause mongodb error");
    });
    
    return res.redirect(`/${movie._id}`);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export const getMovie = async (req, res, next) => {
  const {
    _id
  } = req.params;

  try {
    const movie = await Movie.findOne({ _id }, (err, data) => {
      if (err) next(err);
      return data;
    });
    let genres = movie.genres.join(',');
    genres = genres.split(',').map(data => data.trim());

    if ((req.url).includes('edit')) {
      return res.render('edit', { movie, genres: genres.join() });
    }

    return res.render('movie', { movie, genres });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export const deleteMovie = async (req, res, next) => {
  const { _id } = req.params;

  try {
    const movie = await Movie.remove({ _id }, () => console.log('Sucessfully Remove data.'));
    movie.deleteCount;

    return res.redirect('/');
  } catch (err) {
    console.log(err);
    next(err);
  }
}

