let googleSheet = require('../spreadsheet');

const obtenerVideos = async (req, res) => {
    registros = await googleSheet.accederGoogleSheet();
    res.render('index', { registros });

}

const pintarForm = (req, res) => {
    res.render('form', {});
}

const guardarVideo = (req, res) => {
    googleSheet.guardarVideo(req.body);
    res.redirect('/');
}

module.exports = {
    obtenerVideos: obtenerVideos,
    pintarForm: pintarForm,
    guardarVideo: guardarVideo

}