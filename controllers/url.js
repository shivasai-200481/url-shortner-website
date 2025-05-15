
const shortid = require('shortid');
const {URL} = require('../models/url.js');
async function handleGenerateShortUrl(req, res) {
    const shortId = shortid.generate();
    const body = req.body;

    if (!body.url) return res.status(400).json({ error: "url is required" });

    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitedHistory: [],
        createdBy: req.user._id  // ✅ Add this line
    });

    return res.render('home', {
        id: shortId
    });
}


module.exports = {
    handleGenerateShortUrl,
}
