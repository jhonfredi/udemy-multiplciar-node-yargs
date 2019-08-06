const argv = require('./config/yargs').argv;
const colors1 = require('colors');
const colors = require('colors/safe');
const {createFile:crearArchivo,listarTabla} = require("./multiplicar/multiplicar");

console.log(argv);
let comando = argv._[0];

switch(comando){
    case 'listar':
    
    //Está función es del módulo multiplicar, pero gracias a la destructuración
    //puedo invocarla como si fuera una función del archivo actual
    listarTabla(argv.base,argv.limite).then(response=>{
            console.log("============".underline.red);
            console.log(`Tabla del ${argv.base}`.green);
            console.log("============".rainbow);
            console.log(response);
        })
        .catch(err=>console.log(err));
        break;

    case 'crear':
            crearArchivo(argv.base,argv.limite)
            .then(response=>console.log(`El archivo ${colors.rainbow(response)} ha sido creado correctamente`))
            .catch(error=>console.log(error));
            break;
    default :
        console.log(argv._[0],' no se reconoce como un comando');
}

/* let argv=process.argv;
let param=argv[2];
let base=param.split("=")[1];
 */
