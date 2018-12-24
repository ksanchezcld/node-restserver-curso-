process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento de Token
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//Seed de Autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
    //urlDB = 'mongodb://cafeusr:J4zM!CepPqKwGfm%@ds157444.mlab.com:57444/cafe';
}
process.env.URLDB = urlDB;

//Google Client ID

process.env.CLIENT_ID = process.env.CLIENT_ID || '583617468010-ogpvq0gug1uktm8trs48pkph3v3f7pvd.apps.googleusercontent.com'