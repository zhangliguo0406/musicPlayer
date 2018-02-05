<template>
    <div>
      <listview :data="singers"></listview>
    </div>
</template>

<script>
  import {getSingerList} from 'api/singer.js'
  import {ERR_OK} from 'api/config.js'
  import Singer from 'common/js/singer.js'
  import Listview from 'base/listview/listview'
  const HOT_NAME='热门'
  const HOT_SINGER_LEN=10
export default {
  data () {
    return {
      singers:[]
    }
  },
  created(){
    this._getSingerList()
  },
  components: {
    Listview
  },
  methods: {
    _getSingerList(){
      getSingerList().then(res=>{
        if(res.code===ERR_OK){
          this.singers=this._normallazeSinger(res.data.list);
          console.log(res.data.list)
          console.log(this.singers,22222)
        }
      })
    },
    _normallazeSinger(list){
      let map={
        hot:{
          title:HOT_NAME,
          items:[]
        }
      }
      list.forEach((item,index)=>{
        if(index<HOT_SINGER_LEN){
          map.hot.items.push(new Singer(item.Fsinger_mid, item.Fsinger_name))
        }
        const key=item.Findex
        if(!map[key]){
          map[key]={
            title:key,
            items:[]
          }
        }
        map[key].items.push(new Singer(item.Fsinger_mid, item.Fsinger_name))
      })
      console.log(map)
     //为了得到有序列表我们要处理map，map现在是对象
      let hot=[]
      let ret=[]
      for(let key in map){

         let val=map[key]
        console.log(val.title,99999)
        if(val.title===HOT_NAME){
           hot.push(val)
        } else if(val.title.match(/[a-zA-Z]/)){
          ret.push(val)
        }
      }
      ret.sort((a,b)=>{
        return a.title.charCodeAt(0)-b.title.charCodeAt(0)
      })
      return hot.concat(ret)

    }
  }
}
</script>

<style scoped>
  div{
    color: honeydew;
  }
</style>
