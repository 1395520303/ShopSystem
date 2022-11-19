<template>
  <div>
    count:{{ counter.count }}
    <a-button @click="test">count + 1</a-button>
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
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useCounterStore } from "@/stores/counter";
import { getPhoneType } from "../api/index";
export default {
  data() {
    return {
      typelist: {},
      value: [],
    };
  },
  computed: {
    ...mapStores(useCounterStore),
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    test() {
      this.counter.increment();
    },
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
      console.log("value = ", this.value);
    },
    async getType() {
      const data = await getPhoneType();
      console.log(data);
      this.typelist = data;
    },
  },
  created() {
    this.getType();
  },
};
</script>

<style></style>
