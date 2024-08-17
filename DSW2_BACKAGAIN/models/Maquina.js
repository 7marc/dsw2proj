const Product = (sequelize, DataTypes) =>
    {
        return sequelize.define('Maquina', 
        {
          nome: DataTypes.STRING,
          marca: DataTypes.STRING,
          modelo: DataTypes.STRING,
          clienteId: DataTypes.INTEGER
        });
    };
      
      module.exports = Product;
      