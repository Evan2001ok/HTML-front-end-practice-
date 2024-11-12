<template>
  <div class="hello">
    <h1>practice2</h1>
    <ul>
      <!-- for loop return array -->
      <!-- <li v-for="item in items">{{ item.message }}</li> -->
    </ul>
    <div>
      <button @click="count += 1"> clik times = {{count}} </button>
      <button @click="clickhandle"> button1 </button>
      <p>{{ Messages }}</p>
    </div>
    <br>
    <button @click="click3">men</button>
    <button @click="click2">women</button>
    <button @click="clickhandle">gay</button>
    <p>{{gender}}</p>

    <p>Say hi</p>
    <button @click="hi('hi')">say hi</button>
  </div>

</template>

<script>
export default {
  data(){
    return{
      // items:[{message: 'evan'},{message: 'alice'},{message: 'bob'}]
      count : 1,
      Messages: 'hi,miss',
      gender: 'gender'
    }
  },
  methods: {
    clickhandle() {
      // console.log('hahahaha')
      //use function to change value or string
      this.Messages = 'hi,men';
    },
    click2(){
      this.gender = 'women'
    },
    click3(){
      this.gender = 'men'
    },
    hi(sayhi){
      console.log(sayhi);
      
    }
  }
  
}
</script>
