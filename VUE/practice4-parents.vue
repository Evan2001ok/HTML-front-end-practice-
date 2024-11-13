<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <practice4 :title ="title" :logo = "logo" :names="names"/>
</template>

<script>
import practice4 from './components/vue-practice4.vue'

export default {
  name: 'App',
  components: {
    practice4
  },
  data(){
    return{
      title: 'This is a title',
      logo: 12210,
      names:['evan','alice','broun','bob']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
