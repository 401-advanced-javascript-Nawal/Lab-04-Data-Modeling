'use strict';

const Products = require('../products/products.js');

describe('Products Model', () => {

    let products;

    beforeEach(() => {
        products = new Products();
    });

    it('can post() a new product', () => {
        let obj = { price : 31 , weight : 15 , quantity_in_stock : 13 };
        return products.create(obj)
          .then(record => {
            Object.keys(obj).forEach(key => {
              expect(record[key]).toEqual(obj[key]);
            });
          })
          .catch(e => console.error('ERR', e));
      }); // end of create method 


}); // end of Products Model 

