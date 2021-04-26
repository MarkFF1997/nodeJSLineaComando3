const argv = require('./config/yargs').argv;
const colores = require ('colors');
const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case  'crear' :
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        //porHacer.crear(argv.description);
        //console.log("crear pendiente");
        break;
    case 'listar' :
        let listado = porHacer.getListado();

        for (let tarea of listado){
            console.log('=====Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============'.green);
        }
        //console.log("listar  pendiente");
        break;
    case 'actualizar' :
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        //console.log("actualizar pendiente");
        break;

    case 'borrar' :
        let borrar = porHacer.borrado(argv.descripcion);
        console.log(borrar);
        break;
    default :
        //console.log("coamndo no reconocido");

}

