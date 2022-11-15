import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  // getters: {
  //   double: (state) => state.count * 2,
  // },
  // 也可以这样定义
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
