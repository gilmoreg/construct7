<template>
  <div id="app">
    <QuizContainer />
  </div>
</template>

<script>
import QuizContainer from './components/QuizContainer.vue'

export default {
  name: 'app',
  components: {
    QuizContainer
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
