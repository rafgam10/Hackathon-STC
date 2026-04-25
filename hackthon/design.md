Crie um design completo de frontend para um Portal da Transparência do Estado do Maranhão, com visual moderno, acessível, responsivo e fácil de entender para cidadãos comuns.

O portal deve ser inspirado em governo digital moderno, com interface limpa, cores institucionais do Maranhão, boa hierarquia visual, cards, dashboards, filtros e navegação clara.

Objetivo:
Construir uma interface para consulta pública de informações de transparência ativa do Estado do Maranhão, organizada com base em um Tesauro de Transparência. O sistema deve ajudar o cidadão a encontrar dados públicos, entender o que cada informação significa, verificar prazos de atualização e acessar dados abertos.

Público-alvo:
- Cidadãos comuns
- Jornalistas
- Servidores públicos
- Órgãos de controle
- Pesquisadores
- Desenvolvedores que usam dados abertos

Estrutura principal do portal:

1. Página inicial / Dashboard geral
Criar uma homepage com:
- Header com logo “Portal da Transparência do Maranhão”
- Barra de busca global em destaque com placeholder: “Busque por contratos, servidores, obras, despesas, emendas...”
- Cards de acesso rápido para os principais temas:
  - Institucional
  - Gestão Fiscal
  - Obras e Infraestrutura
  - Pessoal
  - Licitações e Contratos
  - Planejamento e Resultados
  - Transparência Passiva
  - Emendas Parlamentares
  - Controle e Integridade
  - Dados Abertos
  - Convênios e Transferências
- Cards de indicadores:
  - Total de datasets publicados
  - Dados atualizados no prazo
  - Órgãos com pendências
  - Downloads realizados
- Gráficos simples:
  - Gastos por área
  - Contratos por órgão
  - Obras em andamento
- Seção “Mais acessados”
- Seção “Atualizações recentes”

2. Navegação por Assuntos de Transparência
Criar uma página com grid de categorias. Cada categoria representa um assunto de transparência.
Cada card deve conter:
- Ícone
- Nome do assunto
- Descrição curta
- Quantidade de objetos de transparência
- Status geral de atualização
- Botão “Ver dados”

Exemplo de categorias:
- Gestão Fiscal: receitas, despesas, relatórios fiscais, execução orçamentária
- Obras e Infraestrutura: obras públicas, situação, valores, prazos
- Pessoal: servidores, remuneração, cargos, estrutura
- Licitações e Contratos: licitações, contratos, fornecedores, atas
- Emendas Parlamentares: autor, valor, destino, execução

3. Página de um Assunto
Criar uma tela para quando o usuário clicar em um tema, por exemplo “Licitações e Contratos”.
Essa página deve ter:
- Título do assunto
- Descrição simples
- Filtros laterais:
  - Órgão
  - Ano
  - Status
  - Tipo de dado
  - Origem do dado: Automático / Manual
  - Frequência de atualização
- Lista de objetos de transparência em formato de cards ou tabela

Cada item deve mostrar:
- Nome do objeto
- Descrição curta
- Prazo legal de publicação
- Frequência de atualização
- Origem do dado
- Status: atualizado, em validação ou atrasado
- Botões:
  - Ver detalhes
  - Baixar CSV
  - Baixar JSON

4. Página de Detalhe do Objeto de Transparência
Criar uma página detalhada para um objeto, por exemplo “Contratos Administrativos”.
A página deve conter:

Topo:
- Nome do objeto
- ID do objeto, exemplo MT-0021
- Badge de status: Ativo
- Badge de atualização: Atualizado no prazo
- Botão “Baixar dados”
- Botão “Ver API”

Seções:
A. O que é?
Mostrar uma explicação simples e cidadã sobre aquele dado.

B. O que inclui?
Mostrar a nota de escopo em linguagem simples.

C. Metadados obrigatórios
Exibir uma tabela com campos como:
- Número do contrato
- Órgão responsável
- Fornecedor
- CPF/CNPJ
- Valor
- Data de assinatura
- Vigência
- Situação
- Base legal

D. Dados publicados
Exibir uma tabela interativa com:
- Busca
- Ordenação
- Paginação
- Exportação CSV/JSON

E. Base legal
Mostrar leis e normas relacionadas em cards:
- Lei de Acesso à Informação
- Lei de Responsabilidade Fiscal
- Lei de Licitações
- LGPD, quando aplicável

F. Relações do Tesauro
Mostrar uma área “Veja também” com:
- Termo genérico
- Termos específicos
- Termos relacionados
- Termos equivalentes ou sinônimos

Essa seção pode ter visual de grafo, mapa mental ou cards conectados.

5. Busca Inteligente
Criar uma tela de resultados de busca.
A busca deve aceitar termos populares e sinônimos.
Exemplo:
Usuário busca “salário”
Sistema sugere “Remuneração de servidores”.

A tela deve mostrar:
- Campo de busca no topo
- Sugestões automáticas
- Resultados agrupados por assunto
- Filtros por tema, órgão, ano e tipo de dado
- Destaque para resultado mais provável

6. Dados Abertos
Criar uma página específica para dados abertos.
Ela deve conter:
- Lista de datasets
- Formatos disponíveis: CSV, JSON, XLSX
- Documentação da API
- Data da última atualização
- Frequência de atualização
- Botão de download
- Botão “Copiar endpoint da API”

7. Indicadores de qualidade da transparência
Criar uma área visual mostrando:
- Percentual de dados atualizados no prazo
- Dados atrasados
- Dados em validação
- Órgãos com melhor desempenho
- Órgãos com pendências

Usar badges:
- Verde: atualizado
- Amarelo: em validação
- Vermelho: atrasado

8. Área de Transparência Passiva
Criar uma página para acesso à informação, com:
- Explicação simples sobre pedidos de informação
- Botão “Fazer pedido”
- Botão “Acompanhar pedido”
- Estatísticas:
  - Pedidos recebidos
  - Pedidos respondidos
  - Tempo médio de resposta

9. Design visual
Estilo:
- Moderno
- Institucional
- Limpo
- Acessível
- Inspirado em govtech
- Layout com bastante espaço em branco
- Cards arredondados
- Ícones simples
- Tipografia clara
- Visual confiável, mas não burocrático

Cores sugeridas:
- Verde escuro institucional
- Azul para dados e confiança
- Branco como fundo principal
- Cinza claro para áreas secundárias
- Amarelo/vermelho apenas para alertas

10. Componentes importantes
Criar componentes reutilizáveis:
- Header
- Sidebar de filtros
- Card de assunto
- Card de indicador
- Tabela de dados
- Badge de status
- Breadcrumb
- Modal de detalhes
- Card de base legal
- Componente “Veja também”
- Barra de busca global

11. Fluxo principal do usuário
Mostrar visualmente este fluxo:
Home → Busca ou escolha de tema → Lista de objetos → Detalhe do objeto → Consulta de dados → Download/API

12. Diferencial para hackathon
Adicionar uma funcionalidade de destaque:
“Mapa da Transparência”
Uma tela com visual de grafo mostrando como os dados se conectam:
- Gestão Fiscal conectado com Despesas
- Despesas conectado com Contratos
- Contratos conectado com Fornecedores
- Obras conectado com Contratos
- Emendas conectado com Execução Orçamentária

Esse mapa deve ajudar o cidadão a navegar por relações entre informações públicas.

Resultado esperado:
Gerar um protótipo visual completo, navegável e inspirador, mostrando as principais telas, fluxos e componentes do Portal da Transparência do Maranhão.
O design deve parecer pronto para um MVP de hackathon, com boa experiência de usuário e foco em clareza, transparência e dados abertos.
