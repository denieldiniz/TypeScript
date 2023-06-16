"use strict";
//------------------------------------------------------
// 01 - Exemplo decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function meuDecorator() {
    console.log("Iniciando decorator.");
    return function (target, propertKey, descriptor) {
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
    }
    ;
}
const meuObjeto = new MinhaClasse();
// meuObjeto.testando();
//------------------------------------------------------
// 02 - Multiplos ddecorators
function decoratorUm() {
    return function (target, propertKey, descriptor) {
        console.log("executou decorator 1.");
        // console.log("S2 Cocadinha");
    };
}
function decoratorDois() {
    return function (target, propertKey, descriptor) {
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
function classDecorator(constructor) {
    if (constructor.name === "User") {
        console.log("Criando usuário.");
        // console.log(constructor);
    }
}
// @classDecorator  //esse troço roda aparentemete de qqr jeito.
class User {
    constructor(name) {
        this.name = name;
    }
}
// const deniel = new User("Deniel");
// console.log(deniel);
//------------------------------------------------------
// 04 - Method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return (`O nome da máquina é ${this.name}.`);
    }
}
__decorate([
    enumerable(true) //ativa/desativa a propriedade enumerable do decorator
], Machine.prototype, "showName", null);
const trator = new Machine("trator pequeno");
console.log(trator.showName());
console.log(trator);
//------------------------------------------------------
// 05 - Assessor decorator
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
