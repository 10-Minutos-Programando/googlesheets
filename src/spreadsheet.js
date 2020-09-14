const { GoogleSpreadsheet } = require('google-spreadsheet');

const credenciales = require('./json/credenciales.json');

let googleId = "PONER AQUI EL GOOGLE ID DEL DOCUMENTO";

async function accederGoogleSheet() {

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();

    const sheet = documento.sheetsByIndex[0];
    const registros = await sheet.getRows();

    return registros;

}

async function guardarVideo(pObjeto) {

    //console.log(pObjeto);

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    const sheet = documento.sheetsById[0];

    await sheet.addRow(pObjeto);

}


module.exports = {
    accederGoogleSheet: accederGoogleSheet,
    guardarVideo: guardarVideo
}