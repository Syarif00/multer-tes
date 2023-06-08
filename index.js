const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// Konfigurasi Multer untuk menyimpan file gambar
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedExtensions = [".jpg", ".jpeg", ".png"];
    const ext = path.extname(file.originalname);
    if (allowedExtensions.includes(ext.toLowerCase())) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

// Endpoint POST untuk mengunggah file gambar
app.post("/upload", upload.single("image"), (req, res) => {
  // Akses informasi file yang diunggah melalui req.file
  // Lakukan pemrosesan file gambar sesuai kebutuhan Anda

  res.status(200).json({ message: "Image uploaded successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
