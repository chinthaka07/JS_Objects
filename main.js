class Person{
    constructor(name,address,age){
        this.name=name,
            this.address=address,
            this.age=age
    }
    getVote(){
        console.log(this.name,'mn dinna');
        return this;
    }
    horaKanawa(talent){
        console.log(this.name,talent);
        return this;
    }
    doProtest(){
        console.log('#GoHome',this.name);

    }
}

/*let ranil={
    name:'ranil',
    address:'Colombo',
    age:80,
    horaKanawa(){
        console.log(this.name,'Central Bank ekanm maru!');
    }
}*/
let ranil=new Person('ranil','colombo',80);
/*let mahinda={
    name:'mahinda',
    address:'Matara',
    age:85,
    horaKanawa(){
        console.log(this.name,'tsunami ekanm maru!');
    }
}*/
let mahinda=new Person('mahinda','Matara',85);
/*let gota={
    name:'Gota',
    address:'USA',
    age:75,
    horaKanawa(){
        console.log(this.name,'Rata Kawe!**');
    }
}*/
let gota=new Person('Gota','USA',75);

console.log(ranil);
console.log(mahinda);
console.log(gota);
//=================
ranil.getVote().horaKanawa('central banke eka nm maru').doProtest();


//mahinda.horaKanawa('tsunami eka maru!');
//gota.horaKanawa('rata kewa!');