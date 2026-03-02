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
 * Complete the 'findStopWords' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING text
 *  2. INTEGER k
 */
function findStopWords(text, k) {
    const words = text.split(" ").filter(w => w.length > 0);
    const freq = {};

    words.forEach(word => {
        freq[word] = (freq[word] || 0) + 1;
    });

    const seen = new Set();
    const result = [];

    for (let word of words) {
        if (freq[word] >= k && !seen.has(word)) {
            result.push(word);
            seen.add(word);
        }
    }

    return result;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const text = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = findStopWords(text, k);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
