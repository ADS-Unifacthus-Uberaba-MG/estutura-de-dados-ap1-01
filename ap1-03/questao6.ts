// ============================================================
// AP1-03 — Questão 6: Mais um código pra você escrever
// Estrutura de Dados · UniFACTHUS · ADS 2026/02
// Prof. Pierre Mendes Salatiel
// ============================================================
//
// Complete a função "buscarNaLista" abaixo. Depois, rode este arquivo
// (veja instruções no README.md) e confira se a saída no terminal bate
// com o esperado.

interface No<T> {
  valor: T;
  proximo: No<T> | null;
}

function buscarNaLista<T>(head: No<T> | null, valor: T): boolean {
  // crie a variável "atual" apontando para o head
  let atual = head;

  // escreva o laço while que percorre a lista:
  // se "atual.valor" for igual a "valor", retorne true
  while (atual !== null) {
    if (atual.valor === valor) {
      return true;
    }
    atual = atual.proximo;
  }

  // se o laço terminar sem encontrar, retorne false
  return false;
}

// ---------------------------------------------------------------
// Não edite daqui pra baixo — este trecho testa a sua função.
// ---------------------------------------------------------------
const no3: No<string> = { valor: "C", proximo: null };
const no2: No<string> = { valor: "B", proximo: no3 };
const no1: No<string> = { valor: "A", proximo: no2 };

console.log(buscarNaLista(no1, "B"));
console.log(buscarNaLista(no1, "Z"));
