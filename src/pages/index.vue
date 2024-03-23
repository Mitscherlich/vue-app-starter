<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/Mitscherlich/vue-app-starter" target="_blank">
        vue-app-starter
      </a>
    </p>
    <p>
      <em text-sm opacity-75>my oppion vue web app starter template</em>
    </p>

    <div py-4 />

    <!-- <TheInput
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      autocomplete="false"
      @keydown.enter="go"
    /> -->
    <!-- <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label> -->

    <div>
      <button m-3 text-sm btn @click="router.push('/about')">
        about
      </button>
    </div>
  </div>
</template>
