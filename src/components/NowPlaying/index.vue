<template>
  <div class="movie_body">
    <ul>
      <li v-for="item in movieList" :key="item.id">
        <div class="pic_show"><img :src="item.img | setWH"></div>
        <div class="info_list">
          <h2>
            {{item.nm}}
            <span v-if="item.version" class="version v2d imax"></span>
          </h2>
          <p v-if="item.showst === 3">观众评分 <span class="grade">{{item.sc}}</span></p>
          <p v-if="item.showst === 4"><span class="grade">{{item.wish}}</span>人想看</p>
          <p>{{item.star}}</p>
          <p>{{item.showInfo}}</p>
        </div>
        <div v-if="item.showst === 3" class="btn_mall">
          购票
        </div>
        <div v-if="item.showst === 4" class="btn_pre">
          预售
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NowPlaying',
  data () {
    return {
      movieList: []
    }
  },
  mounted () {
    axios.get('/ajax/movieOnInfoList')
      .then(res => {
        // console.log(res.data.movieList)
        this.movieList = res.data.movieList
      }).catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.version {   background-size: contain;background-repeat: no-repeat;height: 14px;width: 43px;display: inline-block;margin-top: 5px;-webkit-box-flex: 0;flex: 0 0 auto;margin-right: 3px;background-image:url('../../assets/maxs.png')}
.movie_body .info_list h2 img {display: inline-block;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
</style>
