<script lang="ts" setup>
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})
AppSetup()
const theme = useState<ITheme>('theme.current')
</script>

<template>
  <div>
    <Html
      :class="`font-main text-white ${theme === 'dark' ? 'dark' : ''}`"
      :lang="head.htmlAttrs.lang"
      :dir="head.htmlAttrs.dir"
    >
      <Head>
        <Link
          v-for="link in head.link"
          :id="link.id"
          :key="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
        <Meta
          v-for="meta in head.meta"
          :id="meta.id"
          :key="meta.id"
          :property="meta.property"
          :content="meta.content"
        />
      </Head>
      <Body class="antialiased bg-white dark:bg-dark-600">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </Body>
    </Html>
  </div>
</template>
