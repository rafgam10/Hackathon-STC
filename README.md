# Hackathon STC

Uma plataforma intuitiva que transforma dados públicos do Maranhão em informações claras, acessíveis e exploráveis pelo cidadão.

## Problema

A transparência pública ainda é pouco acessível para o cidadão comum, pois os portais existentes são complexos, técnicos e difíceis de navegar.

### Qual é a dor?
Os usuários têm dificuldade em encontrar, entender e interpretar dados públicos, como gastos, contratos e programas governamentais. As informações existem, mas estão mal organizadas e pouco amigáveis.

### Quem é afetado?
Cidadãos, jornalistas, pesquisadores e até servidores públicos que precisam acessar informações de forma rápida e clara.

### Por que isso é importante?
Sem acesso fácil e compreensão dos dados, a população não consegue exercer plenamente o controle social, o que enfraquece a transparência, a fiscalização e a participação cidadã.

## Solução

O projeto reorganiza o portal da transparência, dividindo a navegação em dois perfis principais: Cidadão e Profissional. Cada perfil apresenta páginas mais claras, com linguagem simples e foco no uso pelo celular.

### O que o projeto faz?
- Reorganiza o portal da transparência do Maranhão.
- Divide a navegação em perfis: Cidadão (para usuários comuns) e Profissional (para técnicos e especialistas).
- Oferece páginas intuitivas com informações acessíveis, como despesas públicas, serviços disponíveis e histórico do portal.

### Como resolve o problema?
Reduz a confusão ao mostrar apenas o que é relevante para cada usuário, melhora a estrutura das páginas e simplifica a linguagem, tornando as informações mais fáceis de encontrar e entender. A interface é otimizada para dispositivos móveis, facilitando o acesso em qualquer lugar.

### Qual o diferencial?
Não adiciona mais conteúdo, mas transforma a forma como ele é apresentado — focando na experiência do usuário, na clareza da informação e na adaptação para diferentes perfis. Utiliza tecnologias modernas para uma navegação fluida e responsiva.

## Público-alvo

### Quem vai usar?
- Cidadãos que buscam informações simples sobre serviços públicos, despesas e transparência.
- Profissionais ou técnicos que precisam de dados mais detalhados e específicos para análise ou fiscalização.

### Cenário de uso
Usuários acessando o portal, principalmente pelo celular, para consultar informações públicas de forma rápida, clara e sem dificuldade de entendimento. Por exemplo, um cidadão verificando despesas municipais ou um jornalista pesquisando contratos governamentais.

## Tecnologias Utilizadas

Liste as principais tecnologias empregadas no desenvolvimento:

- **Frontend**: JavaScript, TypeScript, Vue.js, Nuxt.js, Tailwind CSS
- **APIs**: API do Portal da Transparência do Maranhão (https://transparencia.ma.gov.br/api/doc#/Despesas/356ae66617049bac05e7d9c87cb5589e)
- **Outras ferramentas**: Figma, Stitch para design de interface, Vencel deploy do projeto

## Arquitetura

O sistema é construído com Nuxt.js, um framework Vue.js para aplicações universais. A estrutura do projeto inclui:

- **Páginas**: Componentes Vue para cada seção do portal (ex.: Área do Fiscal, Cidadão Informado, Despesas).
- **Utilitários**: Funções auxiliares para manipulação de dados (localizados em `utils/`).
- **Assets**: Estilos CSS e imagens para a interface.
- **Configuração**: Arquivos de configuração para Nuxt.js, TypeScript e ESLint.

A arquitetura segue boas práticas de desenvolvimento frontend, com separação de responsabilidades e foco em performance e acessibilidade.

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   ```

2. **Entre na pasta do projeto**:
   ```bash
   cd portal-transparencia-src
   ```

3. **Instale as dependências** (usando pnpm, conforme o lockfile):
   ```bash
   pnpm install
   ```

4. **Execute o projeto em modo de desenvolvimento**:
   ```bash
   pnpm run dev
   ```

5. **Acesse a aplicação**:
   Abra o navegador e vá para `http://localhost:3000` (ou a porta indicada no terminal).

### Requisitos
- Node.js (versão 16 ou superior)
- pnpm (gerenciador de pacotes)

## Estrutura do Projeto

```
portal-transparencia-src/
├── app/
│   ├── app.config.ts
│   ├── app.vue
│   └── pages/
│       ├── AreaDoFiscal.vue
│       ├── CidadaoInformado.vue
│       ├── Despesas.vue
│       ├── HistoriaPortal.vue
│       ├── index.vue
│       ├── Servicos.vue
│       ├── sobre.vue
│       └── tempindex.vue
├── assets/
│   ├── css/
│   │   └── main.css
│   └── imgs/
├── public/
│   └── home-imgs/
├── tests/
│   └── util_test.ts
├── utils/
│   └── util_dados.ts
├── eslint.config.mjs
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── renovate.json
└── tsconfig.json
```

## Demonstração

- **Prints do sistema**: Imagens das páginas principais, mostrando a interface para os perfis Cidadão e Profissional.
- **GIF ou vídeo**: Animações demonstrando a navegação e consulta de dados.
- **Link para demo**: [Link para demonstração online, se disponível].

## Funcionalidades

- [x] Página inicial com navegação por perfis
- [x] Área do Fiscal: Informações sobre fiscalização e controle social
- [x] Cidadão Informado: Conteúdo acessível para cidadãos comuns
- [x] Despesas: Visualização de gastos públicos com uso de API
- [x] Serviços: Lista de serviços disponíveis
- [x] História do Portal: Contexto histórico do portal de transparência
- [x] Sobre: Informações sobre o projeto
- [-] Integração completa com APIs do governo
- [X] Otimização para dispositivos móveis

## Diferenciais

- Interface adaptada para dois perfis de usuário, melhorando a experiência personalizada.
- Uso de tecnologias modernas como Nuxt.js e Tailwind CSS para uma aplicação rápida e responsiva.
- Foco em acessibilidade e simplicidade, tornando dados complexos compreensíveis.
- Desenvolvimento em hackathon, demonstrando inovação rápida em transparência pública.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

* O que torna seu projeto especial?<br>
Ele não foca em adicionar mais funcionalidades, mas em resolver o principal problema: a forma como a informação é apresentada. A solução simplifica, organiza e adapta o portal para diferentes perfis, tornando a transparência realmente acessível.


* Por que ele deveria ganhar?<br>
Porque gera impacto real com uma solução prática e aplicável, melhora a experiência do usuário, amplia o acesso à informação pública e fortalece a transparência de forma efetiva, sem depender de mudanças complexas ou alto custo.

---

## ⚠️ Limitações

* O que não foi possível implementar<br>
Algumas integrações completas com APIs e todos os tipos de dados do portal, além da aplicação da nova estrutura em 100% das páginas.

* Melhorias futuras<br>
Expandir a solução para todo o portal, aprofundar integrações com dados em tempo real, implementar personalização mais avançada por usuário e realizar testes com usuários para evoluir continuamente a experiência.

---

## 👨‍💻 Equipe

* Rafael Timóteo Costa Oliveira - Dev e DevOps
* Gheorghe Marighella Lima Bastos - Dev
* João Guilherme Fonseca Gomes Costa - Dev
* Luis Felipe da Cunha Castro - Dev
* João Pedro Cardoso Maranhão - Dev
* Pedro Henrique Serra Brasil - Dev

---

## 🎤 Pitch (resumo rápido)


> Nosso projeto resolve a dificuldade de acesso e entendimento das informações do portal através da segmentação por perfis — *Cidadão e Profissional* —, reorganização da interface e simplificação da linguagem, ajudando usuários a encontrar, entender e utilizar as informações públicas de forma rápida e intuitiva.

---

## 📌 Status do projeto

* Finalizado - Data: 26/abril/2026

---

## 📎 Links úteis

* Link do Projeto: https://hackathon-stc-avna.vercel.app/


