<script setup></script>
<template>
  <button class="wb-btn">
    <slot></slot>
  </button>
</template>

<style>
.wb-btn {
  border: 2px dotted darkgrey;
  color: darkgrey;
  background: transparent;
  font-size: 1rem;
  padding: .5rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all .1s ease-in-out;
}

.wb-btn:hover {
  color: black;
  border: 2px dotted black;
  box-shadow: 2px 2px 0px black;
  transition: all .1s ease-in-out;
}
</style>