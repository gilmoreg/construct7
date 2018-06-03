<template>
  <section class="quizcontainer">
    <h2>Construct 7 says:</h2>
    <h3>CALIBRATE VITALS TO {{ this.quizEngine.getMessage() }}</h3>
    <p>INACCURACY WILL BE PUNISHED</p>
    <section class="buttons-container">
      <AnswerButton :num=1 :calculateHp=calculateHp :selected=isSelected(1) answer="correct" />
      <AnswerButton :num=2 :calculateHp=calculateHp :selected=isSelected(2) answer="incorrect" />
      <AnswerButton :num=3 :calculateHp=calculateHp :selected=isSelected(3) />
      <AnswerButton :num=4 :calculateHp=calculateHp :selected=isSelected(4) />
    </section>
    <h4>Your Hp: {{ this.currentHp }}</h4>
  </section>
</template>

<script>
import QuizEngine from '../QuizEngine';
import AnswerButton from './buttons/AnswerButton';

export default {
  name: 'QuizContainer',
  components: {
    AnswerButton
  },
  data () { 
    return {
      quizEngine: new QuizEngine(),
      selected: 0
    }
  },
  methods: {
    // Pass 0 to reset
    calculateHp: function (value) {
      this.selected = value;
      this.quizEngine.setCurrentHp(value);
    },
    isSelected: function (num) {
      return num === this.selected;
    }
  },
  computed: {
    currentHp: function() { return this.quizEngine ? this.quizEngine.currentHp : 0; }
  }
}
</script>

<style>
  .buttons-container {
    max-width: 860px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }

  @media screen and (min-width: 768px) {
    .buttons-container {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>
