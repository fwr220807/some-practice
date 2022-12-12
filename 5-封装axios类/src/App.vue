<script lang="ts" setup>
import { ref } from 'vue';

const codes = ref([] as Array<string>)
codes.value.push('111')
codes.value.push('222')
console.log(codes.value);

</script>

<template>
  <div>
    <div v-for="item,index in codes" :key="index">
      <span>
        {{codes[index]}} {{item}}
      </span>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>
