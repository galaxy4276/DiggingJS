import multer from 'multer';
import path from 'path';
import fs from 'fs';

export const uploads = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.join(__dirname, '../', 'uploads'));
    },
    filename(req, file, cb) {
      const basename = path.basename(file.originalname);
      cb(null, basename);
    }
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});


export const getIndex = (req, res, next) => {
  res.render('index');
}

export const uploadFile = (req, res, next) => {
  const file = fs.readFileSync(path.join(__dirname, '../', 'uploads', req.file.filename));

  res.send(`<h3>${file}</h3>`);
  res.end();
}