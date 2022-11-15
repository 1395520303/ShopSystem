<template>
  <div>
    count:{{ counter.count }}
    <a-button @click="test">count + 1</a-button>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useCounterStore } from "@/stores/counter";
import { getData } from "../api/index";
export default {
  computed: {
    ...mapStores(useCounterStore),
  },
  methods: {
    test() {
      this.counter.increment();
    },
    async getdata() {
      const {data} = await getData();
      console.log(data);
    },
  },
  created() {
    this.getdata();
  },
};
</script>

<style></style>
