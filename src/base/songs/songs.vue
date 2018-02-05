<template>
    <div class="song-list">
      <ul>
         <li v-for="(item , k) in songs">
           <a :href="'//y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id='+item.id">
           <img v-lazy="item.picUrl" alt="">
           <span>{{item.songListDesc}}</span>
           </a>
         </li>
      </ul>
    </div>
</template>

<script>
  export default {
    props: ['songs'],
    data() {
      return {

      }
    },
    components: {},
    methods: {}
  }
</script>

<style lang="less" scoped>
  .song-list{
    position: relative;
  }
  ul{
    overflow:scroll;
    width: 100%;
    height: 350px;
    text-align: center;
    li{
      display: inline-block;
      vertical-align: top;
      width: 170px;
      height: 170px;
      margin: 0 5px 50px;
      a{
        span{
          color: honeydew;
        }
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
