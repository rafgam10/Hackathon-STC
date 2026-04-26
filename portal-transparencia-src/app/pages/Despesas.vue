<script setup lang="ts">
import type { PricingTableTier, PricingTableSection } from '@nuxt/ui'
import utils from '../utils/util_dados'

const itemsAno = ref(['2026', '2025', '2024', '2023', '2022', '2021'])
const valueAno = ref('2023')

const itemsMes = ref([
  { label: 'Janeiro', value: 1 },
  { label: 'Fevereiro', value: 2 },
  { label: 'Março', value: 3 },
  { label: 'Abril', value: 4 }
])
const valueMes = ref(2)

const itemsUnidade = ref([
  { label: 'Secretaria de Transparência', value: 110122 },
  { label: 'Assembleia Legislativa', value: 10101 },
  { label: 'Todo', value: 0 }
])
const valueUnidadde = ref(110122)

const loading = ref(false)
const error = ref<string | null>(null)

const tiers = ref<PricingTableTier[]>([
  {
    id: 'empenho',
    title: 'Empenho',
    price: 'R$ 0,00',
    description: 'Reserva formal do valor no orçamento público garantindo o pagamento de um serviço contratado.',
  },
  {
    id: 'liquidado',
    title: 'Liquidado',
    price: 'R$ 0,00',
    description: 'Verificação oficial de que o bem foi entregue ou o serviço foi realizado conforme o combinado.',
  },
  {
    id: 'pago',
    title: 'Pago',
    price: 'R$ 0,00',
    description: 'Fase final onde ocorre a transferência do recurso para a conta bancária do fornecedor direto.',
  }
])

const sections = ref<PricingTableSection[]>([])

const formatarMoeda = (valor: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}

const buscarDados = async () => {
  loading.value = true
  error.value = null
  
  try {
    const ano = parseInt(valueAno.value as string)
    const mes = valueMes.value
    const codigo_ug = valueUnidadde.value
    
    const totais = await utils.Obter_Consulta_Despesas(ano, mes, codigo_ug)
    
    tiers.value = [
      {
        id: 'empenho',
        title: 'Empenho',
        price: formatarMoeda(totais.total_empenho),
        description: 'Reserva formal do valor no orçamento público garantindo o pagamento de um serviço contratado.',
      },
      {
        id: 'liquidado',
        title: 'Liquidado',
        price: formatarMoeda(totais.total_liquido),
        description: 'Verificação oficial de que o bem foi entregue ou o serviço foi realizado conforme o combinado.',
      },
      {
        id: 'pago',
        title: 'Pago',
        price: formatarMoeda(totais.total_pago),
        description: 'Fase final onde ocorre a transferência do recurso para a conta bancária do fornecedor direto.',
      }
    ]
    
    const mesLabel = (itemsMes.value as any[]).find(m => m.value === mes)?.label || 'Janeiro'
    const unidadeLabel = (itemsUnidade.value as any[]).find(u => u.value === codigo_ug)?.label || 'Todos'
    
    sections.value = [
      {
        title: `${codigo_ug}`,
        features: [
          {
            title: unidadeLabel,
            tiers: {
              empenho: formatarMoeda(totais.total_empenho),
              liquidado: formatarMoeda(totais.total_liquido),
              pago: formatarMoeda(totais.total_pago)
            }
          }
        ]
      }
    ]
  } catch (err: any) {
    error.value = err.message || 'Erro ao buscar dados'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  buscarDados()
})
</script>

<template>
    <main class="flex justify-around items-center w-full h-[80%]">
        <div class="flex m-8 h-full w-full justify-between gap-4">
            <UPageCard color="quaternary" class="w-sm h-full p-4 light:shadow-[0px_0px_10px]" :ui="{
                container: 'justify-center'
            }" title="Filtragem de Custos"
                description="Preencha os campos, seguindo a ordem e faça a pesquisa.">
                <UForm class="flex flex-col gap-3">
                    <UFormField label="Ano:">
                        <USelect v-model="valueAno" class="flex items-center justify-center w-full" :items="itemsAno" />
                    </UFormField>
                    <UFormField label="Mês:">
                        <USelect v-model="valueMes" class="flex items-center justify-center w-full" :items="itemsMes" option-attribute="label" value-attribute="value" />
                    </UFormField>

                    <UFormField label="Unidade/Local: ">
                        <USelect v-model="valueUnidadde" class="flex items-center justify-center w-full" :items="itemsUnidade" option-attribute="label" value-attribute="value" />
                    </UFormField>

                    <UButton @click="buscarDados" :loading="loading" color="emerald" class="w-full">
                        {{ loading ? 'Carregando...' : 'Buscar' }}
                    </UButton>

                    <div v-if="error" class="text-red-500 text-sm p-2 bg-red-50 rounded">
                        ❌ {{ error }}
                    </div>
                </UForm>
            </UPageCard>

            <UPageCard color="quaternary" class="w-full light:shadow-[0px_0px_10px]">
                <UPageGrid>
                    
                </UPageGrid>
                  <UPricingTable
                  :ui="{
                    tierPrice: 'text-highlighted text-2xl sm:text-3xl font-semibold',
                    tierFeatureIcon: 'text-quaternary',
                    item: 'w-xl p-6 flex flex-col border border-default rounded-lg',
                    tierTitle: 'text-2xl font-semibold text-highlighted'
                  }" color="quaternary" :tiers="tiers" :sections="sections" />
            </UPageCard>
        </div>
    </main>
</template>