const Product = (sequelize, DataTypes) =>
{
    return sequelize.define('Cliente', 
    {
      nome: DataTypes.STRING,
      telefone: DataTypes.STRING
    });
};
  
  module.exports = Product;
  