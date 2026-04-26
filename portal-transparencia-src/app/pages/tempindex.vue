<script setup lang="ts">
const items = [
  '/home-imgs/1.jpg',
  '/home-imgs/2.png',
  '/home-imgs/3.png',
  '/home-imgs/4.png',
  '/home-imgs/5.png'
]


type UICol = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'neutral'

interface Category {
  id: string
  label: string
  icon: string
  color: UICol
  options: { label: string, icon: string, to: string }[]
}





const currentCategory = computed(() => {
  return categories.find(c => c.id === activeCategory.value)
})

const currentOptions = computed(() => {
  return currentCategory.value?.options || []
})






</script>

<template>
  <div class="flex flex-col gap-12 pb-20">
    <!-- Hero Section -->
    <section class="relative h-[500px] w-full">
      <UCarousel
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="absolute inset-0 z-0 h-full w-full"
        autoplay
      >
        <img
          :src="item"
          draggable="false"
          class="h-full w-full object-cover"
        >
      </UCarousel>

      <!-- Overlay Content (Categorias) -->
      <div class="container relative z-10 mx-auto h-full px-4">
        <div class="flex h-full items-start justify-center pt-24 lg:pt-32">
          <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <template
              v-for="cat in categories"
              :key="cat.id"
            >
              <UPageCard
                variant="subtle"
                class="group cursor-pointer bg-white/95 transition-all hover:scale-105 active:scale-95 dark:bg-neutral-900/95"
                :ui="{
                  root: [
                    'border-b-4 shadow-xl backdrop-blur-md',
                    activeCategory === cat.id ? `ring-4 ring-${cat.color}-500 border-${cat.color}-500` : `border-${cat.color}-500/50`
                  ],
                  body: 'p-0'
                }"
                @click="toggleCategory(cat.id)"
              >
                <div class="flex items-center gap-4 p-5 lg:flex-col lg:p-10 lg:text-center">
                  <div
                    class="flex h-14 w-14 items-center justify-center rounded-full shadow-md lg:h-20 lg:w-20"
                    :class="[`bg-${cat.color}-500 text-white`]"
                  >
                    <UIcon
                      :name="cat.icon"
                      class="h-8 w-8 lg:h-12 lg:w-12"
                    />
                  </div>
                  <span
                    class="text-xl font-black uppercase tracking-tighter lg:text-2xl"
                    :class="[`text-${cat.color}-600 dark:text-${cat.color}-400`]"
                  >
                    {{ cat.label }}
                  </span>
                </div>
              </UPageCard>

              <!-- Acordeon Mobile -->
              <div
                v-if="activeCategory === cat.id"
                class="col-span-1 block lg:hidden"
              >
                <div class="rounded-xl border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                  <div class="grid grid-cols-1 gap-3">
                    <UButton
                      v-for="opt in cat.options"
                      :key="opt.label"
                      :to="opt.to"
                      variant="subtle"
                      :color="cat.color"
                      class="justify-start gap-4 py-4"
                    >
                      <UIcon
                        :name="opt.icon"
                        class="h-6 w-6"
                      />
                      <span class="text-lg font-bold">{{ opt.label }}</span>
                    </UButton>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Desktop Expansion Section (Abaixo da Imagem) -->
    <section class="hidden lg:block">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div
          v-if="activeCategory"
          class="bg-white py-16 dark:bg-neutral-900"
        >
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <UButton
                v-for="opt in currentOptions"
                :key="opt.label"
                :to="opt.to"
                size="xl"
                variant="subtle"
                :color="currentCategory?.color"
                class="flex h-24 items-center justify-start gap-6 px-8 text-left shadow-md transition-all hover:scale-105"
              >
                <UIcon
                  :name="opt.icon"
                  class="h-10 w-10 shrink-0"
                />
                <span class="text-xl font-bold">{{ opt.label }}</span>
              </UButton>
            </div>
          </div>
        </div>
      </Transition>
    </section>

    <!-- Search Section -->
    <section class="container mx-auto px-4">
      <UPageCard
        variant="solid"
        color="secondary"
        class="shadow-xl"
        :ui="{ body: 'p-12 lg:p-20' }"
      >
        <div class="mx-auto max-w-4xl space-y-10">
          <h2 class="text-center text-4xl font-black text-neutral-900 lg:text-left">
            Pesquise o que procura
          </h2>
          <div class="relative">
            <UInputMenu
              v-model="searchQuery"
              :items="suggestions"
              placeholder="Digite sua dúvida ou palavra-chave..."
              size="xl"
              icon="i-lucide-search"
              class="w-full"
              :ui="{
                base: 'h-20 text-2xl px-6'
              }"
            />
          </div>
        </div>
      </UPageCard>
    </section>

    <!-- Help Section -->
    <section class="container mx-auto px-4">
      <UPageCard
        variant="solid"
        color="primary"
        class="shadow-xl"
        :ui="{ body: 'p-12 lg:p-20' }"
      >
        <h2 class="mb-10 text-4xl font-black text-white lg:text-left">
          Precisa de ajuda?
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <UButton
            v-for="item in helpItems"
            :key="item.label"
            :to="item.to"
            size="xl"
            variant="solid"
            color="neutral"
            class="flex items-center justify-start gap-6 p-10 transition-all hover:scale-105 active:scale-95 shadow-lg bg-white text-primary-600"
          >
            <UIcon
              :name="item.icon"
              class="h-12 w-12 shrink-0"
            />
            <span class="text-2xl font-black">{{ item.label }}</span>
          </UButton>
        </div>
      </UPageCard>
    </section>

    <!-- State Presence Section -->


    <!-- Institutional Sites Section -->


  </div>
</template>

<style scoped>
/* Fallback utilities for dynamic colors */
.border-primary-500 { border-color: var(--color-primary-500); }
.border-secondary-500 { border-color: var(--color-secondary-500); }
.border-tertiary-500 { border-color: var(--color-tertiary-500); }
.border-quaternary-500 { border-color: var(--color-quaternary-500); }

.bg-primary-500 { background-color: var(--color-primary-500); }
.bg-secondary-500 { background-color: var(--color-secondary-500); }
.bg-tertiary-500 { background-color: var(--color-tertiary-500); }
.bg-quaternary-500 { background-color: var(--color-quaternary-500); }

.text-primary-600 { color: var(--color-primary-600); }
.text-secondary-600 { color: var(--color-secondary-600); }
.text-tertiary-600 { color: var(--color-tertiary-600); }
.text-quaternary-600 { color: var(--color-quaternary-600); }

.ring-primary-500 { --tw-ring-color: var(--color-primary-500); }
.ring-secondary-500 { --tw-ring-color: var(--color-secondary-500); }
.ring-tertiary-500 { --tw-ring-color: var(--color-tertiary-500); }
.ring-quaternary-500 { --tw-ring-color: var(--color-quaternary-500); }
</style>
