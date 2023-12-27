function calcular(tipo, valor){ // existem botoes que tem valor ou ação (nao tem valor númerico) apenas
    if (tipo === "acao"){
      if (valor === "c"){
        const resultado = document.getElementById('resultado');
        resultado.value = ''; // limpar o resultado
      }
      if (valor === '+' || valor === '-' || valor === '*'|| valor === '/' || valor === '.'){ // se o valor for igual a soma, sub, mult ou div
        const resultado = document.getElementById('resultado');
        resultado.value = resultado.value + valor; // acresenta o valor no resultado (concatenação)
      }

      if (valor === '='){
        const resultado = document.getElementById('resultado');
        resultado.value = eval(resultado.value); // eval faz o calculo do resultado (eval é uma função do js)
      }
      
    }
    else if (tipo === "valor"){
      const resultado = document.getElementById('resultado');
      resultado.value = resultado.value + valor; // acresenta o valor no resultado (concatenação)
    }
}