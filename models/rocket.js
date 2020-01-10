"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(codi) {
        this.propulsors = new Array();
        this.codi = codi;
    }
    Rocket.prototype.addPropulsor = function (propulsor) {
        this.propulsors.push(propulsor);
    };
    Rocket.prototype.velocitatRocket = function () {
        var suma = 0;
        for (var i = 0; i < this.propulsors.length; i++) {
            suma += this.propulsors[i].potenciaActual;
        }
        return suma;
    };
    Rocket.prototype.accelerar = function () {
        this.propulsors.forEach(function (Propulsor) {
            if (Propulsor.potenciaActual < Propulsor.potencia) {
                Propulsor.potenciaActual += 10;
            }
            return Propulsor.potenciaActual;
        });
        return this.velocitatRocket;
    };
    Rocket.prototype.frenar = function () {
        this.propulsors.forEach(function (Propulsor) {
            if (Propulsor.potenciaActual >= 10) {
                Propulsor.potenciaActual -= 10;
            }
            return Propulsor.potenciaActual;
        });
        return this.velocitatRocket;
    };
    return Rocket;
}());
