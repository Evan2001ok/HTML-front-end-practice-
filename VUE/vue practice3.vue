<template>
  <div class="hello">
    <h1>vue practice3</h1>
    
    <input type="text" v-model.trim="typed">
    <p>{{typed}}</p>
    <!-- button connect a function can get username by what you typed -->
    <button @click="getusername"> button1 </button>
  </div>
</template>

<script>

export default {
  data(){
    return{
      typed:''
      }
    },
    methods:{
      getusername(){
        console.log(this.typed);
        
      }
    }
    
  }

</script>
