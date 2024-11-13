<template>
    <h1>life loop function </h1>
    <p>{{ message }}</p>
    <button @click="message = '122'">button1</button>
</template>

<script>
   export default {
    data(){
        return{
            message:''
        }
    },
    beforeCreate(){
        console.log('beforeCreate:before create down');
        
    },
    created(){
        console.log('created:created down');
        
    },
    beforeMount(){
        console.log('beforeMount:beforeMount down');
        
    },
    mounted(){
        console.log('mounted:mounted down');
        //数据放在这个位置来让数据出现时间变得合理，没有看起来那么突兀
    },
    beforeUpdate(){
        console.log('beforeUpdate:beforeUpdate down');
        
    },
    updated(){
        console.log('updated:updated down');
        
    },
    beforeUnmount(){
        console.log('beforeUnmount:beforeUnmount down');
        
    },
    unmounted(){
        console.log('unmounted:unmounted down');
        
    }
    


}
</script>

<style>
</style>