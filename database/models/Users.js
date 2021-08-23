module.exports = function(sequelize, dataTypes) {
    let alias = "Users"; // Nombre de la tala
    let cols = { // Nombre las las colunmas
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
	    last_name: {
                type: dataTypes.STRING
        },
	    email: {
                type: dataTypes.STRING
        },
	    password: {
                type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.STRING
        }
    }

    let config = { // Configuracion a la base de datos referenciando en nombre de la tabla y los timestamps en falso
        tableName: "users",
        timestamps: false
    }

    // Configuracion de la tabla Usuario con sequelize 
    let Users = sequelize.define(alias, cols, config);
    //Configuracion de la relacion entre las diferentes tablas
    // Users.associate = function(models) {
    //     // belongsTo hace referencia a que un usuario tiene una categoria
    //     // belongsTo relacion uno a muchos
    //     Users.belongsTo(models.UserCategories, {
    //         // se renombra la relacion usuarios
    //         as: "usuarios",
    //         // Se explica cual es la llave foranea con la cual se relacionan
    //         foreignKey: "category_id"
    //     });

    //     // hasMany hace referencia a que un usuario puede tener muchas ordenes de compra
    //     Users.hasMany(models.PurchaseOrders, {
    //         // se renombra la relacion
    //         as: "orden_compra",
    //         // Se explica cual es la llave foranea con la cual se relacionan
    //         foreignKey: "user_id"
    //     });
    // }

    return Users;
}