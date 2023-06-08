const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({
  dest: 'uploads/' // Direktori tujuan untuk menyimpan file
});
const { FileStorage } = require('@railway/app-tools');

