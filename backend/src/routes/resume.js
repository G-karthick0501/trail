const express = require("express");
const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/optimize", upload.single("resume"), async (req, res) => {
  try {
    const formData = new FormData();
    formData.append("resume", fs.createReadStream(req.file.path));
    formData.append("jobDescription", req.body.jobDescription);

    const response = await axios.post("http://localhost:8000/optimize_resume", formData, {
      headers: formData.getHeaders(),
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

module.exports = router;
