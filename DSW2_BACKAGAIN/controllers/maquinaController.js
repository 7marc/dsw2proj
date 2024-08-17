const { Router } = require('express');
const { Maquina } = require('../models');

const router = Router();

router.get('/', async (req, res) => 
{
    const maquinas = await Maquina.findAll();
    res.status(200).json(maquinas);
});

router.get('/:id', async (req, res) => 
{
    const maquinas = await Maquina.findByPk(req.params.id);
    res.status(200).json(maquinas);
});

router.post('/', async (req, res) => 
{
    const { nome, marca, modelo, clienteId } = req.body;
    const newMaquina = Maquina.create({ nome, marca, modelo, clienteId });
    
    res.status(200).json({ message: 'maquina cadastrada com sucesso!' });
});

router.delete('/:id', async (req, res) => 
    {
        await Maquina.destroy(
        {
          where: 
          {
            id: req.params.id,
          },
        });
      
        res.status(200).json({ message: 'maquina excluida com sucesso!' });
    });


router.put('/:id', async (req, res) => 
    {
        const { nome, marca, modelo, clienteId } = req.body;
        
        await Maquina.update(
            { nome, marca, modelo, clienteId},
            {
            where: { id: req.params.id },
            }
        );
        
        res.status(200).json({ message: 'atualizado com sucesso!' });
        });
    
    module.exports = router;