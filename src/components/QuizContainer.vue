<template>
  <section class="quiz-container">
    <h2>Construct 7 says:</h2>
    <img src="../assets/FFT_Automaton_Portrait.png" />
    <h3>CALIBRATE VITALS TO {{ this.message }}</h3>
    <ProgressBar :value=timeRemaining :text=castMessage />
    <section class="buttons-container">
      <AnswerButton :num=1 :select=select :selected=isSelected(1) :answer=answers[0] />
      <AnswerButton :num=2 :select=select :selected=isSelected(2) :answer=answers[1] />
      <AnswerButton :num=3 :select=select :selected=isSelected(3) :answer=answers[2] />
      <AnswerButton :num=4 :select=select :selected=isSelected(4) :answer=answers[3] />
    </section>
    <h4>Your Hp: {{ this.currentHp }}</h4>
    <button class="button" @click=done>{{ this.challengeActive ? 'Done' : 'Again'}}</button>
  </section>
</template>

<script>
import QuizEngine from '../QuizEngine';
import AnswerButton from './buttons/AnswerButton';
import ProgressBar from './ProgressBar';

export default {
  name: 'QuizContainer',
  components: {
    AnswerButton,
    ProgressBar
  },
  data () { 
    return {
      quizEngine: null,
      selected: 0,
      answers: ['','','',''],
      timeRemaining: 0
    }
  },
  methods: {
    select: function(value) {
      if (value === this.selected) {
        this.selected = 0;
      } else {
        this.selected = value;
      }
      this.quizEngine.setCurrentHp(this.selected);
    },
    isSelected: function (num) {
      return num === this.selected;
    },
    displayAnswers: function(values) {
      this.answers = values;
    },
    tick: function(value) { this.timeRemaining = value; },
    reset: function() {
      this.selected = 0;
      this.answers = ['','','',''];
    },
    done: function() {
      if (this.challengeActive) {
        this.timeRemaining = 0;
        this.quizEngine.endChallenge();
      } else {
        this.reset();
        this.quizEngine.startChallenge();
      }
    }
  },
  computed: {
    currentHp: function() { return this.quizEngine ? this.quizEngine.currentHp : 0; },
    message: function() { return this.quizEngine ? this.quizEngine.getMessage() : '' },
    castMessage: function() { return this.quizEngine ? this.quizEngine.getCastMessage() : '' },
    challengeActive: function() { return this.timeRemaining > 0; }
  },
  mounted: function() {
    this.quizEngine = new QuizEngine(this.tick, this.displayAnswers);
    this.quizEngine.startChallenge();
  }
}
</script>

<style>
  .quiz-container {
    max-width: 860px;
    margin: 1em auto;
  }

  .buttons-container {
    max-width: 860px;
    margin: 1em auto;
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
