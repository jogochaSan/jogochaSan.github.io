let callback = () => {
    console.log("mensaje de prueba CallBack");
}

function mostrarMsj(callback) {
    callback();
}

mostrarMsj(callback);

let ordSup = (msj, callback) => {
    callback(msj);
}

let msjWarm = (msj) => {
    console.warn(msj)
}


let msjCnl = (msj) => {
    console.log(msj)
}


ordSup("mensaje warn", msjWarm);
ordSup("mensaje consola", msjCnl);