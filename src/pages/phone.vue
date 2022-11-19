<template>
  <div>
    <listNav />
  </div>
</template>

<script>

import listNav from "../components/listNav.vue";
export default {
  components: { listNav },
  methods:{
    breakRoute() {
      console.log(this.$route.fullPath.split("/"));
    },
  },
  created(){
    this.breakRoute()
  }
  
};
</script>

<style></style>
