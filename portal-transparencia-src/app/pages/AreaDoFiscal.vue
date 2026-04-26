<script setup lang="ts">
import { icons } from '@iconify-json/lucide/index.js';



function apertarBotao() {
  console.log('botao apertado')
}

const cards = ref([
  {
    title: 'Despesas',
    description: 'Acompanhe detalhadamente para onde vai cada centavo do imposto, consultando gastos por secretaria, fornecedores e categorias.',
    icon: 'material-symbols:shopping-cart-outline',
    to: './Despesas'
  },
  {
    title: 'Receitas',
    description: 'Veja como o Estado arrecada recursos através de impostos e repasses para financiar os serviços públicos oferecidos à população.',
    icon: 'material-symbols:trending-up',
  },
  {
    title: 'Pessoal + Diárias',
    description: 'Conheça quem faz o Estado acontecer. Acesse a lista de servidores, cargos ocupados e os investimentos na força de trabalho.',
    icon: 'material-symbols:groups',
  },
  {
    title: 'Remuneração de Servidores',
    description: 'Fiscalize a folha de pagamento de forma direta, consultando salários brutos e líquidos de todos os servidores públicos ativos.',
    icon: 'material-symbols:payments',
  },
  {
    title: 'Transferências',
    description: 'Monitore o envio de recursos estaduais para prefeituras e instituições parceiras, garantindo o controle sobre convênios e repasses.',
    icon: 'material-symbols:swap-horiz',
  },
  {
    title: 'Extraorçamentário',
    description: 'Entenda os valores que apenas transitam pelas contas públicas, como depósitos judiciais e garantias que não pertencem ao Estado.',
    icon: 'material-symbols:account-balance',
  },
  {
    title: 'Licitações',
    description: 'Acompanhe os processos de compra do governo, verificando preços, editais e as empresas que disputam o fornecimento de serviços.',
    icon: 'material-symbols:gavel',
  },
  {
    title: 'Contratos',
    description: 'Acesse a íntegra dos documentos assinados pelo Estado e fiscalize prazos, valores e os responsáveis pela execução dos serviços.',
    icon: 'material-symbols:description',
  },
  {
    title: 'Obras',
    description: 'Siga o progresso das construções em sua região com fotos, cronogramas e o detalhamento dos investimentos em infraestrutura.',
    icon: 'material-symbols:construction',
  },
  {
    title: 'Emendas Parlamentares',
    description: 'Saiba quais cidades e projetos receberam verbas por indicação dos deputados estaduais e fiscalize a aplicação desses recursos.',
    icon: 'material-symbols:how-to-vote',
  },
  {
    title: 'Ordem Cronológica',
    description: 'Verifique a fila de pagamentos a fornecedores e garanta que a ordem de chegada das faturas seja respeitada com justiça e ética.',
    icon: 'material-symbols:schedule',
  }
])

const cardsAbaixo = ref([
  {
    title: 'Gestão Fiscal',
    description: 'Acompanhe a saúde financeira do Estado através de balanços e relatórios técnicos que garantem a responsabilidade com o dinheiro público.',
    icon: 'material-symbols:attach-money',
  },
  {
    title: 'Controle',
    description: 'Veja como o governo monitora e fiscaliza suas próprias atividades para garantir a melhor aplicação dos recursos e o atendimento ao cidadão.',
    icon: 'material-symbols:folder-eye',
  },
  {
    title: 'Legislação',
    description: 'Acesse as leis e normas que garantem seu direito de acesso à informação e as regras que obrigam a transparência em todo o Maranhão.',
    icon: 'ic:sharp-balance',
  }
])
</script>

<template>
  <div class="flex flex-col w-full justify-center items-center px-4 sm:px-6 lg:px-8">
    <UCard class="w-full max-w-7xl flex flex-col justify-center light:shadow-[0px_0px_8px_#292929]">
      <UPageHero class="mb-[-1.5rem]" title="Área Fiscal" description="Explore os bastidores da gestão pública." :ui="{
        container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-10 gap-16 sm:gap-y-10'
      }" />

      <div class="flex flex-col items-center gap-7 m-4 sm:m-7 justify-center">

        <UPageGrid class="w-full">
          <UButton variant="outline" color="quaternary" icon-size="3xl" sm:icon-size="4xl"
            class="flex flex-col p-3 sm:p-4 text-lg sm:text-xl justify-center items-center light:shadow-[0px_0px_8px_#292929] hover:scale-[1.05] active:scale-[1.085] transition-transform duration-200 ease-out cursor-pointer"
            type="button" @click="apertarBotao" v-for="(card, index) in cards" :key="index" v-bind="card">
            {{ card.title }}
            <p class="text-xs sm:text-sm text-neutral-500">{{ card.description }}</p>
          </UButton>
        </UPageGrid>

      </div>

      <div class="flex flex-col items-center gap-7 justify-center">
        <USeparator class="w-[80%]" />
        <UPageGrid class="w-full">
          <UButton variant="outline" color="quaternary" icon-size="4xl" sm:icon-size="7xl"
            class="flex flex-col p-3 sm:p-4 text-lg sm:text-xl justify-center items-center light:shadow-[0px_0px_8px_#292929] hover:scale-[1.05] active:scale-[1.085] transition-transform duration-200 ease-out cursor-pointer"
            type="button" @click="apertarBotao" v-for="(card, index) in cardsAbaixo" :key="index" v-bind="card">
            {{ card.title }}
            <p class="text-xs sm:text-sm text-neutral-500">{{ card.description }}</p>
          </UButton>
        </UPageGrid>

      </div>
    </UCard>
  </div>
</template>
