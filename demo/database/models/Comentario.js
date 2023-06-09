//recibe dos Ol como parametros
module.exports = function (sequelize,dataTypes) {
    let alias = 'Comentario';
    let cols = {
        id_posteo: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario:{
            type: dataTypes.STRING
        },
        id_usuario:{
            type: dataTypes.INTEGER,//que pongo cuando es una foreign key
        },
        id_producto:{
            type: dataTypes.INTEGER,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE, 
        }
    };
    let config = {
    tableName: 'comentarios',
    timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
    underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase;
    }
    const Comentario = sequelize.define(alias, cols, config);
    

    // creo las relaciones 
        Comentario.associate=function(models) {
        //     // pertenece a
            Comentario.belongsTo(models.Producto,{
                as:"Productos",
                foreignKey:"id_producto"
                 })
            Comentario.belongsTo(models.Usuario,{
                as:"Usuario",
                foreignKey:"id_usuario"
                })
             };

    return Comentario;
}