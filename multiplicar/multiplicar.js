const fs=require("fs");


let listarTabla=(base,limite=10)=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`La base ${base} no es un número`);
            return;
        }         
        if(!Number(limite)){
            reject(`El límite ${limite} no es un número`);
            return;
        } 
        let result="";
        for(let i=1;i<=limite;i++){
            result+=`${i}x${base}=${i*base}\n`;
        }
        resolve(result);
    }
        
    );
    
}

let createFile=(base,limite=10)=>{

    return new Promise((resolve,reject)=>{
        let result="";

        if(!Number(base)){
            reject(`Error al crear el archivo, el valor ${base} no es un número`);
            return;
        }


    for(let i=1;i<=limite;i++){
        result+=`${i}x${base}=${i*base}\n`;
    }
    //let data=new Uint8Array(Buffer.from(result));;
    fs.writeFile(`tablas/tabla_${base}.txt`,result,(error=>{
        if(error)
            reject(error);
        else
            resolve(`tabla_${base}.txt`);
    }));
    }
        
    );
}

module.exports={
    createFile,
    listarTabla:listarTabla
}