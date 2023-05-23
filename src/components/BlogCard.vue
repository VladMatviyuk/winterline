<script setup>
</script>

<template>
  <div class="card_container">
    <div class="card">
      <div class="card__info">
        <div class="card__info-title">Без практики, все знания летят в урну!</div>
        <div class="card__info-description">15 идей для прокачки скилов и закрепления своих знаний.</div>
      </div>
    </div>
    <p class="card__date">03.06.23</p>
    <p class="card__title">Без практики, все знания летят в урну!</p>
    <p class="card__description">15 идей для прокачки скилов и закрепления своих знаний.</p>
    <button class="card__btn">>>></button>
  </div>
</template>

<style>
.card_container {
  display: flex;
  flex-direction: column;
}

.card {
  width: 100%;
  height: 350px;
  margin: 4rem 0 0;
  padding: 5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-image: url('../assets/trash.png');
  filter: grayscale(100%);
  transition: all .3s ease-in-out;
}

.card:hover {
  box-shadow: 6px 6px 0 black;
  transition: all .3s ease-in-out;
}
.card__info {
  padding: 1rem;
  background-color: rgba(191, 191, 191, .8);
}

.card__info-title {
  text-align: center;
  font-size: 24px;
}
.lastBlog__card div {
  margin: 1rem 0;
}

.card__info-description {
  text-align: center;
  font-size: 14px;
}

.card__date {
  font-size: 14px;
  color:grey;
  margin-top: .5rem;
  text-align: end;
}

.card__title {
  font-size: 2rem;
}

.card__description {
  margin-top: 1rem;
  font-size: .9rem ;
}

.card__btn {
  margin-top: 2rem;
  width: 70px;
  border: 2px dotted darkgrey;
  color: darkgrey;
  background: transparent;
  font-size: 1rem;
  padding: .5rem;
  cursor: pointer;
  transition: all .1s ease-in-out;
}

.card__btn:hover {
  color: black;
  border: 2px dotted black;
  box-shadow: 2px 2px 0px black;
  transition: all .1s ease-in-out;
}
</style>