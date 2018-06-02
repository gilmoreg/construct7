<template>
  <section class="quizcontainer">
    <h2>Construct 7 says:</h2>
    <h3>CALIBRATE VITALS TO MULTIPLES OF 5</h3>
    <section class="buttons-container">
      <AnswerButton :num=1 :calculateHp=calculateHp answer="correct" />
      <AnswerButton :num=2 :calculateHp=calculateHp answer="incorrect" />
      <AnswerButton :num=3 :calculateHp=calculateHp />
      <AnswerButton :num=4 :calculateHp=calculateHp />
    </section>
    <h4>Your Hp: {{ this.currentHp }}</h4>
  </section>
</template>

<script>
import AnswerButton from './buttons/AnswerButton';

export default {
  name: 'QuizContainer',
  components: {
    AnswerButton
  },
  data () { 
    return {
      startingHp: 0,
      currentHp: 0
    }
  },
  methods: {
    // Pass 0 to reset
    calculateHp: function (value) {
      this.currentHp = this.startingHp + value;
    }
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
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
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
