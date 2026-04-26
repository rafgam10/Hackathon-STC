<script setup lang="ts">
import { button } from '#build/ui';
import { ref } from 'vue';

const opcoes = ref('Opções')

const gridButtons = ref([
  {
    title: 'Receitas e Gastos do Governo',
    description: 'Acompanhe as receitas arrecadadas e despesas realizadas pelo Governo do Maranhão de forma consolidada e transparente.',
    icon: 'material-symbols:account-balance',
    links: ['Gráficos Consolidados do MA']
  },
  {
    title: 'Secretarias e Instituições',
    description: 'Consulte dados de receitas e gastos de cada Secretaria, Autarquia ou Fundação do Estado do Maranhão.',
    icon: 'ix:user-management',
    links: ['Secretaria da Educação', 'Casa Cívil', 'Polícia Militar', 'Quero Escolher Outra Unidade']

  },
  {
    title: 'Funções',
    description: 'Visualize como os recursos públicos são distribuídos entre as principais funções do governo: Saúde, Educação, Segurança e outras.',
    icon: 'bxs:institution',
    links: ['Educação', 'Segurança', 'Saúde', 'Quero escolher outra função']
  },
  {
    title: 'Programas',
    description: 'Acompanhe os investimentos e gastos em programas governamentais específicos voltados para a população.',
    icon: 'material-symbols:handshake',
    links: ['Saúde para Todos', 'Mais segurança', 'Quero escolher outro programa']
  }
])

</script>

<template>
  <div class="min-h-screen text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
      <!-- Hero / instruções -->
      <UCard class="light:shadow-[0px_0px_8px_#292929]">
        <div class="flex flex-col justify-center items-center p-4 sm:p-8 lg:flex-row lg:items-center">
          <div class="flex flex-col justify-center items-center max-w-2xl text-center lg:text-left">
            <p class="text-sm uppercase tracking-[0.35em] text-emerald-700">
              Consulta Cidadã
            </p>
            <h1 class="mt-4 text-2xl sm:text-3xl font-semibold sm:text-4xl light:text-black">
              Explore e entenda como o Estado utiliza recursos públicos
            </h1>
            <p class="mt-5 text-base leading-7 text-slate-600">
              Entendemos a importância de ser um cidadão informado.

Por isso montamos essa área para você

Nela, buscamos apresentar diversas informações em linguagem simples, acessível e estruturada
            </p>
          </div>
        </div>

        <UPageGrid class="p-4 sm:p-6 w-full" :ui="{
          base: 'relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8'
        }">
          <UPageCard class="light:shadow-[0px_0px_8px_#292929]" :icon="card.icon" v-for="(card, index) in gridButtons" :key="index">
            <div class="flex flex-col gap-3 sm:gap-4 h-full">
              <h3 class="text-base sm:text-lg font-semibold light:text-black">{{ card.title }}</h3>
              <p class="text-sm text-slate-600">
                {{ card.description }}
              </p>
              <USelect v-model="opcoes" class="flex items-center justify-center w-full" :items="card.links" />
            </div>
          </UPageCard>
        </UPageGrid>
      </UCard>
    </div>
  </div>
</template>