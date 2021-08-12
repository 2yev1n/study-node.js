const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for(let i = 0; i < 10; i++) {
    file.write('안녕하세요! \n');
}
file.end();