const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./abc.js')
}, 1000);