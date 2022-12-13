<script setup lang="ts">
import {ref} from "vue";

let status = ref(true)

const click = () => {
  status.value = !status.value
}


</script>

<template>
  <div class="scroller" v-auto-scroll="status">
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </div>
  <button @click="click">{{ status ? '开始' : '暂停' }}</button>
</template>

<style scoped lang="scss">
.scroller {
  height: 300px;
  width: 400px;
  overflow: scroll;
  background-color: #444;
}

</style>
