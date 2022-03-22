const fs = require("fs");
const process = require("process");
let ejecucion = process.argv[2]
process.argv[2] == undefined? ejecucion = process.argv[2] : ejecucion = ejecucion.toLowerCase();

function funcionalidadAppTareas(){
    fs.readFile('./tareas.json', 'utf-8', function (err, data) {
        if (err) {
            console.log(err)
        } else {
            let JSONparseado = JSON.parse(data);
            switch(ejecucion) {
                case "listar":
                    console.log(" ")
                    console.log("LISTADO DE TAREAS")
                    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
                    if(!JSONparseado.length) {
                        console.log("LA LISTA ESTA VACIA")
                    } else {
                        JSONparseado.forEach(element => {
                            console.log(element)
                        })
                    }
                    ;
                    break;
                case undefined:
                    console.log(" ")
                    console.log("Atención - Tienes que pasar una acción.");
                    break;
                default:
                    console.log(" ")
                    console.log("No entiendo qué quieres hacer.");
            }
        }
    })
};

module.exports = funcionalidadAppTareas;