//------------------------------------------------------
// 01 - Exemplo decorator

// target
// propertKey
// descriptor

function meuDecorator() {
    console.log("Iniciando decorator.");

    return function (
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
        ) {
        console.log("Executando decorator.");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}

class minhaClass {
    nome!: string;

    // @meuDecorator();

    testing() {
        console.log("Terminando a execução do método.");        
    }
}

// const meuObjeto = new minhaClass();
// meuObjeto.testing();

//------------------------------------------------------
// 02 - Multiplos ddecorators

function decoratorUm() {

    return function (
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
        ) {
        console.log("executou decorator 1."); 
    }
}

function decoratorDois() {

    return function (
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
        ) {
        console.log("Executou decorator 2.");
    }
}

class VariosDecorators {
    @decoratorUm;
    @decoratorDois;
    teste() {
        console.log("Fim da execução.");
        
    }
}

const descorators = new VariosDecorators();



//------------------------------------------------------
// 03 - 



//------------------------------------------------------
// 04 - 



//------------------------------------------------------
// 05 - 



//------------------------------------------------------
// 06 - 



//------------------------------------------------------
// 07 - 



//------------------------------------------------------
// 08 - 



//------------------------------------------------------
// 09 - 



//------------------------------------------------------
// 10 - 


