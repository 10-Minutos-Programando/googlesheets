const { Router } = require('express');
const router = Router();

const {
    obtenerVideos,
    pintarForm,
    guardarVideo
} = require('../controllers/google.controller');

router.get('/', obtenerVideos);
router.get('/form', pintarForm);
router.post('/form', guardarVideo);

module.exports = router;