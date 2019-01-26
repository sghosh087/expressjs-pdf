const puppeteer = require('puppeteer');
const convertHTMLToPDF = require("pdf-puppeteer");
 
exports.generatePDFFromURL =  async(req, res) => {
    let url = req.body.url;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
  
    // This will save file in the disk.
    //await page.pdf({path: '4d.pdf', format: 'A4', printBackground: true});

    // This won't save in the disk will save in buffer.
    const buffer = await page.pdf({format: 'A4', printBackground: true});
 
    await browser.close();
    res.setHeader("Content-Type", "application/pdf");
    res.send(buffer);
}


exports.generatePDFFromHTML = async (req, res) => {
    /**
    *    Usage
    *    @param html - This is the html to be converted to a pdf
    *    @param callback - Do something with the PDF
    *    @param [options] - Optional parameter to pass in Puppeteer PDF options
    *    @param [puppeteerArgs] - Optional parameter to pass in Puppeter arguments
    *    @param [remoteContent] - Default true. Optional parameter to specify if there is no remote content. Performance will be opitmized for no remote content.
    */
    let html = req.body.html;
    let options = {format: 'A4', printBackground: true};
    await convertHTMLToPDF(html, (pdf) => {
        res.setHeader("Content-Type", "application/pdf");
        res.send(pdf);
    }, options);
}

