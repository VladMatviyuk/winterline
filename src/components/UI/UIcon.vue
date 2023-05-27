<script setup>
import {defineProps} from 'vue';
const {alt, name, width} = defineProps(['alt', 'name', 'width']);
const getImageUrl = (name) => {
  return new URL(`../../assets/${name}.svg`, import.meta.url).href;
}
</script>

<template>
  <img
      class="icon"
      :alt="alt"
      :src="getImageUrl(name)"
      :width="width + 'px'">
</template>

<style>

</style>