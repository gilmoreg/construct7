<template>
  <div class="four-dots">
    <Dot />
    <Dot />
    <Dot />
    <Dot />
  </div>
</template>

<script>
import Dot from './Dot';

export default {
  name: 'FourDots',
  components: {
    Dot
  }
}
</script>

<style>
 .four-dots {
   min-width: 100%;
   min-height: 100%;
   display: grid;
   grid-template-columns: 50% 50%;
   grid-template-rows: 50% 50%;
 }
</style>


