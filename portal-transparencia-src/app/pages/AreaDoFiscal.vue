<script setup lang="ts">


function apertarBotao() {
  console.log('botao apertado')
}

const cards = ref([
  {
    title: 'Despesas',
    description: 'Transparência total sobre cada centavo gasto. Aqui você encontra as despesas por secretaria, fornecedor e categoria. Uma ferramenta completa para quem quer entender os custos do governo e fiscalizar a aplicação correta do dinheiro público.',
    icon: 'material-symbols:shopping-cart-outline',
  },
  {
    title: 'Receitas',
    description: 'Descubra como o Maranhão arrecada os recursos que mantêm os serviços públicos funcionando. Acompanhe a entrada de impostos, repasses federais e outras fontes que compõem o orçamento do nosso Estado.',
    icon: 'material-symbols:trending-up',
  },
  {
    title: 'Pessoal + Diárias',
    description: 'Conheça as pessoas que trabalham para o Maranhão. Acesse a lista de servidores públicos, consulte salários, cargos e funções, e acompanhe como o Estado investe na força de trabalho que presta serviços à população',
    icon: 'material-symbols:groups',
  },
  {
    title: 'Remuneração de Servidores',
    description: 'Acesse o detalhamento da folha de pagamento de forma clara. Pesquise por nome ou órgão para ver a remuneração bruta e líquida dos servidores, fortalecendo a fiscalização sobre o uso das verbas destinadas ao funcionalismo público.',
    icon: 'material-symbols:payments',
  },
  {
    title: 'Transferências',
    description: 'Acompanhe para onde o Estado transfere recursos. Confira os valores enviados a prefeituras e instituições parceiras, fiscalizando a execução de convênios e a distribuição de verbas para o desenvolvimento regional."',
    icon: 'material-symbols:swap-horiz',
  },
  {
    title: 'Extraorçamentário',
    description: 'Nem todo dinheiro que passa pelo Estado é gasto público. Entenda os recursos que apenas transitam pelas contas estaduais, como depósitos de garantias e retenções temporárias, garantindo a transparência total sobre cada movimento financeiro.',
    icon: 'material-symbols:account-balance',
  },
  {
    title: 'Licitações',
    description: 'Acompanhe de perto as compras feitas pelo Estado. Veja quais empresas estão fornecendo produtos e serviços, consulte os preços pagos e fiscalize os processos de licitação para garantir que o dinheiro público seja usado com economia e honestidade.',
    icon: 'material-symbols:gavel',
  },
  {
    title: 'Contratos',
    description: 'Fiscalize os acordos assinados pelo Estado. Acesse a íntegra dos contratos, verifique os prazos de entrega, os valores envolvidos e os responsáveis pela execução de serviços e obras em todo o Maranhão.',
    icon: 'material-symbols:description',
  },
  {
    title: 'Obras',
    description: 'Siga o progresso das construções em todo o Estado. Veja fotos, acompanhe os prazos de entrega e saiba exatamente quanto está sendo investido em hospitais, escolas e estradas na sua região.',
    icon: 'material-symbols:construction',
  },
  {
    title: 'Emendas Parlamentares',
    description: 'Acompanhe como os deputados estaduais destinam recursos para o Maranhão. Veja quais cidades e projetos receberam verbas por indicação parlamentar e fiscalize se o dinheiro está sendo aplicado conforme o planejado.',
    icon: 'material-symbols:how-to-vote',
  },
  {
    title: 'Ordem Cronológica',
    description: 'Transparência total na hora de pagar. Acompanhe a lista de pagamentos do Estado e confira se a ordem de chegada das faturas está sendo respeitada, garantindo que nenhuma empresa passe na frente de outra e que o dinheiro público seja gerido com justiça.',
    icon: 'material-symbols:schedule',
  }
])

const cardsAbaixo = ref([
  {
    title: 'Gestão Fiscal',
    description: 'Fiscalize as contas públicas de um jeito fácil. Acesse os balanços que mostram a saúde financeira do Maranhão, os limites de gastos por lei e os documentos técnicos que garantem que o dinheiro público está sendo usado com responsabilidade.',
    icon: 'material-symbols:attach-money',
  },
  {
    title: 'Controle',
    description: 'Aqui você encontra informações sobre como o governo monitora, fiscaliza e aprimora suas próprias atividades, garantindo o uso adequado dos recursos públicos e o atendimento às necessidades da população.',
    icon: 'material-symbols:folder-eye',
  },
  {
    title: 'Legislação',
    description: 'Conheça as leis que garantem o seu direito de fiscalizar o governo. Aqui você encontra as regras que obrigam a transparência no Maranhão e as normas que protegem o seu acesso a qualquer informação pública.',
    icon: 'material-symbols:account-balance-outline',
  }
])
</script>

<template>
  <div class="flex flex-col w-full justify-center">
    <UPageHero class="mb-[-1.5rem]"
    title="Área do Fiscal" description="Explore os bastidores da gestão pública." />

    <div class="flex flex-col items-center gap-7 m-7 justify-center">

      <UPageGrid class="w-6xl">
        <UPageCard class="light:shadow-[0px_0px_8px_#292929] hover:scale-[1.05] active:scale-[1.085] transition-transform duration-200 ease-out cursor-pointer"
         v-for="(card, index) in cards" :key="index" v-bind="card" />
      </UPageGrid>

    </div>

    <div class="flex flex-col items-center gap-7 justify-center">
      <USeparator class="w-[80%]" />
      <UPageGrid class="w-6xl">
        <UPageCard class="light:shadow-[0px_0px_8px_#292929] hover:scale-[1.05] active:scale-[1.085] transition-transform duration-200 ease-out cursor-pointer" type="button" @click="apertarBotao"
          v-for="(card, index) in cardsAbaixo" :key="index" v-bind="card">
        </UPageCard>
      </UPageGrid>
    </div>

  </div>
</template>
