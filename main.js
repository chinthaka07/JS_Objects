let ranil={
    name:'ranil',
    address:'Colombo',
    age:80,
    horaKanawa(){
        console.log(this.name,'Central Bank ekanm maru!')
    }
}

let mahinda={
    name:'mahinda',
    address:'Matara',
    age:85,
    horaKanawa(){
        console.log(this.name,'tsunami ekanm maru!')
    }
}
console.log(ranil);
console.log(mahinda);
ranil.horaKanawa();
ranil.name='wikkama singhe';
ranil.horaKanawa();

mahinda['name']='**paksha';//dynamic
mahinda.horaKanawa();

