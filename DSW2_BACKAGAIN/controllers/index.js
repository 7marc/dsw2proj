const { request } = require('express');

const clienteController = require('./clienteController');
const maquinaController = require('./maquinaController');

module.exports = 
{
  clientes: clienteController,
  maquinas: maquinaController,
};
