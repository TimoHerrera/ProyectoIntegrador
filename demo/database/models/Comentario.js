//recibe dos Ol como parametros
module.exports = function (sequelize,dataTypes) {
    let alias = 'Comentarios';
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
        

    };
    let config = {
    tableName: 'comentarios',
    timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
    underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase;
    }
    const Comentarios = sequelize.define(alias, cols, config);
    

    return Comentarios;
}