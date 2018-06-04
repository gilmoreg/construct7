<template>
  <section class="castbar">
    <small>{{ this.text }}</small>
    <progress class="progress is-small" :value=currentValue max="100">{{ this.text }}</progress>
  </section>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    value: Number,
    text: String
  },
  computed: {
    currentValue: function () { return ((10000 - this.value) / 10000) * 100; }
  }
}
</script>

<style>
.castbar {
  max-width: 200px;
  text-align: left;
  margin-bottom: 0.5em;
}
</style>
