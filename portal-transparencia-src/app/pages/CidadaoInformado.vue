<script setup lang="ts">
// import Testimg from '~/assets/imgs/teste.jpg'

</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      <!-- Hero / instruções -->
      <div class="rounded-[32px] bg-white/95 p-8 shadow-2xl ring-1 ring-slate-200 text-slate-950">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-2xl">
            <p class="text-sm uppercase tracking-[0.35em] text-emerald-700">
              Consulta Cidadã
            </p>
            <h1 class="mt-4 text-3xl font-semibold sm:text-4xl">
              Explore e entenda como o Estado utiliza recursos públicos
            </h1>
            <p class="mt-5 text-base leading-7 text-slate-600">
              Explore e entenda como o Estado utiliza os recursos públicos de forma clara e acessível. Selecione o tipo, aplique filtros e analise os dados com facilidade.
            </p>
          </div>

          <div class="flex items-center justify-start">
            <UButton color="primary" class="rounded-full px-8 py-4 text-sm font-semibold">
              Começar consulta
            </UButton>
          </div>
        </div>

        <div class="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 p-6">
          <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-sm font-semibold">
                1
              </div>
              <h2 class="mt-5 text-lg font-semibold">Escolha o tipo</h2>
              <p class="mt-3 text-sm text-slate-300">
                Selecione entre Estado, Órgãos, Funções ou Programas.
              </p>
            </div>

            <div class="rounded-3xl bg-white p-6 text-slate-950 shadow">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-200 text-slate-700 text-sm font-semibold">
                2
              </div>
              <h2 class="mt-5 text-lg font-semibold">Aplique filtros</h2>
              <p class="mt-3 text-sm text-slate-600">
                Refine sua busca por ano, mês, favorecido ou fonte de recurso.
              </p>
            </div>

            <div class="rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-sm font-semibold">
                3
              </div>
              <h2 class="mt-5 text-lg font-semibold">Analise os dados</h2>
              <p class="mt-3 text-sm text-slate-300">
                Visualize gráficos, baixe tabelas e entenda os gastos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards de visão desejada -->
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <UCard class="overflow-hidden border border-slate-200 bg-white text-slate-950 shadow-sm">
          <div class="p-6">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white">
              E
            </div>
            <h3 class="mt-6 text-lg font-semibold">Estado</h3>
            <p class="mt-3 text-sm text-slate-600">
              Visão geral das receitas e despesas consolidadas do Governo do Maranhão.
            </p>
            <p class="mt-6 text-sm font-semibold text-emerald-700">
              GRÁFICOS CONSOLIDADOS
            </p>
          </div>
        </UCard>

        <UCard class="overflow-hidden border border-slate-200 bg-white text-slate-950 shadow-sm">
          <div class="p-6">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
              U
            </div>
            <h3 class="mt-6 text-lg font-semibold">Unidade Gestora</h3>
            <p class="mt-3 text-sm text-slate-600">
              Dados detalhados por Secretaria, Autarquia ou Fundação estadual.
            </p>
            <p class="mt-6 text-sm font-semibold text-slate-700">
              BUSCA POR ÓRGÃO
            </p>
          </div>
        </UCard>

        <UCard class="overflow-hidden border border-slate-200 bg-white text-slate-950 shadow-sm">
          <div class="p-6">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500 text-white">
              F
            </div>
            <h3 class="mt-6 text-lg font-semibold">Funções</h3>
            <p class="mt-3 text-sm text-slate-600">
              Gastos agrupados por áreas de atuação como Saúde, Educação e Segurança.
            </p>
            <p class="mt-6 text-sm font-semibold text-rose-600">
              DISTRIBUIÇÃO SETORIAL
            </p>
          </div>
        </UCard>

        <UCard class="overflow-hidden border border-slate-200 bg-white text-slate-950 shadow-sm">
          <div class="p-6">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-700 text-white">
              P
            </div>
            <h3 class="mt-6 text-lg font-semibold">Programas</h3>
            <p class="mt-3 text-sm text-slate-600">
              Acompanhamento dos investimentos em programas governamentais específicos.
            </p>
            <p class="mt-6 text-sm font-semibold text-slate-700">
              METAS E INVESTIMENTOS
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>