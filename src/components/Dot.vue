<template>
  <div class="dot-container">
    <div class="dot" />
  </div>
</template>

<script>
export default {
  name: 'Dot'
}
</script>

<style>
  .dot-container {
    justify-self: center;
    align-self: center;
  }

  .dot {
    background: #000;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin: auto auto;
  }
</style>


