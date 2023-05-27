<script setup>
import UIcon from "../../components/UI/UIcon.vue";

const socials = [
  {
    name: 'telegram_icon',
    alt: 'telegram',
    width: '48',
    link: ''
  },
  {
    name: 'github_icon',
    alt: 'github',
    width: '48',
    link: ''
  },
  {
    name: 'codepen_icon',
    alt: 'codepen',
    width: '48',
    link: ''
  }
]
</script>

<template>
  <section class="contacts">
    <span class="title">Social</span>
    <div class="contacts__container">
      <div>Также я: </div>
      <ul class="contacts__list">
        <li class="contacts__item" v-for="social in socials">
          <a :href="social.link">
            <UIcon :name="social.name" :alt="social.alt" :width="social.width"/>
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
  margin-top: 1rem;
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