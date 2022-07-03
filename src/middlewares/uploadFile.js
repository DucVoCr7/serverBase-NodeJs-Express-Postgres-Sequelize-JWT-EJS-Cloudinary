import formidable from "formidable";
import 'dotenv/config'

const uploadFile = (req, res, next) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    req.body = fields
    req.files = files
    next()
  });
}
export default uploadFile