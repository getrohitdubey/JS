class People{
    constructor(firstName,lastName,birthYear){
        this.firstName=firstName,
        this.lastName=lastName,
        this.birthYear=birthYear
    }

    calculateAge(){
        console.log(this.firstName,'s age is',2020-this.birthYear);
    }
}

var mohit=new People('Mohit','Dubey',1994);
mohit.calculateAge();