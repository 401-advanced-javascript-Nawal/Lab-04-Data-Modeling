'use strict';

const Products = require('../products/products.js');

describe('Products Model', () => {

    let products;

    beforeEach(() => {
        products = new Products();
    });

    it('can post() a new product', () => {
        let obj = { price: 31, weight: 15, quantity_in_stock: 13 };
        return products.create(obj)
            .then(record => {
                Object.keys(obj).forEach(key => {
                    expect(record[key]).toEqual(obj[key]);
                });
            })
            .catch(error => console.error('Error : Something Goes Wrong ', error));
    }); // end of create method 


    it('can get() a product', () => {
        let obj = { price: 31, weight: 15, quantity_in_stock: 13 };
        return products.create(obj)
            .then(record => {
                return products.get(record._id)
                    .then(prod => {
                        Object.keys(obj).forEach(key => {
                            expect(prod[0][key]).toEqual(obj[key]);
                        });
                    });
            })
            .catch(error => console.error('Error : Something Goes Wrong', error));
    }); // end of get method 

    it('can update() a product', () => {
        let obj = { price: 31, weight: 15, quantity_in_stock: 13 };
        return products.create(obj)
            .then(record => {
                products.get(record)
                products.update(record._id, record)
                    .then(prod => {
                        Object.keys(obj).forEach(key => {
                            expect(prod[key]).toEqual(obj[key]);
                        })
                    })
            })
            .catch(error => console.error('Error : Something Goes Wrong', error));
    }); // end of update method 

    it('can delete() a product', () => {
        let obj = { price: 31, weight: 15, quantity_in_stock: 13 };
        return products.create(obj)
            .then(record => {
                products.get(record)
                products.delete(record._id)
                    .then(prod => {
                        Object.keys(obj).forEach(key => {
                            expect(prod[key]).toEqual(obj[key]);
                        })
                    })
            })
            .catch(error => console.error('Error : Something Goes Wrong', error));
    }); // end of delete method 
}); // end of Products Model 

