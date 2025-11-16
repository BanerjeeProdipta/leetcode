'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'perfectTeam' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING skills as parameter.
 */

function perfectTeam(skills) {
    const required = ['p','c','m','b','z'];
    const freq = {};

    for (let ch of skills) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let skill of required) {
        if (!freq[skill]) return 0;
    }

    return Math.min(...required.map(skill => freq[skill]));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const skills = readLine();

    const result = perfectTeam(skills);

    ws.write(result + '\n');

    ws.end();
}
