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
        nombre_producto	:{
            type: dataTypes.STRING,
        },
        descripcion_producto:{
            type: dataTypes.STRING,
        },
        precio:{
            type: dataTypes.DECIMAL,
        },
        id_usuario:{
            type: dataTypes.INTEGER,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE, //fijarse si esta bien el timestamp
        }
    };

    /* Objeto literal para configurar la tabla */
    let config = {
        tableName: 'productos',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };
    const Producto = sequelize.define(alias, cols, config); //traigo el parametro sequelize (es un ol), que tiene un metodo pincipal define que ayuda a definir mi modelo cone esos tres parametros
           
    // creo las relaciones 
             Producto.associate = function(models) {
                 // pertenece a
                        Producto.belongsTo(models.Usuario,{
                            as:"usuarios", //es con el alias
                            foreignKey:"id_usuario"
                        } ),
                        Producto.hasMany(models.Comentario,{
                            as:"comentarios",
                            foreignKey:"id_producto"
                    
                        })
                 };
        
                        return Producto;
                    }