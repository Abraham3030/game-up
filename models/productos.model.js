/**
 * CAPA DE BASE DE DATOS
 * id: number
 * name: string
 * precio: number
 * descuento: number
 * poster: string
 * plataforma: string
 */

const fs = require('fs');
const productos = require('../database/productos.json');
const path = require('path');
const productosModel = {
    create: function(productoInfo){
        if(!Object.keys(productoInfo).length) throw new Error('Invalid product');
        this._save(productoInfo)
        return productoInfo
    },
    list: function(filters) {
        if(!filters) return productos
    },
    findById: function(productoId) {
        return productos.find(prod => prod.id === parseInt(productoId))
    },
    update: function(productoInfo, productId){
        let productoToUpdate = this.findById(productId)
        productoToUpdate = Object.assign({},productoToUpdate, productoInfo )
        this._save(productoToUpdate,productId)
    },
    _save: function (productInfo, productoId) {
        if(productoId) {
            const productoIndex = productos.findIndex(producto => producto.id == productoId)
            productos[productoIndex] = productInfo
        } else {
            productInfo.id = productos.length + 1;
            productos.push(productInfo)
        }
        fs.writeFileSync(
            path.resolve(__dirname, '../database/productos.json'),
            JSON.stringify(productos))
    },

}

module.exports = productosModel;