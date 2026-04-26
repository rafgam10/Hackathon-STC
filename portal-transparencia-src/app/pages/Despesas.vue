<script setup lang="ts">
import type { PricingTableTier, PricingTableSection } from '@nuxt/ui'

const itemsAno = ref(['2026', '2025', '2024', '2023', '2022', '2021'])
const valueAno = ref('2026')

const itemsMes = ref(['Janeiro', 'Fevereiro', 'Março', 'Abril', ''])
const valueMes = ref('Janeiro')

const itemsUnidade = ref(['Assebleia Legislativa', 'Todo', 'In Progress', 'Done'])
const valueUnidadde = ref('Asssembleia Legislativa')

const tiers = ref<PricingTableTier[]>([
  {
    id: 'empenho',
    title: 'Empenho',
    price: 'R$ 4.299.327,56',
    description: 'Reserva formal do valor no orçamento público garantindo o pagamento de um serviço contratado.',
  },
  {
    id: 'liquidado',
    title: 'Liquidado',
    price: 'R$ 4.771.772,64',
    description: 'Verificação oficial de que o bem foi entregue ou o serviço foi realizado conforme o combinado.',
  },
  {
    id: 'pago',
    title: 'Pago',
    price: 'R$ 9.185.247,92',
    description: 'Fase final onde ocorre a transferência do recurso para a conta bancária do fornecedor direto.',
  }
])
const sections = ref<PricingTableSection[]>([
  {
    title: '10101',
    features: [
      {
        title: 'Assembleia Legislativa do Maranhão',
        tiers: {
          empenho: 'R$ 4.299.327,56',
          liquidado: 'R$ 4.771.772,64',
          pago: 'R$ 9.185.247,92'
        }
      }
    ]
  }
])
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

                        <USelect v-model="valueMes" class="flex items-center justify-center w-full" :items="itemsMes" />
                    </UFormField>

                    <UFormField label="Unidade/Local: ">
                        <USelect v-model="valueUnidadde" class="flex items-center justify-center w-full" :items="itemsUnidade" />
                    </UFormField>
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