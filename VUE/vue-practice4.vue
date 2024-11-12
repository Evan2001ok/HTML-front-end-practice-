<!-- simular like html -->
<template>
<h1>This is a prop</h1>
<p>{{ title }}</p>
<p>{{ logo }}</p>

<!-- array output -->
<ul>
    <li v-for="(items,index) in names" :key="index">
        {{items}}
    </li>
</ul>
</template>

<!-- simular like javascript -->
 <!-- prop transfer data -->
<script>
    export default{
        //this is how use prop received data(parents to son)
        props:{
            title:{
                type:String,
                default:""
            },
            logo:{
                type:Number,
                default:"",
            },
            names:{
                type:Array,
                //array must use a function() to output
                default:function(){
                    return[]
                }
            }
        }
    }
</script>

<!-- simular like CSS -->
<style>

</style>