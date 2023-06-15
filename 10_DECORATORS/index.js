"use strict";
//------------------------------------------------------
// 01 - Exemplo decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target
// propertKey
// descriptor
function meuDecorator() {
    console.log("Iniciando decorator.");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator.");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class minhaClass {
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
    return function (target, propertKey, descriptor) {
        console.log("executou decorator 1.");
    };
}
function decoratorDois() {
    return function (target, propertKey, descriptor) {
        console.log("Executou decorator 2.");
    };
}
class VariosDecorators {
    teste() {
        console.log("Fim da execução.");
    }
}
__decorate([
    decoratorUm
], VariosDecorators.prototype, "", void 0);
__decorate([
    decoratorDois
], VariosDecorators.prototype, "", void 0);
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
