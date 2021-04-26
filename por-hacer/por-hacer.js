const fs = require ('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('add/data.json',  data, (err) => {
        if(err) throw new Error('No se creo el archivo', err);
       
    });
}


const cargarDB = () => {
    try{
        listadoPorHacer = require ('../add/data.json');
    }catch(err){
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion ,
        completado : false ,
    };


    console.log(descripcion);
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}


let getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

let actualizar = (descripcion, estado) => {
    cargarDB();
   let indice = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (indice >= 0){
        listadoPorHacer [indice].completado = estado;
        guardarDB();
        return true;
    } else {
            console.log('no esta  en la lista');
            return false;
        }
    }

let borrado = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion!==descripcion
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrado
}