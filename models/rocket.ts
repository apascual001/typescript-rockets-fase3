class Rocket{
    codi:string;
    propulsors:Propulsor[]=new Array();

    constructor(codi:string){
        this.codi=codi;
    }
    addPropulsor(propulsor:Propulsor):void{
        this.propulsors.push(propulsor);
    }
    velocitatRocket(){
        let suma=0;
        for(var i = 0; i < this.propulsors.length; i++){
            suma += this.propulsors[i].potenciaActual;
        }
        return suma;
    }

    accelerar(){
        this.propulsors.forEach(Propulsor => {
            if(Propulsor.potenciaActual<Propulsor.potencia){
                Propulsor.potenciaActual += 10;
            }
            return Propulsor.potenciaActual;
        });
        return this.velocitatRocket;
    }
    frenar(){
        this.propulsors.forEach(Propulsor => {
            if(Propulsor.potenciaActual>=10){
                Propulsor.potenciaActual -= 10;
            }
            return Propulsor.potenciaActual;
        });
        return this.velocitatRocket;
    }

}