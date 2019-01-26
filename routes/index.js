const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdfController');

// Route to generate PDF from URL
router.post('/url2pdf',pdfController.generatePDFFromURL);

// Route to generate PDF from HTML
router.post('/html2pdf', pdfController.generatePDFFromHTML);

module.exports = router;