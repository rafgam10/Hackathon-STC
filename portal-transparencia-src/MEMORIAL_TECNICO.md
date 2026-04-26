# Memorial Técnico do Projeto

## 1. Visão Geral

O projeto `portal-transparencia` é uma aplicação web de front-end construída com Nuxt 4 e Vue 3, destinada a exibir informações e navegação relacionadas ao Portal da Transparência do Estado do Maranhão.

A aplicação foca em:
- navegação institucional,
- recursos de consulta de despesas,
- páginas informativas para cidadãos e fiscais,
- integração com APIs públicas de transparência.

## 2. Tecnologias Utilizadas

- `Nuxt 4` como framework principal para SSR/SSG e navegação de páginas.
- `Vue 3` com Composition API e `script setup`.
- `TypeScript` para tipagem estática.
- `Tailwind CSS` para estilização utilitária.
- `@nuxt/ui` para componentes de interface prontos.
- `Axios` para chamadas HTTP.
- `ESLint` com configuração Nuxt.
- `pnpm` como gerenciador de pacotes.

## 3. Estrutura do Projeto

- `app/app.vue`: layout global da aplicação com header, navegação, corpo da página e rodapé.
- `app/pages/`: páginas de rota do Nuxt.
- `app/assets/css/main.css`: estilos globais adicionais.
- `app/utils/util_dados.ts`: utilitário para consumir APIs de transparência e tratar dados.
- `public/`: imagens estáticas e ícones usados pelo site.

## 4. Arquitetura e Comportamento

### 4.1 Configuração Nuxt

O arquivo `nuxt.config.ts` define:
- módulos: `@nuxt/eslint` e `@nuxt/ui`.
- CSS global: `~/assets/css/main.css`.
- tema de cores e preferências de modo claro.
- regra de rota para pré-renderização da página inicial.
- compatibilidade de data e opções de lint estilístico.

### 4.2 Layout Global

Em `app/app.vue`:
- `UApp` encapsula toda a aplicação.
- `UHeader` apresenta menu de navegação responsiva e botão de modo claro/escuro.
- `UNavigationMenu` exibe links para seções internas e páginas dedicadas.
- `NuxtPage` renderiza o conteúdo da rota ativa.
- `UFooter` mostra contatos institucionais e logos.

### 4.3 Rotas principais

As rotas principais previstas são:
- `/` — página inicial
- `/AreaDoFiscal` — área para fiscais
- `/CidadaoInformado` — página de consulta cidadã
- `/Despesas` — relatório de despesas e filtros
- `/HistoriaPortal` — histórico do portal
- `/Servicos` — serviços disponíveis
- `/sobre` — sobre o portal
- `/tempindex` — página temporária / de testes

## 5. Páginas e Funcionalidades

### 5.1 `app/pages/index.vue`
A página inicial combina:
- cards de navegação para categorias de consulta,
- componentes adaptativos para mobile e desktop,
- seções de ajuda e links institucionais.

A lógica de navegação usa `activeId` para expandir categorias e `navigateTo` para redirecionar.

### 5.2 `app/pages/Despesas.vue`
A página de despesas permite:
- seleção de ano, mês e unidade/local,
- consulta de dados via API externa,
- exibição de totais de empenho, liquidado e pago em tabela estilizada.

A busca de dados é feita através do utilitário `utils.Obter_Consulta_Despesas`.

### 5.3 `app/utils/util_dados.ts`
Contém funções para consumo das APIs de transparência pública:
- `ObterUnidade_Codigo_ug()` — lista de unidades com código UG;
- `Obter_Consulta_Despesas(ano, mes, codigo_ug)` — consulta e soma despesas;
- `Obter_Consulta_de_Notas(ano, codigo_ug)` — consulta de notas fiscais;
- `Calcular_Totais_Despesas(despesas)` — totaliza despesas localmente;
- `Extrair_Valores_Despesas(despesas)` — normaliza campos financeiros.

A API base utilizada é `https://transparencia.ma.gov.br/api/`.

## 6. UI e Estilo

- Usa componentes do `@nuxt/ui` como `UHeader`, `UPageHero`, `UPageCard`, `UPricingTable`, `USelect`, `UButton`, `UFooter`, entre outros.
- O projeto explora cores temáticas via `ui.theme.colors` e classes utilitárias Tailwind.
- A aplicação é responsiva com estruturas diferenciadas para mobile (`UCollapsible`) e desktop (`UPageCard` em grid).

## 7. Scripts de Desenvolvimento

- `pnpm dev` — executa o servidor de desenvolvimento Nuxt.
- `pnpm build` — gera build de produção.
- `pnpm preview` — pré-visualiza build gerado.
- `pnpm lint` — verifica código com ESLint.
- `pnpm typecheck` — executa checagem de tipos do Nuxt.

## 8. Observações Técnicas

- O projeto está preparado para SSR/SSG via Nuxt e possui prerender na rota `/`.
- A tipagem em TypeScript está presente, mas existem áreas com tipagem `any` no utilitário de dados e nas páginas.
- O consumo de API é feito no front-end, o que depende de CORS e disponibilidade do endpoint público.
- Há potencial para modularizar mais o código de dados e adicionar tratamento de erros e loading mais robusto.

## 9. Próximos passos sugeridos

- adicionar paginação e filtros mais completos para a consulta de despesas;
- mover chamadas de API para composables/Nuxt plugins para melhor separação de responsabilidades;
- criar testes unitários e de integração para componentes e utilitários;
- expandir a tipagem de interfaces para as respostas da API.

---

Documento gerado para registrar a arquitetura, principais páginas, tecnologias e fluxos de dados do projeto `portal-transparencia`.
