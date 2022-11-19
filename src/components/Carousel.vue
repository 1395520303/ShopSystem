<template>
  <div class="outer">
    <a-carousel arrows autoplay :autoplaySpeed="2000">
      <div
        slot="prevArrow"
        class="custom-slick-arrow"
        style="left: 10px; z-index: 1"
      >
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div v-for="(item, index) in bannerList" :key="index" >
        <img :src="item.src" alt="pic" style="transform:translateX(-650px)"/>
      </div>
    </a-carousel>
  </div>
</template>

<script>
import { getBannerList } from "../api/list";
export default {
  data() {
    return {
      bannerList: {},
    };
  },
  methods: {
    async getList() {
      const data = await getBannerList();
      this.bannerList = data;
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style scoped>
.outer {
  margin: 0 auto;
  width: 1200px;
  height: 600px;
}
.ant-carousel {
  height: 100%;
  width: 100%;
}
.ant-carousel >>> .slick-slide {
  height: 600px;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: black;
  opacity: 0.5;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.8;
}
img {
  height: 600px;
}
</style>
