<template>

  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{message}}</p>
  
  <mycomponent @onevent="getdata"/>
  
</template>

<script>
import mycomponent from './components/mycomponent.vue';

export default {
  name: 'App',
  components: {
    mycomponent
  },
  methods:{
    getdata(data){
      console.log(data);
      this.message = data;
    }
  },
  data(){
    return{
      message:""
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
