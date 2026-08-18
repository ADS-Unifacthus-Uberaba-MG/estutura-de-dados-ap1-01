#!/usr/bin/env node

import { execSync } from "node:child_process";
import { appendFileSync, existsSync } from "node:fs";

const SUMMARY_FILE = process.env.GITHUB_STEP_SUMMARY;

function log(md) {
  console.log(md);
  if (SUMMARY_FILE) {
    try {
      appendFileSync(SUMMARY_FILE, md + "\n");
    } catch {
      throw new Error("Error writing to summary file " + SUMMARY_FILE + " " + md);
    }
  }
}

function rodarArquivo(caminho) {
  try {
    const saida = execSync(`npx --yes tsx ${caminho}`, {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "pipe"],
      timeout: 30000,
    });
    return { ok: true, saida };
  } catch (erro) {
    const detalhe = (erro.stdout || "") + (erro.stderr || erro.message || "");
    return { ok: false, saida: detalhe };
  }
}

function compararExercicio(nome, caminho, esperado) {
  log(`\n## ${nome}\n`);

  if (!existsSync(caminho)) {
    log(`❌ Arquivo \`${caminho}\` não foi encontrado no repositório.`);
    return false;
  }

  const resultado = rodarArquivo(caminho);

  if (!resultado.ok) {
    log(
      `❌ O código não rodou sem erros. Isso normalmente significa um erro ` +
      `de digitação ou de sintaxe. Saída do terminal:\n\n\`\`\`\n${resultado.saida.trim()}\n\`\`\``
    );
    return false;
  }

  const linhasObtidas = resultado.saida
    .trim()
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  let tudoCerto = true;
  const linhasTabela = [];

  esperado.forEach((valorEsperado, i) => {
    const obtido = linhasObtidas[i];
    const passou = obtido === valorEsperado;
    if (!passou) tudoCerto = false;
    linhasTabela.push(
      `| ${i + 1} | \`${valorEsperado}\` | \`${obtido ?? "(sem saída)"}\` | ${passou ? "✅" : "❌"} |`
    );
  });

  if (linhasObtidas.length > esperado.length) {
    tudoCerto = false;
    log(
      `⚠️ A saída teve mais linhas do que o esperado ` +
      `(${linhasObtidas.length} linhas, esperado ${esperado.length}). Confira se não sobrou algum ` +
      `\`console.log\` extra.`
    );
  }

  log(`| # | Esperado | Obtido | Resultado |\n|---|---|---|---|\n${linhasTabela.join("\n")}`);
  log(tudoCerto ? `\n**${nome}: ✅ Tudo certo!**` : `\n**${nome}: ❌ Ainda tem algo pra ajustar.**`);

  return tudoCerto;
}

log(`# 🩺 Correção automática — AP1-01`);
log(`Este relatório é gerado automaticamente. Ele confere se a saída do seu código bate com o esperado — não substitui a correção do professor, só te dá um retorno rápido.`);

const resultados = [
  compararExercicio("Questão 5", "questao5.ts", ["[ 7, 9, 8 ]", "7"]),
  compararExercicio("Questão 6", "questao6.ts", ["4", "30", "[ 15, 22, 18 ]"]),
];

const passou = resultados.every(Boolean);

log(
  `\n---\n${
    passou
      ? "## ✅ Todas as questões bateram com o esperado!"
      : "## ❌ Ainda falta ajustar alguma questão — veja os detalhes acima."
  }`
);

process.exit(passou ? 0 : 1);
