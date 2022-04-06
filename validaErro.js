// Atividade: validação de erros por tipo
// DIO + Carrefour
// O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

// Crie uma função que recebe um array e um número
// Realize as seguintes validações
// Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
// Se o array não for do tipo 'object', lance um erro do tipo TypeError
// Se o número não for do tipo 'number', lance um erro do tipo TypeError
// Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
// Utilize a declaração try...catch
// Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

function validaArray(arr, num) {
    try{
        // validar se parâmetros foram enviados
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        // validar tipo do Array que deve ser Object
        if(typeof arr != 'object') throw TypeError("O Array precisa ser do tipo object");

        // validar se o parâmetro número é do tipo Number
        if(typeof num != 'number') throw TypeError("O num precisa ser do tipo Number");

        // validar se o tamanho do Array é igual ao parâmetro número
        if(arr.length != num) throw RangeError("Tamanho inválido");

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.message); // ou usar console.log(e.name) ou console.log(e.stack) ouconsole.log(e.message)
        } else if(e instanceof TypeError) {
            console.log("Erro do tipo TypeError");
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log("Erro do tipo RangeError");
            console.log(e.message);
        } else {
            console.log("Novo erro não validado ainda: " + e)
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }
    }
}
// Para testar modifique os valores dos parâmetros da chamada da função validaArray
console.log(validaArray([], 2));

