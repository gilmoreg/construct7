<template>
  <div class="two-dots">
    <Dot />
    <Dot />
  </div>
</template>

<script>
import Dot from './Dot';

export default {
  name: 'TwoDots',
  components: {
    Dot
  }
}
</script>

<style scoped>
  .two-dots {
    min-width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>


