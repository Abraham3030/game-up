module.exports = function(sequelize, dataTypes) {
    let alias = "Products"; // Nombre de la tala
    let cols = { // Nombre las las colunmas
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncement: true
        },
        name: {
            type: dataTypes.STRING
        },
	    discount: {
                type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.DOUBLE
        },
	    description: {
                type: dataTypes.STRING
        },
        stock: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.INTEGER
        },
        brand: {
            type: dataTypes.INTEGER
        },
        genre: {
            type: dataTypes.INTEGER
        }
    }

    let config = { // Configuracion a la base de datos referenciando en nombre de la tabla y los timestamps en falso
        tableName: "products",
        timestamps: false
    }

    // Configuracion de la tabla Usuario con sequelize 
    let Products = sequelize.define(alias, cols, config);
    // Producto.associate = function(models) {
    //     // belongsTo hace referencia a que un producto tiene una categoria
    //     // belongsTo relacion uno a muchos
    //     Producto.hasMany(models.ProductCategories, {
    //         // se renombra la relacion usuarios
    //         as: "categorias",
    //         // Se explica cual es la llave foranea con la cual se relacionan
    //         foreignKey: "category_id"
    //     });

    //     Producto.hasMany(models.ProductBrand, {
    //         // se renombra la relacion usuarios
    //         as: "marcas",
    //         // Se explica cual es la llave foranea con la cual se relacionan
    //         foreignKey: "brand_id"
    //     });

    //     Producto.hasMany(models.ProductGenre, {
    //         // se renombra la relacion usuarios
    //         as: "generos",
    //         // Se explica cual es la llave foranea con la cual se relacionan
    //         foreignKey: "genre_id"
    //     });
    // }

    return Products;
}