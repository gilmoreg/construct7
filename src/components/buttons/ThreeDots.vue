<template>
  <div class="three-dots">
    <div class="three-dots-top">
      <Dot />  
    </div>
    <div class="three-dots-bottom">
      <Dot />
      <Dot />
    </div>
  </div>
</template>

<script>
import Dot from './Dot';

export default {
  name: 'ThreeDots',
  components: {
    Dot
  }
}
</script>

<style>
  .three-dots {
    display: grid;
    grid-template-rows: 50% 50%;
  }

  .three-dots-top {
    min-width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-rows: 100%
  }

  .three-dots-bottom {
    min-width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
  }
</style>
