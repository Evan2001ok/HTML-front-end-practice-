<template>
  <div class="hello">
    <h1>This is a vue practice</h1>
    <!-- how use {{}} -->
    <p>Message: {{ values }}</p>
    <!-- how use v-html  -->
    <div v-html= "html1"></div>
    <div v-bind:id="id"></div>
    <div>{{ number + 10 }}</div>

    <!-- flag function, if true good job, otherwise bad work -->
    <div>{{flag ? 'good job' : 'bad work'}}</div>
    <!-- v-if function,when flag is ture output, otherwise dont output -->
    <div v-if="flag">I am a good men</div>
    <div v-else>I am a bad guy</div>
      <!-- v-show function, simular like v-if -->
      <P v-show="flag">you are a men?</P>
  </div>
</template>

<script>
export default {
  name: "HelloComponent",
  data() {
    return {
      values: "Resume letter",
      html1: "<a href='https://github.com/Evan2001ok'> button </a>",
      id : 10086,
      number :20,
      flag : false
      
    };
  }

};
</script>

