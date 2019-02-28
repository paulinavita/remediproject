'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let drugs = [
      {
        "name": "Paracetamol",
        "price": "8000",
        "description": "desc",
        "brandName": "Panadol / Paracetamol Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Klorfeniramin Maleat",
        "price": "3500",
        "description": "desc",
        "brandName": "CTM",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Thiamin",
        "price": "6000",
        "description": "desc",
        "brandName": "B1 IPI",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Vit B Complex",
        "price": "12000",
        "description": "desc",
        "brandName": "Vitamin B Complex Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Gliseril Guaiacolat",
        "price": "19500",
        "description": "desc",
        "brandName": "Bisolvon Extra",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Deksametason",
        "price": "8000",
        "description": "desc",
        "brandName": "Deksametason / Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Antasida DOEN",
        "price": "18000",
        "description": "desc",
        "brandName": "Antasida DOEN / Promag",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Captopril",
        "price": "22000",
        "description": "desc",
        "brandName": "Captopril / Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Ranitidin",
        "price": "25000",
        "description": "desc",
        "brandName": "Ranitidin / Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {

        "name": "Asam mefenamat",
        "price": "12000",
        "description": "desc",
        "brandName": "Ponstan ",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {

        "name": "Troches",
        "price": "20000",
        "description": "desc",
        "brandName": "Meiji Troches",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {

        "name": "Dekstromehorphan HBr",
        "price": "19000",
        "description": "desc",
        "brandName": "Woods Peppermint",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {

        "name": "Dekongestan",
        "price": "50000",
        "description": "desc",
        "brandName": "Rhinos SR",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      }
    ]
    return queryInterface.bulkInsert('Drugs', drugs, {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete('Drugs', drugs, {});

  }
};
