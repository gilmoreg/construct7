<template>
  <div class="fa-8x answer-indicator answer-incorrect">
    <font-awesome-icon :icon="['fas', 'times']" />
  </div>
</template>

<script>
export default {
  name: 'Incorrect'
}
</script>

<style>
.answer-incorrect {
  color: red;
}
</style>
