let rocket1 = new Rocket('32WESSDS');
rocket1.addPropulsor(new Propulsor(10,0)); 
rocket1.addPropulsor(new Propulsor(30,0)); 
rocket1.addPropulsor(new Propulsor(80,0)); 

let rocket2 = new Rocket('LDSFJA32');
rocket2.addPropulsor(new Propulsor(30,0)); 
rocket2.addPropulsor(new Propulsor(40,0)); 
rocket2.addPropulsor(new Propulsor(50,0)); 
rocket2.addPropulsor(new Propulsor(50,0)); 
rocket2.addPropulsor(new Propulsor(30,0)); 
rocket2.addPropulsor(new Propulsor(10,0)); 

const showRocket = <HTMLElement>document.getElementById('showRocket');
const elementRocket1: HTMLElement = document.createElement('div');


function showRockets(){


    let rockets = [rocket1, rocket2];
    for (let i of rockets) {
        console.log(i);
        elementRocket1.innerHTML += '<br> COHETE ' + i.codi +' -' +' POTENCIA PROPULSORES:  ';
        showRocket.appendChild(elementRocket1);
        i.propulsors.forEach(Propulsor => {
            elementRocket1.innerHTML += Propulsor.potencia + '  ';
            showRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITAT COHET:  ' + i.velocitatRocket()+'<br> <br> ';
    
     }
    var button = <HTMLElement>document.getElementById("crear-cohets");
    button.classList.add('hide');

    for (var i = 0; i < rockets.length; i++) { 
    var button = <HTMLElement>document.getElementById('accelerar-cohet'+(i+1));
    button.classList.remove('hide');
    var button = <HTMLElement>document.getElementById('frenar-cohet'+(i+1));
    button.classList.remove('hide');
    }
}
function accelerarRocket(x:any){
    elementRocket1.innerHTML = '';
    x.accelerar();
    let rockets = [rocket1, rocket2];
    for (let i of rockets) {
        console.log(i);
        elementRocket1.innerHTML += '<br> COHETE ' + i.codi +' -' +' POTENCIA MÁXIMA PROPULSORES:  ';
        showRocket.appendChild(elementRocket1);
        i.propulsors.forEach(Propulsor => {
            elementRocket1.innerHTML += Propulsor.potenciaActual + '  ';
            showRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITAT COHET:  ' + i.velocitatRocket()+'<br> <br> ';
    }
}
function frenarRocket(x:any){
    elementRocket1.innerHTML = '';
    x.frenar();
    let rockets = [rocket1, rocket2];
    for (let i of rockets) {
        console.log(i);
        elementRocket1.innerHTML += '<br> COHETE ' + i.codi +' -' +' POTENCIA PROPULSORES:  ';
        showRocket.appendChild(elementRocket1);
        i.propulsors.forEach(Propulsor => {
            elementRocket1.innerHTML += Propulsor.potenciaActual + '  ';
            showRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITAT COHET:  ' + i.velocitatRocket()+'<br> <br> ';
    }
}