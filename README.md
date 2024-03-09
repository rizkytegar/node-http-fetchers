# Node HTTP Fetchers
Checking website and server uptime and looking for downed websites with nodejs (Multi website).

# Detail
![https://raw.githubusercontent.com/rizkytegar/node-http-fetchers/master/test/test.png](https://raw.githubusercontent.com/rizkytegar/node-http-fetchers/master/test/test.png)
# install
Install Module
```bash
npm install node-http-fetcher
``` 
# Setting URL or IP
Add the URL or IP of the server you want to test to the url list
```js
const HttpF = require('node-http-fetchers');

const urls = [
  'http://127.0.0.1',
  'http://127.0.0.1:80',
  'http://127.0.0.1:3000',
];

HttpF(urls); 
```

# Footer
- This Project using [node-fetch](https://www.npmjs.com/package/node-fetch)

