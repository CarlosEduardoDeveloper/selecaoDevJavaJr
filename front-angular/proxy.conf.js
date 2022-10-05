const PROXY_CONFIG = [
  {
    context: ['/gerenciador'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
