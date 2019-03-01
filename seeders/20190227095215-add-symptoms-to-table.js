'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let symps = [
      {
        "name": "Pusing/Demam",
        "description": "desc",
        "drugId": "1",
        "drugName": "Paracetamol",
        "price": "8000",
        "brandName": "Panadol / Paracetamol Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Gatal",
        "description": "desc",
        "drugId": "2",
        "drugName": "Klorfeniramin Maleat",
        "price": "3500",
        "brandName": "CTM",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Kelelahan",
        "description": "desc",
        "drugId": "3",
        "drugName": "Thiamin",
        "price": "6000",
        "brandName": "B1 IPI",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Gampang letih",
        "description": "desc",
        "drugId": "4",
        "drugName": "Vit B Complex",
        "price": "12000",
        "brandName": "Vitamin B Complex Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Batuk berdahak",
        "description": "desc",
        "drugId": "5",
        "drugName": "Gliseril Guaiacolat",
        "price": "19500",
        "brandName": "Bisolvon Extra",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Kulit memerah",
        "description": "desc",
        "drugId": "6",
        "drugName": "Deksametason",
        "price": "8000",
        "brandName": "Deksametason / Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Batuk kering",
        "description": "desc",
        "drugId": "6",
        "drugName": "Captopril",
        "price": "22000",
        "brandName": "Captopril / Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Maag",
        "description": "desc",
        "drugId": "7",
        "drugName": "Ranitidin",
        "price": "25000",
        "brandName": "Ranitidin / Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Darah tinggi",
        "description": "desc",
        "drugId": "8",
        "drugName": "Captopril",
        "price": "22000",
        "brandName": "Captopril / Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Perut perih",
        "description": "desc",
        "drugId": "9",
        "drugName": "Ranitidin",
        "price": "25000",
        "brandName": "Ranitidin / Generik",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Sakit gigi",
        "description": "desc",
        "drugId": "10",
        "drugName": "Asam mefenamat",
        "price": "12000",
        "brandName": "Ponstan ",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Radang tenggorokan",
        "description": "desc",
        "drugId": "11",
        "drugName": "Troches",
        "price": "20000",
        "brandName": "Meiji Troches",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Radang",
        "description": "desc",
        "drugId": "12",
        "drugName": "Dekstromehorphan HBr",
        "price": "19000",
        "brandName": "Woods Peppermint",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Pilek",
        "description": "desc",
        "drugId": "13",
        "drugName": "Dekongestan",
        "price": "50000",
        "brandName": "Rhinos SR",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      }
    ]
    
    return queryInterface.bulkInsert('Symptoms', symps, {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete('Symptoms', symps, {});

  }
};
