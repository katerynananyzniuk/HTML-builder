const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');

fs.writeFile( filePath, '', (err) => {
    if (err) throw err
})

console.log('Hi! Enter something:');

rl.on('line', line => {
    line = line.trim();

    fs.appendFile( filePath, line + `\n`, err => {
        if (err) throw err
    })

    if (line === 'exit') {
      console.log('Bye!');
      process.exit(0);
    } 
});

rl.on('SIGINT', () => {
  console.log('Bye!');
  process.exit(0);
});