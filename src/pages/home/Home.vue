<template>
  <div>
    <side-bar
    v-bind:style="style1"></side-bar>
    <navi-bar
    v-bind:style="style2"
    ></navi-bar>
    <main-content></main-content>
  </div>
</template>

<script>
import axios from 'axios'
import sideBar from './components/left/main.vue'
import naviBar from './components/navigator/main.vue'
import mainContent from './components/mainContent/main.vue'

export default {
  name:'Home',
  components:{
    sideBar,
    naviBar,
    mainContent
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      console.log(res)
    }
  },
  data:function(){
    infoHeight:''
    return {
      style1:{
        backgroundColor:'red',
        width:window.innerWidth*0.3+'px',
        height:window.innerHeight+'px'
      },
      style2:{
        backgroundColor:'blue',
        width:window.innerWidth*0.7+'px',
        float:'left',
        height:window.innerHeight*0.3+'px'
      }    
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>

<style>
</style>