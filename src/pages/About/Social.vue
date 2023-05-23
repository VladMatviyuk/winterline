<script setup>
</script>

<template>
  <section class="contacts">
    <span class="title">Social</span>
    <div class="contacts__container">
      <div>Иногда бываю и тут: </div>
      <ul class="contacts__list">
        <li class="contacts__item">
          <a href="#">
            <img alt="telegram" class="icon" src="../../assets/social/telegram_icon.svg" width="48px">
          </a>
        </li>
        <li class="contacts__item">
          <a href="#">
            <img alt="github" class="icon" src="../../assets/social/github_icon.svg" width="48px">
          </a>
        </li>
        <li class="contacts__item">
          <a href="#">
            <img alt="codepen" class="icon" src="../../assets/social/codepen_icon.svg" width="48px">
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.contacts__container {
  display: flex;
  align-items: center;
}

.contacts__list {
  display: flex;
}

.contacts__item {
  margin: 0 .5rem;
}

.icon {
  width: 48px;
}

.icon:hover {
  filter: invert(49%) sepia(0%) saturate(2218%) hue-rotate(344deg) brightness(104%) contrast(89%);;
  transition: filter .1s ease-in-out;
}
</style>