<template>
  <div 
    class="container">{{hello}}
  </div>
</template>

<script>
export default {
  name:'sideBar',
  data:function(){
    return {
      hello:'left'
    }
  }
}
</script>

<style lang="stylus" scoped>
body
.container
  width 300px
  float left
  background  red
</style>