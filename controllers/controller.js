"use strict";
var rocket1 = new Rocket('32WESSDS');
rocket1.addPropulsor(new Propulsor(10, 0));
rocket1.addPropulsor(new Propulsor(30, 0));
rocket1.addPropulsor(new Propulsor(80, 0));
var rocket2 = new Rocket('LDSFJA32');
rocket2.addPropulsor(new Propulsor(30, 0));
rocket2.addPropulsor(new Propulsor(40, 0));
rocket2.addPropulsor(new Propulsor(50, 0));
rocket2.addPropulsor(new Propulsor(50, 0));
rocket2.addPropulsor(new Propulsor(30, 0));
rocket2.addPropulsor(new Propulsor(10, 0));
var showRocket = document.getElementById('showRocket');
var elementRocket1 = document.createElement('div');
function showRockets() {
    var rockets = [rocket1, rocket2];
    for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
        var i_1 = rockets_1[_i];
        console.log(i_1);
        elementRocket1.innerHTML += '<br> COHETE ' + i_1.codi + ' -' + ' POTENCIA MÀXIMA PROPULSORS:  ';
        showRocket.appendChild(elementRocket1);
        i_1.propulsors.forEach(function (Propulsor) {
            elementRocket1.innerHTML += Propulsor.potencia + '  ';
            showRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITAT COHET:  ' + i_1.velocitatRocket() + '<br> <br> ';
    }
    var button = document.getElementById("crear-cohets");
    button.classList.add('hide');
    for (var i = 0; i < rockets.length; i++) {
        var button = document.getElementById('accelerar-cohet' + (i + 1));
        button.classList.remove('hide');
        var button = document.getElementById('frenar-cohet' + (i + 1));
        button.classList.remove('hide');
    }
}
function accelerarRocket(x) {
    elementRocket1.innerHTML = '';
    x.accelerar();
    var rockets = [rocket1, rocket2];
    for (var _i = 0, rockets_2 = rockets; _i < rockets_2.length; _i++) {
        var i = rockets_2[_i];
        console.log(i);
        elementRocket1.innerHTML += '<br> COHETE ' + i.codi + ' -' + ' POTENCIA ACTUAL PROPULSORS:  ';
        showRocket.appendChild(elementRocket1);
        i.propulsors.forEach(function (Propulsor) {
            elementRocket1.innerHTML += Propulsor.potenciaActual + '  ';
            showRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITAT COHET:  ' + i.velocitatRocket() + '<br> <br> ';
    }
}
function frenarRocket(x) {
    elementRocket1.innerHTML = '';
    x.frenar();
    var rockets = [rocket1, rocket2];
    for (var _i = 0, rockets_3 = rockets; _i < rockets_3.length; _i++) {
        var i = rockets_3[_i];
        console.log(i);
        elementRocket1.innerHTML += '<br> COHETE ' + i.codi + ' -' + ' POTENCIA ACTUAL PROPULSORS:  ';
        showRocket.appendChild(elementRocket1);
        i.propulsors.forEach(function (Propulsor) {
            elementRocket1.innerHTML += Propulsor.potenciaActual + '  ';
            showRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITAT COHET:  ' + i.velocitatRocket() + '<br> <br> ';
    }
}
