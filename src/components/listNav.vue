<template>
  <div>
    <a-tabs
      default-active-key="1"
      @change="callback"
      :tabBarGutter="50"
      :animated="false"
      size="small"
    >
      <a-tab-pane v-for="item in typelist" :key="item.id" :tab="item.name">
        <a-checkbox-group @change="onChange">
          <div v-for="(_item, index) in item.child" :key="index">
            <span>{{ index + ":" }}</span>
            <a-checkbox :value="i" v-for="(i, _index) in _item" :key="_index">
              {{ i }}
            </a-checkbox>
          </div>
        </a-checkbox-group>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { getPhoneType } from "../api/index";
export default {
  data() {
    return {
      typelist: [],
      value: [],
    };
  },
  methods: {
    async getType() {
      const {
        data: { type },
      } = await getPhoneType();
      console.log(type);
      this.typelist = type;
    },
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
      console.log("value = ", this.value);
    },
    callback(key) {
      console.log(key);
    },
  },
  created() {
    this.getType();
  },
};
</script>
