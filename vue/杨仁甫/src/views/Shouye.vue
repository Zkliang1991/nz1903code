<template>
  <div>
    <Head title="首页"></Head>
    <ul class="ul1" v-if="titlelist.length>0">
      <a class="aimg" href>
        <img
          src="https://image5.benlailife.com/AppHomePageImage/6417945f-1134-3b6e-a98e-f044400900a4.gif"
          alt
        />
      </a>
      <li class="li1" v-for="(item,i) in titlelist" :key="i">
        <a href>{{item.title}}</a>
      </li>
    </ul>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
      <van-swipe-item  v-for="(lb,i) in lunbolist" :key="i">
        <img
          class="img1"
          :src=lb.img
          alt
        />
      </van-swipe-item>
    </van-swipe>

    <div class="dlm">
      <a href="">
        <img style="width:100%" :src=dlmlist[0].img  alt="">
      </a>
    </div>

    <ul class="xlm">
      <li v-for="(xlm,i) in xlmlist" :key="i">
        <a href="">
          <img :src=xlm.img  alt="">
        </a>
      </li>
    </ul>

    <ul v-if="imglist.length>0" class="xlm">
      <li v-for="(item,i) in imglist" :key="i">
        <a  href>
        <img
          :src= "item.img"
          alt
        />
      </a>
      </li>
    </ul>
    <ul v-if="xlylist.length>0" class="xlm">
      <li v-for="(item,i) in xlylist" :key="i">
        <a  href>
        <img
          :src= "item.img"
          alt
        />
      </a>
      </li>
    </ul>
    <ul v-if="xxllist.length>0" class="xlm">
      <li v-for="(item,i) in xxllist" :key="i">
        <a  href>
        <img
          :src= "item.img"
          alt
        />
      </a>
      </li>
    </ul>
    <van-notice-bar  :text=gdgglist[0]+gdgglist[1]+gdgglist[2]  :scrollable="true" />

    <ul v-if="xdtlist.length>0" class="xlm">
      <li v-for="(item,i) in xdtlist" :key="i">
        <a  href>
        <img
          :src= "item.img"
          alt
        />
      </a>
      </li>
    </ul>

    <ul v-if="xdttlist.length>0" class="xlm">
      <li v-for="(item,i) in xdttlist" :key="i">
        <a  href>
        <img
          :src= "item.img"
          alt
        />
      </a>
      </li>
    </ul>

    <ul class="datu">
      <li v-for="(item,i) in dtlist" :key="i"> 
        <a href="">
          <img :src=item.list[0].img  alt="">
        </a>
      </li>
    </ul>
    <Foot/>
  </div>
  

</template>

<style lang="scss">
.aimg {
  float: left;
}
.aimg img {
  width: 65px;
  height: 40px;
}
.ul1 {
  height: 40px;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  flex-wrap: nowrap;
}
.li1 {
  color: #aca9a7;
  font-size: 15px;
  padding: 7px 20px;
  line-height: 30px;
  list-style: none;
  white-space: nowrap;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.img1 {
  width: 100%;
}

.xlm{
  display: flex;
  justify-content: space-around;
}
.xlm li{
  width: 25%;

}
.xlm img{
  width: 100%;
}
.datu{
  width: 100%;
}
.datu img{
  width: 100%;
}
</style>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      titlelist: [],
      imglist: [],
      lunbolist:[],
      dlmlist:[],
      xlmlist:[],
      xlylist:[],
      xxllist:[],
      gdgglist:[],
      xdtlist:[],
      xdttlist:[],
      dtlist:[]
    };
  },
  mounted() {
    this.$axios
      .get(
        "/bl/IHome/GetHomeCategory?timestamp=1589189908435&_t=1589189908&source=2&webId=1",
        {
          params: {
            catId: this.$route.params.catId
          },
          headers: {
            "X-Host": "api.benlai.com"
          }
        }
      )
      .then(res => {
        console.log(res);
        this.titlelist = res.data.data.titles;
      });
    this.$axios
      .get(
        "/bl/IHome/GetHomePageTagInfo?_t=1589359965&webId=1&categorySysNo=1&offset=0&limit=20&source=2&localcity=384",
        {
          headers: {
            "X-Host": "api.benlai.com"
          }
        }
      )
      .then(res => {
        console.log(res);
        this.imglist = res.data.data[3].list;
        console.log(this.imglist);
        this.xlylist = res.data.data[4].list;
        this.xxllist = res.data.data[5].list;
        this.gdgglist = res.data.data[6].notificationBarList;
        this.xdtlist = res.data.data[7].list;
        this.xdttlist = res.data.data[8].list;
        this.dtlist = res.data.data.slice(9);
        console.log(this.dtlist[0].list[0].img)
      });
      this.$axios
      .get(
        "/bl/IHome/GetHomePageTagInfo?_t=1589357211&webId=1&categorySysNo=1&offset=0&limit=20&source=2&localcity=384",
      )
      .then(res => {
        console.log(res);
        this.lunbolist = res.data.data[0].list;
        console.log(this.lunbolist);
      });
      this.$axios
      .get(
        "/bl/IHome/GetHomePageTagInfo?_t=1589358566&webId=1&categorySysNo=1&offset=0&limit=20&source=2&localcity=384",
      )
      .then(res => {
        console.log(res);
        this.dlmlist = res.data.data[1].list;
        console.log(this.dlmlist);
        this.xlmlist=res.data.data[2].list
      });
  }
};
</script>
