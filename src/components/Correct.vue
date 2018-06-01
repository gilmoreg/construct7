<template>
  <div class="fa-8x answer-indicator answer-correct">
    <font-awesome-icon :icon="['fas', 'check']" />
  </div>
</template>

<script>
export default {
  name: 'Correct'
}
</script>

<style>
.answer-correct {
  color: green;
}
</style>
