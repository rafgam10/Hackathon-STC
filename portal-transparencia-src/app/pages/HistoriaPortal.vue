<script setup lang="ts">
import { ref } from 'vue'
import type { ChangelogVersionProps } from '@nuxt/ui'

const versions = ref<ChangelogVersionProps[]>([

  {
    title: 'Acessos ao Portal em 2025',
    description: '3.849.974 ACESSOS registrados no Portal.',
    date: '2025-12-31'
  },
  {
    title: 'Selo Diamante - ATRICON PNTP',
    description: 'Avaliação Dezembro 2025. Transparência: Nota: 97,62%',
    date: '2025-12-15'
  },
  {
    title: 'ITGP - Índice de Transparência Pública e Governança 2025',
    description: 'Transparência: Nota: 76.9 - Bom',
    date: '2025-12-01'
  },
  {
    title: 'Avaliação Diamante TCE-MA',
    description: 'Transparência: Nota: 95,64%. Avaliação realizada em Setembro/2025.',
    date: '2025-09-01'
  },
  // --- 2024 ---
  {
    title: 'Acessos ao Portal em 2024',
    description: '5.127.492 ACESSOS registrados.',
    date: '2024-12-31'
  },
  {
    title: 'Selo Diamante - ATRICON',
    description: 'Transparência: Nota: 95,37%',
    date: '2024-12-15'
  },
  {
    title: 'Avaliação dos Portais de Transparência pelo TCE/MA - 2° Semestre 2024',
    description: 'Transparência: Nota: 9,29 - Ranking A',
    date: '2024-11-01'
  },
  {
    title: 'Avaliação dos Portais de Transparência pelo TCE/MA - 1° Semestre 2024',
    description: 'Transparência: Nota: 95.91% - Ranking: A',
    date: '2024-03-01'
  },
  // --- 2023 ---
  {
    title: 'Acessos ao Portal em 2023',
    description: '2.890.868 ACESSOS registrados.',
    date: '2023-12-31'
  },
  {
    title: 'Avaliação dos Portais de Transparência pelo TCE/MA - 2° Semestre 2023',
    description: 'Transparência: Nota: 9.33 Ranking: A',
    date: '2023-11-20'
  },
  {
    title: 'Avaliação PNTP - Programa Nacional de Transparência Pública/ATRICON/2023',
    description: 'Transparência: Nota: 88,39% - Selo Ouro',
    date: '2023-11-01'
  },
  {
    title: 'Avaliação dos Portais de Transparência pelo TCE/MA',
    description: 'Transparência: Nota: 9.41 Ranking: A',
    date: '2023-05-01'
  },
  {
    title: 'Lançamento do Novo Portal da Transparência',
    description: 'Nova interface com o propósito de ampliar a transparência cidadã. Consulta de contratos, remuneração de servidores e buscas avançadas.',
    date: '2023-03-01'
  },
  // --- 2022 ---
  {
    title: 'Acessos ao Portal em 2022',
    description: 'Total de 2.766.256 acessos.',
    date: '2022-12-31'
  },
  {
    title: 'Selo Ouro - Programa Nacional de Transparência Pública - ATRICON',
    description: 'Transparência: Nota: 90,71%',
    date: '2022-11-01'
  },
  {
    title: 'ITGP - Índice de Transparência Pública e Governança 2022',
    description: 'Transparência: Nota: 64,7 - Bom',
    date: '2022-07-01'
  },
  {
    title: 'Avaliação TCE-MA',
    description: 'Transparência: Nota: 10.0 - A',
    date: '2022-07-01'
  },
  {
    title: 'Avaliação TCE-MA',
    description: 'Transparência: Nota: 9.05 - A',
    date: '2022-02-01'
  },
  // --- 2021 e Anterior ---
  {
    title: 'Acessos ao Portal em 2021',
    description: 'Total de 2.432.482 acessos.',
    date: '2021-12-31'
  },
  {
    title: 'Avaliação TCE-MA (Setembro/2021)',
    description: 'Transparência: Nota: 9.91 - A. Nota anterior em Dezembro/2021: 8.1 - B.',
    date: '2021-09-01'
  },
  {
    title: 'Escala Brasil Transparente 360 graus (CGU)',
    description: 'Avaliação do período de 01/04/2020 a 31/12/2020. Transparência: Nota: 8.96',
    date: '2020-12-31'
  },
  {
    title: 'Acessos ao Portal em 2020',
    description: 'Total de 2.355.720 acessos.',
    date: '2020-12-15'
  },
  {
    title: 'Acessos ao Portal em 2019',
    description: 'Total de 2.938.112 acessos.',
    date: '2019-12-31'
  },
  {
    title: 'Lançamento da 3ª versão do Portal da Transparência',
    description: 'Nova interface com o propósito de ampliar a transparência cidadã, consulta de contratos, remuneração e Dados Abertos.',
    date: '2017-04-01'
  },
  {
    title: 'Lançamento da 2ª versão do Portal da Transparência',
    description: 'Nova interface disponibilizada com todos os itens legais obrigatórios.',
    date: '2015-05-01'
  },
  {
    title: 'Lançamento da 1ª versão do Portal da Transparência',
    description: 'Cumprimento de obrigação legal.',
    date: '2010-01-01'
  }
])
</script>

<template>
  <div class="flex flex-col p-2">
    <UPageHero
      title="História do Portal"
      :ui="{
        container: 'relative z-10 py-16 lg:py-20'
      }"
    />
    <UPageCard class="w-full md:w-5xl md:mx-auto py-10">
      <UChangelogVersions
        :versions="versions"
      />
    </UPageCard>
  </div>
</template>
