<template>
    <div>
      <slider :slider="sliderMsg"></slider>
      <div class="recommened-tit">
        歌曲推荐
      </div>
      <songs-list :songs="songsList"></songs-list>
    </div>
</template>

<script>
import Slider from '../../base/slider/slider.vue'
import songsList from "../../base/songs/songs.vue"
import {getRecommend,getDisList} from '../../api/recommend.js'
import {ERR_OK} from '../../api/config.js'
export default {
created() {
  this._getRecommend()
},
components: {
  Slider,
  songsList,
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
        this.songsList[0].url='//y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2646688496'
        this.songsList[1].url='//y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=1144416825'
        this.songsList[2].url='//y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2043041547'
        this.songsList[3].url='//y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2040362185'
        this.songsList[0].url='//y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=1723063372'
        this.songsList[0].url='//y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=3482605622'
      }
    })
  },
}
}
</script>

<style scoped lang="less">
  .recommened-tit{
    text-align: center;
    color: #CDA32E;
    font-size: 16px;
    line-height: 30px;
    margin: 10px auto 5px;
  }
</style>
