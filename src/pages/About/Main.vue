<script setup>

</script>

<template>
  <header class="presentation__head">
    <div class="presentation__image">
      <img src="../../assets/main.png">
    </div>
    <ul class="presentation__list">
      <li class="presentation__list-item-1">Web-разработчик</li>
      <li class="presentation__list-item-2">Иногда пишу код</li>
      <li class="presentation__list-item-3">Иногда пишу</li>
    </ul>
  </header>
</template>

<style>
.presentation__head {
  min-height: calc(100svh - 6rem);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.presentation__list {
  font-size: 14px;
  margin-right: 4rem;
}
.presentation__list li {
  padding: .2rem 0;
}

.presentation__list-item-1 {
  animation: .6s cubic-bezier(.68,-.55,.585,1.65) forwards fade-in;
}
.presentation__list-item-2 {
  animation: 1.2s cubic-bezier(.68,-.55,.585,1.65) forwards fade-in;
}
.presentation__list-item-3 {
  animation: 1.8s cubic-bezier(.68,-.55,.585,1.65) forwards fade-in;
}

.presentation__image img {
  border: .3rem solid darkgrey;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: all .3s ease-in-out;
}

.presentation__image img:hover {
  //box-shadow: 8px 0px 0px black;
  transition: all .3s ease-in-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(0)
  }

  to {
    opacity: 1;
    transform: translateY(1rem)
  }
}
</style>