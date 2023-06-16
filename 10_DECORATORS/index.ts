//------------------------------------------------------
// 01 - Exemplo decorator

function meuDecorator() {
    console.log("Iniciando decorator.");

    return function (
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
        ) {
        console.log("Executando decorator.");
        // console.log(target);
        // console.log(propertKey);
        // console.log(descriptor);
    };
}

class MinhaClasse {
    // @meuDecorator()  // << rodando decorator ?!?!! Oo
    testando() {
        console.log("Terminando a execução do método.");        
    };
}

const meuObjeto = new MinhaClasse();
// meuObjeto.testando();

//------------------------------------------------------
// 02 - Multiplos ddecorators

function decoratorUm() {

    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
        ) {
        console.log("executou decorator 1.");
        // console.log("S2 Cocadinha");
    };
}

function decoratorDois() {

    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
        ) {
        console.log("Executou decorator 2.");
        // console.log("S2 minha branquinha");
    };
}

class VariosDecorators {
    // @decoratorUm()
    // @decoratorDois()
    finalizar() {
        console.log("Fim da execução.");
    }
}

// const descorators = new VariosDecorators();
// descorators.finalizar();



//------------------------------------------------------
// 03 - Class decorator

function classDecorator(constructor: Function) {
    if (constructor.name === "User") {
        console.log("Criando usuário.");
        // console.log(constructor);
    }
}

// @classDecorator  //esse troço roda aparentemete de qqr jeito.

class User {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

// const deniel = new User("Deniel");
// console.log(deniel);

//------------------------------------------------------
// 04 - Method decorator

class Machine {
    name;

    constructor(name: string) {
        this.name = name;
    }

    showName() {
        return(`O nome da máquina é ${this.name}.`);
    }
}

const trator = new Machine("\"trator pequeno\"");
console.log(trator.showName());

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












