<script setup>
import {ref} from "vue";
import UButton from "../../components/UI/UButton.vue";

const showHistory = ref(false);
</script>

<template>
  <section class="stack">
    <span class="title">That's the way</span>
    <div class="stack__container">
      <div class="stack__info">
        <p>4 года как web-разработчик. </p>
        <p> За это время успел поработать в нескольких компаниях, на разных позициях и поработать с разными инструментами. </p>
      </div>
      <div class="stack__tools">
        <p>Инструменты: </p>
        <ul>
          <li><a href="">JS</a></li>
          <li><a href="">TS</a></li>
          <li><a href="">Angular</a></li>
          <li><a href="">Vue</a></li>
          <li><a href="">Node JS</a></li>
        </ul>
      </div>
    </div>

    <UButton @click="showHistory = !showHistory">
      Немного подробнее
    </UButton>

    <div v-if="showHistory" class="stack__history">
      <div class="stack__history-element">
        <div class="years">-- 2018-2019 --</div>
        <div class="company">Hexelsoft</div>
        <div class="description">Занимался разработкой небольших приложений на React, Ionic, Angular, Ruby on Rails и Vanilla js.</div>
      </div>

      <div class="stack__history-element">
        <div class="years">-- 2019-2019 --</div>
        <div class="company">РИТ</div>
        <div class="description">Занимался разработкой небольших приложений на React, Ionic, Angular, Ruby on Rails и Vanilla js.</div>
      </div>

      <div class="stack__history-element">
        <div class="years">-- 2020-2021 --</div>
        <div class="company">Виста</div>
        <div class="description">Занимался разработкой небольших приложений на React, Ionic, Angular, Ruby on Rails и Vanilla js.</div>
      </div>

      <div class="stack__history-element">
        <div class="years">-- 2021-2023 --</div>
        <div class="company">Тензор</div>
        <div class="description">Занимался разработкой небольших приложений на React, Ionic, Angular, Ruby on Rails и Vanilla js.</div>
      </div>

      <div class="stack__history-element">
        <div class="years">-- 2023-... --</div>
        <div class="company">ЦИТ Барс</div>
        <div class="description">Занимался разработкой небольших приложений на React, Ionic, Angular, Ruby on Rails и Vanilla js.</div>
      </div>

    </div>
  </section>
</template>

<style>
.stack__container p {
  margin: 1rem 0;
}

.stack__tools {
  display: flex;
  align-items: center;
}
.stack__tools ul {
  display: flex;
}

.stack__tools ul li {
  margin: 0 .5rem;
}

.stack__history-element {
  margin: 3rem 0;
}


</style>