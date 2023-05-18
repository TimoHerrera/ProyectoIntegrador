/* El modelo es una función que recibe 2 parámetros. Se hace un Modelo por cada tabla de la base de datos */
module.exports = function(sequelize, dataTypes) {

    /* Crear 3 variables */
    let alias = "Producto"; /* Un apodo para requerirlo en los controllers */

    /* Mapeo exacto de cada una de las columnas */
    let cols = {
        id_producto:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombreProducto:{
            type: dataTypes.STRING,
        },
        descripcionProducto:{
            type: dataTypes.STRING,
        },
        id_usuario:{
            type: dataTypes.INTEGER,
        },
    };

    /* Objeto literal para configurar la tabla */
    let config = {
        tableName: 'productos',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };
    const Productos = sequelize.define(alias, cols, config); //traigo el parametro sequelize (es un ol), que tiene un metodo pincipal define que ayuda a definir mi modelo cone esos tres parametros
    
    return Productos;
}