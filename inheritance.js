class Animal{
    constructor(legs){
        this.legs=legs;
    }

    fly(){
        console.log('flying',this.legs)
    }

    walk(){
        console.log('walking')
    }
}

class Bird extends Animal{
    walk(){
        console.log('No Walking');
    }
}

let pegion=new Bird(4);
pegion.fly();
pegion.walk();