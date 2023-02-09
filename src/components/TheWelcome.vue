<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import ToolingIcon from './icons/IconTooling.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import SupportIcon from './icons/IconSupport.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Uniform style</template>

    Code Style: &nbsp;
    <a href="https://github.com/eslint/eslint" target="_blank">ESLint</a>
    |
    <a href="https://github.com/airbnb/javascript" target="_blank">Airbnb Style</a>
    |
    <a href="https://github.com/prettier/prettier" target="_blank">Prettier</a>
    <a href="https://stylelint.io/" target="_blank">Stylelint</a>
    <br />
    Conmit Style: &nbsp;
    <a href="https://github.com/typicode/husky" target="_blank">Husky</a>
    |
    <a href="https://github.com/okonet/lint-staged" target="_blank">lint-staged</a>
    |
    <a href="http://commitizen.github.io/cz-cli/" target="_blank">Commitizen</a>
    |
    <a href="https://commitlint.js.org/#/" target="_blank">Commitlint</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>
    . The recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>
    . If you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
    and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>
    .

    <br />

    More instructions are available in
    <code>README.md</code>
    .
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>
    ,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>
    ,
    <a href="https://axios-http.com/" target="_blank">Axios</a>
    ,
    <a href="https://github.com/vueuse/vueuse" target="_blank">VueUse</a>
    ,
    <a href="https://element-plus.gitee.io/zh-CN/" target="_blank" rel="noopener">ElementPlus</a>
    , and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>
    . If you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>
    , our official Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>
    . You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a>
    and follow the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Me</template>

    If you approve of this project, please give me stars
  </WelcomeItem>
</template>
