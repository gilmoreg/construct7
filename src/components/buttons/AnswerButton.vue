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
    select: Function,
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
      this.select(this.num);
    }
  },
  computed: {
    classes: function() { return `button answer-button${this.selected ? ' isselected' : '' }`; }
  }
}
</script>
