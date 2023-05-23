<script setup>

import Main from "./About/Main.vue";
import Social from "./About/Social.vue";
import Stack from "./About/Stack.vue";
import LastBlog from "./About/LastBlog.vue";
</script>

<template>
    <article class="presentation">
      <Main/>
      <hr>
     <Social/>
      <hr>
      <Stack/>
      <hr>
      <LastBlog/>
    </article>
</template>

<style>

hr {
  margin: 5rem 0;
  border: none;
  border-top: 3px dashed darkgrey;
}

</style>