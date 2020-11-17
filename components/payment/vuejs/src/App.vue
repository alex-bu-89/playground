<template>
  <Header />
  <Payment />
</template>

<script>
  import Payment from './components/Payment/Payment.vue'
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Payment,
      Header
    }
  }
</script>

<style lang="scss">
  * { box-sizing: border-box; }
  #app {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: $color-dark;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: 0 auto;
    text-align: center;
    width: 80%;
  }
</style>
