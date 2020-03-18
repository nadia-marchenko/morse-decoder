const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let solution = "";
    for(let i = 0; i < expr.length/10; i++){
        solution += decodeSymbol(expr.slice(i*10,(i + 1)*10));
    }
    return solution;
}

function decodeSymbol (str) {
    let arr = [];
    let newStr = "";
    if (str == "**********") {
        return " ";
    }
    for (let i = 0; i < str.length/2; i++) {
        arr.push(str.slice(i*2,(i+1)*2));
    }
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == "00")
        newStr += "";
        else {
            if (arr[i] == "11") {
            newStr += "-";
            }
            else {
                if (arr[i] == "10"){
                    newStr += ".";
                }
            }
        }
        
    }
    
    return new Map(Object.entries(MORSE_TABLE)).get(newStr);
}

module.exports = {
    decode
}
