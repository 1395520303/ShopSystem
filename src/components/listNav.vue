<template>
  <div>
    <a-tabs
      default-active-key="1"
      @change="callback"
      :tabBarGutter="50"
      :animated="false"
      size="small"
    >
      <a-tab-pane key="1" tab="Pocket系列">
        <div class="condition">
          <div class="discount">服务优惠：</div>
          <div class="discount">屏幕尺寸</div>
          <div class="discount">更多选项</div>
          <div class="discount">排序</div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="华为畅享系列"> </a-tab-pane>
      <a-tab-pane key="3" tab="nova系列"> </a-tab-pane>
      <a-tab-pane key="4" tab="P系列"> Content of Tab Pane 3 </a-tab-pane>
      <a-tab-pane key="5" tab="Mate系列"> Content of Tab Pane 3 </a-tab-pane>
      <a-tab-pane key="6" tab="华为认证二手机">
        Content of Tab Pane 3
      </a-tab-pane>
      <a-tab-pane key="7" tab="华为官方翻新">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>
