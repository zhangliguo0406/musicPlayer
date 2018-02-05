<template>
    <div>
      <slider :slider="sliderMsg"></slider>
      <div class="recommened-tit">
        歌曲推荐
      </div>
      <div class="content">
          <songs-list :songs="songsList"></songs-list>
          <div class="loading-content" v-show="!songsList.length">
            <loading></loading>
          </div>
       </div>
     </div>
</template>

<script>
import Slider from 'base/slider/slider.vue'
import SongsList from "base/songs/songs.vue"
import {getRecommend,getDisList} from 'api/recommend.js'
import {ERR_OK} from 'api/config.js'
import Loading from 'base/loading/loading.vue'
export default {
created() {
  this._getRecommend()
},
components: {
  Slider,
  SongsList,
  Loading
},
data (){
  return {
    sliderMsg:[],
    songsList:[]
  }
},
methods: {
  _getRecommend(){
    getRecommend().then((res)=>{
      if(res.code === ERR_OK){
        this.sliderMsg=res.data.slider
        this.songsList=res.data.songList

      }
    })
  },
}
}
</script>

<style scoped lang="less">
  .content{
    position: relative;
    .loading-content{
      position:absolute;
      top:50%;
      width: 100%;
      transform: translateY(-50%);
    }
  }
  .recommened-tit{
    text-align: center;
    color: #CDA32E;
    font-size: 16px;
    line-height: 30px;
    margin: 10px auto 5px;
  }

</style>
