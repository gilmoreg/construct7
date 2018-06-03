<template>
  <button :class=classes @click="toggle">
    <Correct v-if="this.answer === 'correct'" />
    <Incorrect v-if="this.answer === 'incorrect'" />
    <OneDot v-if="this.num === 1" />
    <TwoDots v-if="this.num === 2" />
    <ThreeDots v-if="this.num === 3" />
    <FourDots v-if="this.num === 4" />
  </button>
</template>

<script>
import OneDot from './OneDot';
import TwoDots from './TwoDots';
import ThreeDots from './ThreeDots';
import FourDots from './FourDots';
import Correct from './Correct';
import Incorrect from './Incorrect';

export default {
  name: 'AnswerButton',
  props: {
    num: Number,
    answer: String,
    calculateHp: Function,
    selected: Boolean
  },
  data () {
    return { isSelected: this.selected }
  },
  components: {
    OneDot,
    TwoDots,
    ThreeDots,
    FourDots,
    Correct,
    Incorrect
  },
  methods: {
    toggle: function () {
      this.isSelected = !this.isSelected;
      this.calculateHp(this.isSelected ? this.num : 0);
    }
  },
  computed: {
    classes: function() { return `button answer-button ${this.selected ? 'selected' : '' }`; }
  }
}
</script>

<style>
.selected {
  border: 5px solid blue;
}
</style>

