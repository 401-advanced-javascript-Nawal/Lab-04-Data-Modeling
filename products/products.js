'use strict';

const DataModel = require('../memory-data-model.js');

class Products extends DataModel {

    constructor()
    {
        super();
        this.schema = {
            category_id : { type : 'string', required : true},
            price : { type : 'number', required : true},
            weight : Number,
            quantity_in_stock : { type : 'number',required : true}
        }
    } // end of constructor function 
} // end of Products class 

module.exports = Products ;