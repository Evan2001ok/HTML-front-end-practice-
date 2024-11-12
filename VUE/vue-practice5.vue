<template>
    <h1>vue practice5</h1>
    <button @click="clickhandle">button1</button>
</template>
  
<script>
    //this is transfer from son to parents
    export default {
        name: 'mycomponents',
        data(){
            return{
                message: 'this is some message'
            }
        },
        methods:{
            clickhandle(){
                // element1 string 
                this.$emit('onevent',this.message);
            }
        }
    }
</script>

<style>

</style>

