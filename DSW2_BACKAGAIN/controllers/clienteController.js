const { Router } = require('express');
const { Cliente } = require('../models');

const router = Router();

router.get('/', async (req, res) => 
{
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
});

router.get('/:id', async (req, res) => 
{
    const clientes = await Cliente.findByPk(req.params.id);
    res.status(200).json(clientes);
});

router.post('/', async (req, res) => 
{
    const { nome, telefone } = req.body;
    const newCliente = Cliente.create({ nome, telefone });
  
    res.status(200).json({ message: 'cadastrado com sucesso!' });
});

router.delete('/:id', async (req, res) => 
{
    await Cliente.destroy(
    {
      where: 
      {
        id: req.params.id,
      },
    });
  
    res.status(200).json({ message: 'excluido com sucesso!' });
});

router.put('/:id', async (req, res) => 
{
    const { nome , telefone } = req.body;
  
    await Cliente.update(
      { nome, telefone},
      {
        where: { id: req.params.id },
      }
    );
  
    res.status(200).json({ message: 'atualizado com sucesso!' });
  });

module.exports = router;