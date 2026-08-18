# AP1-01 — Questões 5 e 6 · Estrutura de Dados

Arquivos para você completar o código das Questões 5 e 6 e **testar se funciona de
verdade**, rodando no seu computador.

## Arquivos desta pasta

| Arquivo                          | Para que serve                                            |
| -------------------------------- | --------------------------------------------------------- |
| `questao5.ts`                    | **É este que você edita** (Questão 5 — array `notas`).    |
| `questao6.ts`                    | **É este que você edita** (Questão 6 — array `idades`).   |
| `package.json` / `tsconfig.json` | Configuração do projeto (opcional — veja Opção B abaixo). |

---

## Passo 1 — Instalar o Node.js

Se você já usa Node.js nas aulas de Estrutura de Dados, pode pular este passo.

1. Acesse **https://nodejs.org**
2. Baixe a versão **LTS** (a recomendada, mais estável) para o seu sistema operacional.
3. Execute o instalador e siga o padrão (Next → Next → Install).
4. Para confirmar que deu certo, abra o terminal e rode:

   ```
   node -v
   ```

   Se aparecer um número de versão (ex.: `v20.11.0`), está tudo certo.

---

## Passo 2 — Abrir o terminal nesta pasta

Pelo VS Code: clique com o botão direito na pasta do exercício → **Abrir no Terminal**
(ou use o menu **Terminal → Novo Terminal** com a pasta já aberta).

---

## Passo 3 — Entender os blocos `// TODO`

Dentro de `questao5.ts` e `questao6.ts` você vai ver comentários assim:

```
// 1) Adicione o número 8 ao final do array "notas"
// TODO: escreva sua linha de código aqui
```

- Tudo que começa com `//` é um **comentário** — o computador ignora essas linhas,
  elas existem só para te explicar o que fazer.
- `TODO` é uma convenção comum em programação para marcar **"isso ainda precisa ser
  feito"**. Não é um comando de TypeScript, é só um lembrete.
- Onde tiver um `// TODO`, é ali (na linha logo abaixo) que você escreve o código
  pedido pelo comentário acima dele. Depois de escrever, pode apagar a linha do
  `TODO` ou deixar — não faz diferença para o programa rodar.

---

## Passo 4 — Completar os arquivos

Abra `questao5.ts`, leia os comentários e escreva a linha de código pedida em cada
um dos 3 espaços marcados com `// TODO`. Repita o processo em `questao6.ts`.

---

## Passo 5 — Rodar o código

### Opção A — mais simples, sem instalar nada no projeto

No terminal, dentro desta pasta, rode:

```
npx tsx questao5.ts
```

```
npx tsx questao6.ts
```

Na primeira vez, o `npx` pode levar alguns segundos para baixar a ferramenta — isso
é normal, só acontece uma vez.

### Opção B — usando ts-node (setup do projeto)

```
npm install
npm run questao5
npm run questao6
```

---

## O que esperar no terminal

Se o seu código estiver certo, o terminal deve imprimir exatamente os valores
pedidos em cada comentário (`console.log`), sem nenhuma linha em vermelho.

Se aparecer um erro em vermelho, releia a questão correspondente no material da
AP1-01 e confira se usou exatamente os comandos vistos em aula (`push`, `pop`,
colchetes `[]`, `.length`, `console.log`).

---

## Como entregar sua prática (Fork + Pull Request)

Nesta disciplina, a entrega das práticas é feita pelo fluxo **Fork + Pull Request** —
o mesmo usado no mercado de trabalho. Você não cria um repositório do zero: você
faz uma cópia (fork) do repositório da prática, trabalha nela, e devolve o código
pro professor abrindo um Pull Request. **Não é necessário e nem esperado que o
Pull Request seja mesclado (merge)** — ele já serve como sua entrega, e o professor
vai revisar direto por ali.

> `https://github.com/ADS-Unifacthus-Uberaba-MG/estutura-de-dados-ap1-01.git`

### Passo 1 — Instalar o Git

- Acesse **https://git-scm.com** e baixe o instalador para o seu sistema.
- Depois de instalar, confirme no terminal:

  ```
  git --version
  ```

### Passo 2 — Configurar seu nome e e-mail (só precisa fazer uma vez no computador)

```
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### Passo 3 — Criar uma conta no GitHub

Se ainda não tiver, crie gratuitamente em **https://github.com**.

### Passo 4 — Fazer o Fork do repositório da prática

1. Abra a URL do repositório que o professor enviou.
2. Clique no botão **Fork**, no canto superior direito da página.
3. Confirme criando o fork na sua própria conta.

Isso cria uma **cópia própria** do repositório, dentro da sua conta do GitHub —
você pode editar essa cópia livremente, sem afetar o repositório original nem o
de outros colegas.

### Passo 5 — Clonar o SEU fork para o computador

No seu fork (não no repositório original), clique no botão verde **Code** e copie
a URL. Depois, no terminal:

```
git clone <URL-DO-SEU-FORK>
cd <nome-da-pasta-clonada>
```

### Passo 6 — Completar os exercícios

Siga os Passos 1 a 5 da seção anterior deste README: complete os `// TODO` em
`questao5.ts` e `questao6.ts`, e teste rodando com `npx tsx` (ou `npm run`).

### Passo 7 — Enviar suas alterações para o seu fork

```
git add .
git commit -m "Resolução AP1-01 - Questões 5 e 6"
git push
```

- `git add .` seleciona os arquivos que você alterou.
- `git commit -m "..."` salva essa versão do código com uma mensagem descritiva.
- `git push` envia essas alterações para o seu fork no GitHub.

### Passo 8 — Abrir o Pull Request

1. Volte para a página do seu fork no site do GitHub.
2. Vai aparecer um aviso/banner **"Compare & pull request"** — clique nele.
   (Se não aparecer, vá na aba **Pull requests** do repositório original do
   professor e clique em **New pull request**, escolhendo seu fork como origem.)
3. Confira se o destino é o repositório do professor (`base repository`) e a
   origem é o seu fork (`head repository`).
4. Escreva um título simples (ex.: `AP1-01 - Seu Nome`) e clique em
   **Create pull request**.

### Passo 9 — O que acontece depois

O professor vai revisar seu código direto na aba do Pull Request — pode deixar
comentários, pedir ajustes ou aprovar. **Você não precisa (e nem deve) mesclar o
Pull Request** — ele já é a sua entrega. Se o professor pedir ajustes, basta
editar o arquivo de novo, repetir o Passo 7 (`git add`, `git commit`, `git push`)
e o mesmo Pull Request é atualizado automaticamente.
