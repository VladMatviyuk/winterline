<script setup>

</script>
<template>
  <header>
      <div class="title">
        WinterLine
      </div>
    <nav>
      <ul>
        <li>
          <router-link to="/">
            о мне
          </router-link>
        </li>
        <li>
          <router-link to="blog">
          блог
          </router-link>
        </li>
        <li>
          <router-link to="demo">
            проекты
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  margin: .2rem 0;
  font-size: 32px;
  font-family: 'Kaushan Script', cursive;
  cursor: pointer;
}

.title:hover {
  //color: lightgreen;
  color: darkgrey;
  text-shadow: 2px 2px 0px black;
  transition: color .1s ease-out,text-shadow .3s ease-out;
}
nav {
}

nav ul {
  display: flex;
}

nav ul li {
  cursor: pointer;
  padding: 0px 8px;
}

nav ul li:hover {
  text-decoration: underline;
  //text-decoration-color: lightgreen;
  text-decoration-color: darkgrey;
  text-underline-offset: 8px;
  text-decoration-thickness: 3px;
}
</style>
