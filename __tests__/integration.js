const HttpF = require('node-http-fetchers/src');

const urls = [
  'http://127.0.0.1',
  'http://127.0.0.1:80',
  'https://google.com',
];

HttpF(urls); 