<template>
  <button class="button answer-button">
    <OneDot v-if="oneDot" />
    <TwoDots v-if="twoDot" />
    <ThreeDots v-if="threeDot" />
    <FourDots v-if="fourDot" />
  </button>
</template>

<script>
import OneDot from './OneDot';
import TwoDots from './TwoDots';
import ThreeDots from './ThreeDots';
import FourDots from './FourDots';

export default {
  name: 'AnswerButton',
  props: {
    num: Number
  },
  components: {
    OneDot,
    TwoDots,
    ThreeDots,
    FourDots
  },
  computed: {
    oneDot: function() { return this.num === 1 },
    twoDot: function() { return this.num === 2 },
    threeDot: function() { return this.num === 3 },
    fourDot: function() { return this.num === 4 }
  }
}
</script>


<style scoped>
  .answer-button {
    width: 150px;
    height: 150px;
    display: block;
    border-radius: 50%;
  }
</style>

