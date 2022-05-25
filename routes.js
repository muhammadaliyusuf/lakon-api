const {
  addWayangHandler,
  getAllWayangsHandler,
  getWayangByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/wayangs',
    handler: addWayangHandler,
  },
  {
    method: 'GET',
    path: '/wayangs',
    handler: getAllWayangsHandler,
  },
  {
    method: 'GET',
    path: '/wayangs/{wayangId}',
    handler: getWayangByIdHandler,
  },
];

module.exports = routes;
