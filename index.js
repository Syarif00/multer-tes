const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({
  dest: "uploads/", // Direktori tujuan untuk menyimpan file
});
const { FileStorage } = require("@railway/app-tools");

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const fileId = await FileStorage.upload(file.originalname, file.path);
    res.send(`File uploaded successfully. File ID: ${fileId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading file.");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
