'use strict ';

const fs = require('fs');
const util = require('util');


let file = `${__dirname}/data/categories.db`;

let readFilepromisify = util.promisify(fs.readFile);

/******************** READ****************************/

readFilepromisify(file)
    .then(data => 
        {
            console.log('data promisify : ',JSON.parse(data.toString()))
            return JSON.parse(data.toString());
        })
    .then(data => writeFile( file, data))
    .catch(error => console.error('There is an error , promise',error))


// Third Way to read a file with FS (Promisify) & async function
async function readFileAsync (file) {
    try
    {
        let data = await readFilepromisify(file);
    }
    catch(error) 
    {
        console.error('There is an error , async',error)
    }
}

readFileAsync(file);

/****************************************** Write *************************************************************/

let writeFilepromisify = util.promisify(fs.writeFile);

const writeFile = (file,data) =>
{
    console.log('data in write function : ', data);
    data.firstName = 'Nawal  Suliman ';
    console.log('data after updated : ', data);
    let data2 = JSON.stringify(data);
    writeFilepromisify(file,data2)
}