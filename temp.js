function principal(){
    const prompt = require('prompt-sync')({sigint: true});

    
    const unidade = prompt('\n escolha uma unidade ');
    const temperatura= Number(prompt('diga a temperatura '))
    switch(unidade){

        case 'kelvin':
            console.log(`A temperatura em ${unidade} é: ` ,temperatura+273);
          break;

        case 'fahrenheit':
            console.log(`A temperatura em ${unidade} é: ` ,temperatura*1.8+32);
            break;

        case 'celsius':
            console.log(`A temperatura em ${unidade} é: ` ,temperatura);
            break;
    }
}

module.exports = {
    principal
};
