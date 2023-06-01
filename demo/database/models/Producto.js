const { productos } = require("../../db/modulo");

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
    const Producto = sequelize.define(alias, cols, config); //traigo el parametro sequelize (es un ol), que tiene un metodo pincipal define que ayuda a definir mi modelo cone esos tres parametros
           
    // creo las relaciones 
             Producto.associate=function(models) {
                 // pertenece a
                         Producto.belongsTo(models.Usuario,{
                         as:"usuarios", //era con el nombre de la tabla o el alias?
                         foreingKey:"id_usuario"
                     } ),
                     Producto.belongsToMany(models.Comentario,{
                        as:"comentarios",
                        through:"usuarios",//tabla pivot no se si esta bien
                        foreingKey:"id_producto", //no estoy seguro si la foreing y la other key estan bien puestas
                        otherkey:"id_comentario",
                        timestamps: false
                     })
                 };
        
    return Producto;
}