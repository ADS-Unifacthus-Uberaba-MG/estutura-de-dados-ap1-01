// ============================================================
// AP1-01 — Questão 5: Agora é sua vez, escreva o código
// Estrutura de Dados · UniFACTHUS · ADS 2026/02
// Prof. Pierre Mendes Salatiel
// ============================================================
//

function inserirNoInicio<T>(
    head: No<T> | null,
    valor: T
): No<T> {

    const novoNo: No<T> = {
        valor: valor,
        proximo: head
    };

    return novoNo;
}

// Complete as 3 partes abaixo escrevendo a linha de código que falta.
// Depois, rode este arquivo (veja instruções no README.md) e confira
// se a saída no terminal bate com o esperado.

const notas: number[] = [7, 9];

function imprimirLista<T>(head: No<T> | null): void {

    let atual = head;

    while (atual !== null) {

        console.log(atual.valor);

        atual = atual.proximo;
    }
}

// 1) Adicione o número 8 ao final do array "notas"
// TODO: escreva sua linha de código aqui


// 2) Imprima o array "notas" completo no console
// TODO: escreva sua linha de código aqui


// 3) Imprima apenas o primeiro elemento do array "notas"
// TODO: escreva sua linha de código aqui
