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
      <div>
        <img src="#" alt="pic" />
      </div>
      <div>
        <img src="#" alt="pic" />
      </div>
      <div>
        <img src="#" alt="pic" />
      </div>
      <div>
        <img src="#" alt="pic" />
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.outer{
    margin: 0 auto;
    width: 1000px;
    height: 600px;
}
.ant-carousel{
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
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}
img {
  height: 600px;
}
</style>
