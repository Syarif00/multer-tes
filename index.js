const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({
  dest: 'uploads/' // Direktori tujuan untuk menyimpan file
});

app.post('/upload', upload.single('file'), (req, res) => {
    try {
      const file = req.file;
      // Lakukan operasi yang diperlukan pada file
      res.send('File uploaded successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error uploading file.');
    }
  });

  const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});