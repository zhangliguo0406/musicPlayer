<template>
    <scroll class="listview" ref="listview">
      <ul class="listview-ul">
        <li v-for="(group,index) in data" class="listGroup" ref="listGroup">
          <h2 class="list-group-title">{{group.title}}</h2>
          <ul>
            <li v-for="(item , index) in group.items" class="list-group-item">
              <span class="avatar">
                 <img v-lazy="item.avatar" alt="">
              </span>
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="list-shortcut" @touchstart="onShortcutTouchStart">
        <ul>
          <li class="item" v-for="(item , index) in shortcutlist" :data-index="index" >
            {{item}}
          </li>
        </ul>
      </div>
    </scroll>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import {getData} from 'common/js/dom.js'
  export default {
    props:{
      data:{
        type:Array,
        default:[]
      }
    },
    components: {
      Scroll
    },
    computed:{

      shortcutlist(){
        return this.data.map(group=>group.title.substr(0,1))
      }
    },
    methods: {
      onShortcutTouchStart(e){
        let touchIndex=getData(e.target,'index')
        let H=document.documentElement.clientHeight||document.body.clientHeight
        let h=this.$refs.listGroup[touchIndex].offsetTop
        console.log(H,h)
        console.log(this.$refs.listGroup[touchIndex])
        this.$refs.listview.scrollTo(0,-(h-H),0)
      }
    }
  }

</script>

<style lang="less" scoped>
  .listview{
     height: 530px;
      position: relative;
     .list-group-title{
       color: #979797;
      text-indent: 6px;
       font-size: 16px;
       margin-bottom: 10px;
       background:dimgrey;
     }
   .avatar{
     img{
       width: 50px;
       height: 50px;
       border-radius: 50%;
       margin:5px 15px;
     }
    }
  }
  .listview-ul{
    height: 530px;
  }
  .list-shortcut{
    position: absolute;
    top: 50px;
    left:93%;
    color: #979797;
    .item{
      display: block;
      text-align: center;
    }
  }
</style>
