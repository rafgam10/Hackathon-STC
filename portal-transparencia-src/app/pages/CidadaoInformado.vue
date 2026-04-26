<script setup lang="ts">
// import Testimg from '~/assets/imgs/teste.jpg'

function Button() {
  console.log('botao apertado')
}

const gridButtons = ref([
  {
    title: 'Estado',
    description: 'Visão geral das receitas e despesas consolidadas do Governo do Maranhão.',
    nomeBotao: 'GRÁFICOS CONSOLIDADOS',
    icon: 'material-symbols:account-balance'
  },
  {
    title: 'Unidade Gestora',
    description: 'Dados detalhados por Secretaria, Autarquia ou Fundação estadual.',
    nomeBotao: 'BUSCA POR ÓRGÃO',
    icon: 'ix:user-management'
  },
  {
    title: 'Funções',
    description: 'Gastos agrupados por áreas de atuação como Saúde, Educação e Segurança.',
    nomeBotao: 'DISTRIBUIÇÃO SETORIAL',
    icon: ''
  },
  {
    title: 'Programas',
    description: 'Acompanhamento dos investimentos em programas governamentais específicos.',
    nomeBotao: 'METAS E INVESTIMENTOS',
    icon: ''
  }
])

</script>

<template>
  <div class="min-h-screen text-white">
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      <!-- Hero / instruções -->
      <UCard class="">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-2xl">
            <p class="text-sm uppercase tracking-[0.35em] text-emerald-700">
              Consulta Cidadã
            </p>
            <h1 class="mt-4 text-3xl font-semibold sm:text-4xl light:text-black">
              Explore e entenda como o Estado utiliza recursos públicos
            </h1>
            <p class="mt-5 text-base leading-7 text-slate-600">
              Explore e entenda como o Estado utiliza os recursos públicos de forma clara e acessível. Selecione o tipo,
              aplique filtros e analise os dados com facilidade.
            </p>
          </div>
        </div>

        <UPageGrid class="p-6 w-6xl" :ui="{
          base: 'relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
        }">
          <UButton variant="outline"
            class="light:shadow-[0px_0px_8px_#292929] hover:scale-[1.05] active:scale-[1.085] transition-transform duration-200 ease-out cursor-pointer"
            v-for="(card, index) in gridButtons" :key="index">
            <div class="flex flex-col p-6 gap-3">
              <UIcon :name="card.icon" size="40" />
              <h3 class=" text-lg font-semibold">{{ card.title }}</h3>
              <p class=" text-sm text-slate-600">
                {{ card.description }}
              </p>
              <p class=" text-sm font-semibold text-emerald-700">
                {{ card.nomeBotao }}
              </p>
            </div>
          </UButton>
        </UPageGrid>
      </UCard>
    </div>
  </div>
</template>