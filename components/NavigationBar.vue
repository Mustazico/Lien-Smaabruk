<template>
  <nav class="nav-container">
    <button
      class="burger"
      @click="toggleMenu"
      aria-label="Toggle menu"
      :aria-expanded="menuOpen"
      :aria-controls="'nav-list'"
    >
      <span></span>
      <span></span>
      <span></span>
      <span class="burger-label">Menu</span>
    </button>

    <ul
      id="nav-list"
      :class="{ open: menuOpen }"
      class="nav-list"
    >
      <li><nuxt-link to="/lien">Lien småbruk hovedside</nuxt-link></li>
      <li><nuxt-link to="/lien/miljo">Lien småbruk miljø</nuxt-link></li>
      <li><nuxt-link to="/nansybu">Nansybu hovedside</nuxt-link></li>
      <li><nuxt-link to="/fjelly">Fjelly hovedside</nuxt-link></li>
      <li><nuxt-link to="/fjelly/miljo">Fjelly miljø</nuxt-link></li>
      <li><nuxt-link to="/straumoy">Straumøy hovedside</nuxt-link></li>
      <li><nuxt-link to="/straumoy/miljo">Straumøy miljø</nuxt-link></li>
      <li><nuxt-link to="/straumoy/vann">Straumøy vann</nuxt-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-x: auto;
}

.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

li {
  flex: 1 1 auto;
  text-align: center;
  min-width: 180px;
}

li a {
  display: block;
  padding: 28px 30px;
  border-right: solid 1px #0000004d;
  text-decoration: none;
  background-color: #D1E9F6;
  font-size: clamp(16px, 2.5vw, 27px);
  color: #000;
  font-family: 'Inconsolata', sans-serif;
  white-space: nowrap;
}

li:last-child a {
  border-right: none;
}

li a:hover {
  background-color: #aaa;
}

/* Burger button - hidden on desktop */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 10px;
}

.burger span {
  width: 25px;
  height: 3px;
  background-color: #000000;
  border-radius: 2px;
  margin-right: 5px;
  transition: all 0.3s linear;
}

.burger-label {
  color: #000000;
  font-family: 'Inconsolata', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-left: 10px;
  user-select: none;
  align-self: center;
}

/* Mobile styles */
@media (max-width: 768px) {
  .burger {
    display: flex;
  }
  .nav-container {
    background-color: rgba(255, 231, 231, 0.24);
  }
  .nav-list {
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .nav-list.open {
    max-height: 500px; /* enough height to show all items */
  }

  li {
    flex: none;
    border-bottom: 1px solid #0000004d;
  }

  li a {
    padding: 15px;
    font-size: 20px;
  }
}
</style>
