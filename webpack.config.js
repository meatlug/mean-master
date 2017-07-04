const yargs = require('yargs').argv;

switch (yargs.env) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod');
        break;
    case 'test':
    case 'testing':
        module.exports = require('./config/webpack.test');
        console.log('testting')
        break;
    case 'dev':
    case 'development':
    default:
        console.log(yargs);
        module.exports = require('./config/webpack.dev');
}
