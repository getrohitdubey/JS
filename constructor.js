function people(firstName,lastName,birthYear){
    this.firstName=firstName,
    this.lastName=lastName,
    this.birthYear=birthYear,
    this.calculateAge=function(){
        console.log(this.firstName,'s age is',2020-this.birthYear);
    }
}

var rohit=new people('Rohit','Dubey','1991');
rohit.calculateAge();