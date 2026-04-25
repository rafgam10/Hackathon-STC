<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'pt-br'
  }
})

const appConfig = useAppConfig()

const title = 'Portal da Transparência'
const description = 'Portal da Transparência'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: ''
})

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Início',
    to: '/'
  },
  {
    label: 'Sobre',
    to: '/#sobre'
  },
  {
    label: 'Serviços',
    to: '/#servicos'
  },
  {
    label: 'Outros Orgãos',
    to: '/#outros'
  },
  {
    label: 'Área do Fiscal',
    to: '/AreaDoFiscal'
  }
])
</script>

<template>
  <UApp>
    <UHeader
      mode="slideover"
      :ui="{ root: 'py-10', header: 'py-10' }"
    >
      <template #left>
        <NuxtLink to="/">
          <img
            src="/logo-dark.png"
            alt="Logo"
            class="h-20 hidden dark:block"
          >
          <img
            src="/logo.png"
            alt="Logo"
            class="h-20 block dark:hidden"
          >
        </NuxtLink>

        <TemplateMenu />
      </template>
      <template #right>
        <div class="flex w-full justify-end gap-15">
          <UNavigationMenu
            :items="items"
            variant="link"
            color="neutral"
            class="hidden lg:block"
          />
          <UTooltip text="Alterar Tema">
            <UColorModeButton />
          </UTooltip>
        </div>
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator
      :avatar="{
        src: '/logoicon.png',
        loading: 'lazy'
      }"
    />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Av. Professor Carlos Cunha s/n, Edifício Nagib Haickel
          <br>
          Bairro: Calhau, São Luís - Maranhão.
          <br>
          E-mail: transparencia@stc.ma.gov.br
        </p>
      </template>

      <template #default>
        <div class="flex flex-col gap-2">
          <img
            class="h-15 w-auto"
            src="/governo.png"
            alt="Logo Governo do Estado do Maranhão"
          >
          <p class="text-sm text-muted">
            Portal da Transparência • © {{ new Date().getFullYear() }}
          </p>
        </div>
      </template>

      <template #right>
        <ULink
          v-for="social in appConfig.socials"
          :key="social.label"
          :to="social.to"
          :target="social.target"
        >
          <UIcon
            :name="social.icon"
            class="size-6 m-2 shrink-0"
          />
        </ULink>
      </template>
    </UFooter>
  </UApp>
</template>
