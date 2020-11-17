<template>
  <header>
    <ul class="nav">
      <li class="nav__logo">Onlypay</li>
      <li class="nav__item">Costomer info</li>
      <li class="nav__item">Shiping info</li>
      <li class="nav__item">Payment selection</li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .nav {
    padding: 20px 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      list-style-type: none;
      flex: 0 1 auto;
      padding: 0 10px;
      font-size: 1rem;
    }

    @include element('item')  {
      
    }

    @include element('logo')  {
      flex: 0 1 auto;
      margin-right: auto;
      font-weight: bold;
      color: $color-primary;
    }
  }
</style>
