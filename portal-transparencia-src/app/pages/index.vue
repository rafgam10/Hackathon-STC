<template>
  <div>
    <UPageHero
      title="Portal da Transparência"
      description="Portal da Transparência"
      :links="[{
        label: 'Saber mais',
        to: '',
        target: '',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: 'Transparência',
        to: '',
        target: '',
        icon: 'i-lucide-lightbulb',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />

    <UPageSection
      id="sobre-o-portal"
      title="Sobre o Portal"
      description="Portal da Transparência"
      :features="[{
        icon: 'i-lucide-rocket',
        title: 'Portal da Transparência',
        description: 'Portal da Transparência'
      }, {
        icon: 'i-lucide-palette',
        title: 'Beautiful by default',
        description: 'Portal da Transparência'
      }]"
    />
  </div>
</template>
