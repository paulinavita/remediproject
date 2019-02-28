'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let symps = [
      {
        "name": "Pusing/Demam",
        "description": "desc",
        "DrugId": "1",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Gatal",
        "description": "desc",
        "DrugId": "2",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Kelelahan",
        "description": "desc",
        "DrugId": "3",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Gampang letih",
        "description": "desc",
        "DrugId": "4",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Batuk berdahak",
        "description": "desc",
        "DrugId": "5",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Kulit memerah",
        "description": "desc",
        "DrugId": "6",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Batuk kering",
        "description": "desc",
        "DrugId": "6",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Maag",
        "description": "desc",
        "DrugId": "7",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Darah tinggi",
        "description": "desc",
        "DrugId": "8",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Perut perih",
        "description": "desc",
        "DrugId": "9",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Sakit gigi",
        "description": "desc",
        "DrugId": "10",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Radang tenggorokan",
        "description": "desc",
        "DrugId": "11",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Radang",
        "description": "desc",
        "DrugId": "12",
        "createdAt": new Date (),
        "updatedAt": new Date ()
      },
      {
        "name": "Pilek",
        "description": "desc",
        "DrugId": "13",
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
