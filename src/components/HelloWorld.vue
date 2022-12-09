<template>
  <div class="hello">
    <h3>study</h3>
    <p>{{msg}}</p>
    <p>{{rawhtml}}</p>
    <p v-html="rawhtml"></p>
    <div v-bind:id="hap">aaa</div>
    <div v-if="flag">aa</div>
    <div v-for="(item,index) in List" :key="item.id">{{(index + 1)}}</div>
    <!-- 事件 -->
    <button @click="(count+=1)">点击:{{count}}</button>
    <button @click="clickhandle">函数</button>
    <button @click="say(this.message)">你好</button>
    <div @click="clickhd(item)" v-for="item in List">{{item}}</div>
    <!-- 事件 -->
    <input type="text" v-model.lazy.trim="username">
    <p>{{username}}</p>
  </div>
  <p>{{chengpin.title}}</p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data(){
    return{
      chengpin:{},
      username:"",
      count:0,
      messagem:"测试",
      rawhtml:"<div>nihao</div>",
      hap:"hhh",
      flag:false,
      List:[
        {
          id:1001,
          title:"今日新闻"
        },
        {
          id:1002,
          title:"今日震惊"
        }
      ]
    }
  },
  setup(){
    console.log("setup");
  },
  methods:{
    clickhandle(event){
      this.message = "不测试";
      console.log(event);
    },
    say(data){
      console.log(data);
    },
    clickhd(item){
      console.log(item)
    }
  },
  mounted(){
    axios({
      method:"get",
      url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
    }).then(res =>{
      console.log(res);
      this.chengpin = res.data.chengpinDetails[0];
    })
    axios({
      method:"post",
      url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
      data:{
        user_id:"iwen@qq.com",
        password:"iwen123",
        verification_code:"crfvw"
      }
    }).then(res=>{
      console.log(res.data);
      console.log("hh");
    })
  },
  props: {
    msg: String
  }
}
</script>

<style>
</style>