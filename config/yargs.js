const opts={
    base:{
        demand: true,
        alias:'b'                   
    },
    limite:{                    
        alias:'l',
        default:10
    }   
}

const argv = require('yargs')
            .command('listar','Imprime en consola la tabla de multiplicar',opts)
            .command('crear','Crea un archivo en el directorio ./tablas con la base dada',opts)
            .help()                
            .argv;

// module.exports.argv=argv;
module.exports={
    argv
}            