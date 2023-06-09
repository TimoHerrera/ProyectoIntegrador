
/* El modelo es una función que recibe 2 parámetros. Se hace un Modelo por cada tabla de la base de datos */
module.exports = function(sequelize, dataTypes) {

    /* Crear 3 variables */
    let alias = "Usuario"; /* Un apodo para requerirlo en los controllers */

    /* Mapeo exacto de cada una de las columnas */
    let cols = {
        id_usuario:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        pssword:{
            type: dataTypes.STRING,
        },
        //foto_perfil:{
        //    type: dataTypes.STRING,
        //},
        fecha:{
            type: dataTypes.DATE,
        },
        dni:{
            type: dataTypes.INTEGER,
        },
        imagen_usuario:{
            type: dataTypes.STRING,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE, //fijarse si esta bien el timestamp
        },
    };

    /* Objeto literal para configurar la tabla */
    let config = {
        tableName: 'usuarios',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };
    const Usuario = sequelize.define(alias, cols, config);
    

    // creo la relacion entre producto y usuario
     Usuario.associate=function (models) {
         Usuario.hasMany(models.Producto,{
             as:"Producto",
             foreignKey:"id_usuario"
         } )
         Usuario.hasMany(models.Comentario,{
            as:"Comentario",
            foreignKey:"id_usuario"
    
         })
     };
    return Usuario;
}