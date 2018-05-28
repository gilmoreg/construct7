<template>
  <section class="one-dot">
    <Dot />
  </section>
</template>

<script>
import Dot from './Dot';

export default {
  name: 'OneDot',
  components: {
    Dot
  }
}
</script>

<style scoped>
  .one-dot {
    min-width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 100%;
  }
</style>



