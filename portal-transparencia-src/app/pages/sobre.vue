<script setup lang="ts">
import { ref } from 'vue'

const cards = ref([
  {
    title: 'Despesas e receitas do Estado',
    description: 'Principal canal de acesso às informações públicas do Poder Executivo Estadual, mantido pela STC.',
    icon: 'i-lucide-banknote',
   
  },
  {
    title: 'Transferência de recursos',
    description: 'Acompanhe a aplicação dos recursos, gastos fiscais e orçamentários do Estado.',
    icon: 'i-lucide-landmark',
  },
  {
    title: 'Dados Fiscais, orçamentários e de gestão',
    description: 'Acompanhe o planejamento e a execução orçamentária do Estado. Acesse relatórios de gestão fiscal e o controle de metas da Lei de Respnsabiliade Fiscal.',
    icon: 'i-lucide-table-properties',
  },
  {
    title: 'Licitações e Contratos',
    description: 'Informações sobre processos licitatórios, contratos vigentes e convênios firmados.',
    icon: 'i-lucide-file-text',
  },
  {
    title: 'Pagamento de Diárias e Remuneração de Serviores',
    description: 'Consulta de remuneração e pagamento de diárias de servidores do estado.',
    icon: 'i-lucide-users',
  },
  {
    title: 'Séries Históricas',
    description: 'Acesse dados consolidados dos períodos 2009–2014 e 2015–2022.',
    icon: 'i-lucide-history',
  }
])
</script>
   
<template>
  <UContainer class="py-10">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
        Sobre
      </h2>
      <p class="text-gray-500 mt-2">O Portal da Transparência do Governo do Estado do Maranhão, desenvolvido e mantido pela Secretaria de Estado da Transparência e Controle (STC), é o principal canal de acesso às informações públicas do Poder Executivo Estadual. Seu propósito é assegurar a transparência da gestão pública, possibilitando que qualquer cidadão acompanhe a aplicação dos recursos do Estado.</p>
    </div>
    <div class="mb-8">
        <h2 class="text-3xl font-bold  text-gray-900 dark:text-white">O que você encontra aqui </h2>
        <p class = "text-gray-500 mt-2"> Portal é possível acessar, de forma livre e gratuita:</p>
    </div>
    <UPageGrid class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" />
    </UPageGrid>
  </UContainer>
  <UContainer class="py-16">
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-4">Como o Portal foi desenvolvido</h2>
      <p class="text-gray-500 dark:text-gray-400">O Novo Portal foi estruturado para garantir simplicidade, acessibilidade e clareza, adotando como pilares:</p>
      
      <UPageGrid class="mt-8">
        <UPageCard icon="i-lucide-mouse-pointer-click" title="Navegação Intuitiva" description="Adequada a diferentes perfis de usuários." />
        <UPageCard icon="i-lucide-check-circle" title="Linguagem Simples" description="Traduz informações técnicas em dados compreensíveis." />
        <UPageCard icon="i-lucide-layout-grid" title="Áreas Temáticas" description="Organização que facilita a pesquisa por assunto." />
        <UPageCard icon="i-lucide-search" title="Busca Avançada" description="Filtros por órgão, fornecedor e período." />
        <UPageCard icon="i-lucide-accessibility" title="Acessibilidade" description="Compatibilidade total com leitores de tela." />
        <UPageCard icon="i-lucide-database" title="Dados Abertos" description="Dados reutilizáveis para cidadãos e pesquisadores." />
      </UPageGrid>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 mt-20 pt-16">
      <div>
        <h3 class="text-xl font-bold flex items-center gap-2 mb-4">
          <UIcon name="i-lucide-gavel" class="text-primary" />
          Compromisso com a Transparência
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          O Portal atende integralmente às normas da <strong>Lei de Acesso à Informação</strong> (Lei Federal nº 12.527/2011), 
          da <strong>Lei Complementar nº 131/2009</strong> e do <strong>Decreto nº 7.185/2010</strong>, 
          que regulamentam a disponibilização de dados em tempo real.
        </p>
      </div>

      <div>
        <h3 class="text-xl font-bold flex items-center gap-2 mb-4">
          <UIcon name="i-lucide-refresh-cw" class="text-primary" />
          Atualização e Controle
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Os dados são atualizados <strong>diariamente</strong>, garantindo informações confiáveis. 
          O Portal reforça o compromisso do Governo do Maranhão com a boa governança, 
          a transparência ativa e o combate à corrupção.
        </p>
      </div>
    </div>
  </UContainer>
</template>