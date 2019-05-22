<template>
<div>
<div class="guitar">
  </div>
  <div class="joker"></div>
  <p class="text">陌上花开 可缓缓归矣</p>
</div>
  
</template>

<script>
export default {
  name:'Welcome'
}
</script>

<style lang="stylus" scoped>
.guitar
  background url('./images/guitar.png')
  height 400px
  width 100%
  background-position center center
  background-size cover
.joker
  background url('./images/joker.png')
  height 150px
  background-repeat no-repeat
  background-position center center
  background-size contain
  line-hegiht 150px
  text-align center
  margin-top -75px
  border 2px red
  border-radius 3px
.text
  text-align center
  margin-top 30px
</style>