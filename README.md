# 🎨 Desafio: Pior UX Possível

## 👥 Sobre o Projeto

Este projeto foi desenvolvido para a atividade prática de UI e UX.

A proposta é criar uma interface propositalmente ruim, confusa e irritante, mas que continue funcional e permita que o usuário chegue até a tela final.

O fluxo escolhido foi um cadastro simples dividido em duas etapas.

Ao final, o usuário encontra a mensagem:

> Parabéns, você chegou ao final da pior experiência de usuário!

## 🎯 Objetivo

Demonstrar, na prática, como decisões ruins de interface e experiência podem dificultar uma tarefa simples.

O projeto foi inspirado na ideia de interfaces caóticas como o conceito do User Inyerface.

## 😈 Princípios e Heurísticas Violados

### 1. Botões com funções pouco claras

O botão verde possui o texto "CANCELAR", enquanto o botão que realmente permite continuar é cinza e pouco chamativo.

**Problema:** o usuário pode interpretar as ações de forma errada.

**Princípio violado:** consistência, clareza e correspondência entre o sistema e o mundo real.

**Como corrigir:** utilizar textos objetivos, como "Continuar" e "Cancelar", mantendo aparência e posição coerentes.

### 2. Baixo contraste

Alguns textos aparecem em cinza claro sobre fundo claro.

**Problema:** dificulta a leitura, principalmente para pessoas com baixa visão.

**Princípio violado:** critérios de acessibilidade e contraste da WCAG.

**Como corrigir:** utilizar contraste adequado entre texto e fundo.

### 3. Mensagens de erro confusas

As mensagens utilizam textos como "Erro 404: seus dados foram encontrados, mas estão ausentes."

**Problema:** a mensagem não explica claramente o que o usuário precisa fazer.

**Princípio violado:** visibilidade do status do sistema e linguagem clara.

**Como corrigir:** informar exatamente o problema e como solucioná-lo.

### 4. Validação de senha contraditória

A interface informa regras difíceis de entender, incluindo uma regra contraditória sobre números.

**Problema:** o usuário não sabe qual regra realmente deve seguir.

**Princípio violado:** prevenção de erros e consistência.

**Como corrigir:** apresentar regras simples, coerentes e atualizadas enquanto o usuário digita.

### 5. Botão com texto enganoso

Na segunda tela existe o botão "FINALIZAR CANCELAMENTO", embora sua função seja finalizar o cadastro.

**Problema:** o usuário não sabe qual ação será realizada.

**Como corrigir:** usar um texto direto como "Finalizar cadastro".

### 6. Ajuda inútil

A interface apresenta uma área dizendo que existe ajuda, mas informa que não existe ajuda.

**Problema:** aumenta a frustração e não auxilia o usuário.

**Como corrigir:** disponibilizar instruções ou suporte realmente úteis.

### 7. Informações de progresso confusas

A primeira tela informa "PASSO 1 DE 3 — ou talvez 2 de 4".

**Problema:** o usuário não consegue saber com segurança em que etapa está.

**Princípio violado:** visibilidade do status do sistema.

**Como corrigir:** apresentar um indicador correto, como "Etapa 1 de 2".

## ✅ Proposta de Correção / Versão Ideal

Em uma versão profissional:

- Os botões teriam nomes claros.
- As cores indicariam corretamente as ações.
- O contraste seria adequado.
- As mensagens de erro explicariam como resolver o problema.
- As regras da senha seriam simples e não contraditórias.
- O progresso mostraria corretamente a etapa atual.
- Os textos seriam objetivos.
- A interface teria acessibilidade adequada.
- A ajuda realmente ajudaria o usuário.

## ▶️ Como Executar

### Opção 1 — Abrir localmente

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.

Não é necessário instalar bibliotecas ou configurar servidor.

### Opção 2 — GitHub Pages

1. Envie os arquivos para um repositório público no GitHub.
2. Acesse **Settings > Pages**.
3. Em **Build and deployment**, selecione:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
4. Salve.
5. Aguarde o GitHub publicar o site.
6. Acesse o link gerado.

## 🧪 Playtest

O projeto deve ser testado por integrantes do grupo e, se possível, por outra equipe.

O objetivo do teste é verificar se:

- O usuário percebe as pegadinhas.
- O usuário consegue completar o cadastro.
- O site não apresenta erros que impeçam a conclusão.
- A tela final pode ser alcançada.

## 📌 Conclusão

A atividade demonstra que UI e UX não são apenas estética.

Uma interface pode funcionar tecnicamente e ainda proporcionar uma experiência ruim. Os problemas criados neste projeto mostram a importância de clareza, consistência, acessibilidade, prevenção de erros e feedback adequado.
