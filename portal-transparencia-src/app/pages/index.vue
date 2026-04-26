<script setup lang="ts">
type UICol = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

const activeId = ref<string | null>(null)

function handleCategoryClick(cat: Category) {
  if (cat.to) {
    navigateTo(cat.to)
    return
  }

  activeId.value = activeId.value === cat.id ? null : cat.id
}

const activeCategory = computed(() => categories.find(c => c.id === activeId.value))

interface Category {
  id: string
  label: string
  icon: string
  color: UICol
  options?: { label: string, icon: string, to: string }[]
  to?: string
}

const searchQuery = ref('')
const suggestions = [
  'Como consultar despesas?',
  'Onde encontro licitações?',
  'Relatórios de transparência 2024',
  'Contatos das secretarias',
  'Lei de Acesso à Informação'
]

const helpItems = [
  { label: 'Como usar o site', icon: 'i-lucide-help-circle', to: '/ajuda', color: 'primary' },
  { label: 'Glossários', icon: 'i-lucide-book', to: '/glossario', color: 'quaternary' },
  { label: 'FAQ', icon: 'i-lucide-message-circle', to: '/faq', color: 'tertiary' }
]

const categories: Category[] = [
  {
    id: 'consulta_cidada',
    label: 'Consulta Cidadã',
    icon: 'i-lucide-search',
    color: 'primary',
    options: [
      { label: 'Como consultar?', icon: 'i-lucide-search', to: '/CidadaoInformado' },
      { label: 'Estado', icon: 'i-lucide-user', to: '#' },
      { label: 'Unidade Gestora', icon: 'i-lucide-file-text', to: '#' },
      { label: 'Funções', icon: 'i-lucide-bar-chart-3', to: '#' },
      { label: 'Programas', icon: 'i-lucide-package', to: '#' }
    ]
  },
  {
    id: 'nossa_historia',
    label: 'Nossa História',
    icon: 'i-lucide-book-open',
    color: 'secondary',
    options: [
      { label: 'História do portal', icon: 'i-lucide-book-open', to: '/HistoriaPortal' },
      { label: 'Sobre o portal', icon: 'i-lucide-target', to:'/sobre'},
      { label: 'Selo diamante', icon: 'i-lucide-gem', to: '#' },
      { label: 'Nossos números', icon: 'i-lucide-bar-chart-3', to: '#' },
      { label: 'Portal antigo', icon: 'i-lucide-archive', to: '#' }
    ]
  },
  {
    id: 'servicos',
    label: 'Serviços',
    icon: 'i-lucide-layout-grid',
    color: 'tertiary',
    to: '/Servicos'
  },
  {
    id: 'area_fiscal',
    label: 'Área Fiscal',
    icon: 'i-lucide-landmark',
    color: 'quaternary',
    to: '/AreaDoFiscal'
  }
]

const institutionalSites = [
  { name: 'Governo MA', logo: '/governo.png', to: 'https://www.ma.gov.br/' },
  { name: 'MpMA', logo: '/mpma.png', to: 'https://www.mpma.mp.br/' },
  { name: 'Defensoria Pública do Estado do Maranhão', logo: '/defensoria.png', to: 'https://defensoria.ma.def.br/dpema/' },
  { name: 'Tribunal de Contas do Estado do Maranhão', logo: '/tcema.png', to: 'https://www.tcema.tc.br/' },
  { name: 'Governo Federal', logo: '/govbr.webp', to: 'https://www.gov.br/pt-br' },
  { name: 'Portal do poder judiciário do estado do maranhão', logo: '/tjema.png', to: 'https://www.tjma.jus.br/' }
]
</script>

<template>
  <div>
    <UPageHero
      id="inicio"
      :ui="{
        root: 'bg-cover bg-center bg-no-repeat h-dvh before:absolute before:inset-0 dark:before:bg-neutral-900/70 before:bg-neutral-200/60 before:z-0',
        container: 'relative z-10 pt-0 lg:pt-0'
      }"
      :style="{ backgroundImage: `url(/home-imgs/4.png)` }"
    >
      <template #body>
        <div>
          <!-- MOBILE: accordion        -->
          <div class="flex flex-col gap-3 lg:hidden">
            <UCollapsible
              v-for="cat in categories"
              :key="cat.id"
              :open="activeId === cat.id"
              @update:open="() => handleCategoryClick(cat)"
            >
              <!-- Trigger: o card -->
              <UPageCard
                variant="subtle"
                class="group cursor-pointer bg-white transition-all hover:scale-105 active:scale-95 dark:bg-neutral-900/95"
                :ui="{
                  root: [
                    'border-b-4 shadow-xl backdrop-blur-md',
                    activeId === cat.id
                      ? `ring-4 ring-${cat.color}-500 border-${cat.color}-500`
                      : `border-${cat.color}-500`
                  ],
                  body: 'p-0'
                }"
              >
                <div class="flex items-center gap-4 p-3">
                  <div
                    class="flex h-13 w-13 items-center justify-center rounded-full shadow-md"
                    :class="`bg-${cat.color} text-white`"
                  >
                    <UIcon
                      :name="cat.icon"
                      class="h-8 w-8"
                    />
                  </div>
                  <span
                    class="text-xl font-black uppercase tracking-tighter"
                    :class="`text-${cat.color}-600 dark:text-${cat.color}-400`"
                  >
                    {{ cat.label }}
                  </span>
                </div>
              </UPageCard>

              <!-- Conteúdo inline (aparece abaixo de cada card) -->
              <template #content>
                <div
                  class="mt-2 space-y-2 rounded-xl border p-4 backdrop-blur-sm shadow-inner"
                  :class="`border-${cat.color} bg-${cat.color}`"
                >
                  <div
                    v-if="cat.options && cat.options.length > 0"
                    class="grid grid-cols-1 gap-2"
                  >
                    <UButton
                      v-for="opt in cat.options"
                      :key="opt.label"
                      :to="opt.to"
                      variant="soft"
                      color="neutral"
                      size="lg"
                      class="justify-start gap-3 py-4 transition-transform active:scale-95"
                      :icon="opt.icon"
                    >
                      <span class="font-bold">
                        {{ opt.label }}
                      </span>
                    </UButton>
                  </div>
                </div>
              </template>
            </UCollapsible>
          </div>

          <!-- DESKTOP: tabs-like       -->
          <div class="hidden lg:flex lg:flex-col lg:gap-4">
            <!-- Os 4 cards em linha -->
            <div class="grid grid-cols-4 gap-4">
              <UPageCard
                v-for="cat in categories"
                :key="cat.id"
                variant="subtle"
                class="group cursor-pointer bg-white transition-all hover:scale-105 active:scale-95 dark:bg-neutral-900/95"
                :ui="{
                  root: [
                    'border-b-4 shadow-xl backdrop-blur-md',
                    activeId === cat.id
                      ? `ring-4 ring-${cat.color}-500 border-${cat.color}-500`
                      : `border-${cat.color}-500`
                  ],
                  body: 'p-0'
                }"
                @click="handleCategoryClick(cat)"
              >
                <div class="flex flex-col items-center gap-4 p-10 text-center">
                  <div
                    class="flex h-20 w-20 items-center justify-center rounded-full shadow-md"
                    :class="`bg-${cat.color}-500 text-white`"
                  >
                    <UIcon
                      :name="cat.icon"
                      class="h-12 w-12"
                    />
                  </div>
                  <span
                    class="text-2xl font-black uppercase tracking-tighter"
                    :class="`text-${cat.color}-600 dark:text-${cat.color}-400`"
                  >
                    {{ cat.label }}
                  </span>
                </div>
              </UPageCard>
            </div>

            <!-- Painel compartilhado abaixo dos 4 cards -->
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
              mode="out-in"
            >
              <div
                v-if="activeCategory"
                :key="activeCategory.id"
                class="rounded-xl border p-8 shadow-2xl backdrop-blur-md"
                :class="`border-${activeCategory.color} bg-${activeCategory.color}`"
              >
                <div
                  v-if="activeCategory.options && activeCategory.options.length > 0"
                  class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
                >
                  <UButton
                    v-for="opt in activeCategory.options"
                    :key="opt.label"
                    :to="opt.to"
                    variant="soft"
                    color="neutral"
                    size="xl"
                    class="flex h-24 items-center justify-start gap-6 px-8 text-left shadow-md transition-all hover:scale-105"
                    :icon="opt.icon"
                  >
                    <span class="text-xl font-bold">{{ opt.label }}</span>
                  </UButton>
                </div>
              </div>
            </Transition>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
              mode="out-in"
            >
              <div
                v-if="!activeCategory"
                class=" p-8 "
              >
                <UPageHero
                  title="Portal da Transparência"
                  description="Bem vindo ao Portal da Transparência do estado do Maranhão. Explore as informações disponíveis e exerça o seu direito à transparência!"
                  :ui="{
                    container: 'relative z-10 py-0 lg:py-0',
                    title: 'text-black dark:text-white',
                    description: 'text-black font-bold text-xl dark:text-white'
                  }"
                />
              </div>
            </Transition>
          </div>
        </div>
      </template>
    </UPageHero>
    <div
      class="flex flex-col justify-center items-center p-5"
    >
      <section
        id="pesquisar"
        :class="['w-full px-4 py-10 ', activeCategory ? 'pt-45 sm:pt-80 lg:pt-10' : '']"
      >
        <UPageCard

          variant="subtle"
          class="w-full bg-secondary-200 dark:bg-secondary-900/60"
        >
          <div class="mx-auto flex w-full md:w-2xl flex-col items-center space-y-10">
            <h2 class="text-center text-4xl font-black text-secondary-950 dark:text-white lg:text-left">
              Pesquise o que procura
            </h2>
            <div class="relative w-full">
              <UInputMenu
                v-model="searchQuery"
                :items="suggestions"
                placeholder="Digite o termo que deseja encontrar..."
                size="xl"
                icon="i-lucide-search"
                class="w-full"
                color="secondary"
              />
            </div>
          </div>
        </UPageCard>
      </section>

      <section
        id="ajuda"
        class="mx-auto w-full p-4 py-10"
      >
        <UPageCard
          variant="subtle"
          class="w-full bg-primary-200 dark:bg-primary-900/60"
        >
          <h2 class="text-center text-4xl font-black text-primary-950 dark:text-white lg:text-left">
            Precisa de ajuda?
          </h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <UButton
              v-for="item in helpItems"
              :key="item.label"
              :to="item.to"
              size="xl"
              color="neutral"
              variant="subtle"
              :class="`flex items-center justify-start gap-2 p-4 transition-all hover:scale-105 active:scale-95 shadow-lg bg-white dark:bg-neutral-800 text-${item.color}-600 border-l-5 border-${item.color}-600`"
            >
              <UIcon
                :name="item.icon"
                class="h-10 w-10 shrink-0"
              />
              <span class="text-2xl font-black">{{ item.label }}</span>
            </UButton>
          </div>
        </UPageCard>
      </section>

      <section
        id="presencaDoEstado"
        class="w-full mx-auto py-10 px-4"
      >
        <h2 class="mb-2 text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Presença do Estado
        </h2>
        <UPageCard
          variant="subtle"
          class="overflow-hidden"
          :ui="{ body: 'p-0 flex items-center justify-center h-80 md:h-128' }"
        >
          <img
            src="/mapa.png"
            alt="mapa"
            class="h-full w-full object-contain"
          >
        </UPageCard>
      </section>

      <section
        id="outrosSitesInstitucionais"
        class="w-full mx-auto px-4 py-10 overflow-hidden"
      >
        <h2 class="mb-2 text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Outros sites institucionais
        </h2>
        <div class="rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-800">
          <UMarquee
            pause-on-hover
            class="py-4 p-8"
          >
            <div class="flex items-center gap-12">
              <NuxtLink
                v-for="site in institutionalSites"
                :key="site.name"
                :to="site.to"
                target="_blank"
                class="flex grayscale transition-all hover:grayscale-0"
              >
                <img
                  :src="site.logo"
                  :alt="site.name"
                  class="h-12 w-auto object-contain"
                >
              </NuxtLink>
              <!-- Repeat to ensure smooth marquee -->
              <NuxtLink
                v-for="site in institutionalSites"
                :key="site.name + '-copy'"
                :to="site.to"
                target="_blank"
                class="flex grayscale transition-all hover:grayscale-0"
              >
                <img
                  :src="site.logo"
                  :alt="site.name"
                  class="h-12 w-auto object-contain"
                >
              </NuxtLink>
            </div>
          </UMarquee>
        </div>
      </section>
    </div>
  </div>
</template>
