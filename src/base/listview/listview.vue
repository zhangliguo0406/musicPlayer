<template>
    <div class="listview">
      <ul class="listview-ul">
        <li v-for="group in data" class="list-group">
          <h2 class="list-group-title">{{group.title}}</h2>
          <ul>
            <li v-for="item in group.items" class="list-grouo-item">
              <span class="avatar">
                 <img v-lazy="item.avatar" alt="">
              </span>
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="list-shortcut">
        <ul>
          <li class="list-shortcut-item" v-for="item in shortcutlist">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    props:{
      data:{
        type:Array,
        default:[]
      }
    },
    components: {},
    computed:{
      shortcutlist(){
        return this.data.map(group=>group.title.substr(0,1))
      }
    },
    methods: {}
  }

</script>

<style lang="less" scoped>
  .listview{
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
    overflow: scroll;
    height: 530px;
  }
  .list-shortcut{
    position: absolute;
    top: 50px;
    left:90%;
    color: #979797;
    .list-shortcut-item{
      display: block;
      margin-top: 2px;
    }
  }
</style>
