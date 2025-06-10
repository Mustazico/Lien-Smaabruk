<template>
  <div class="header-border">
    <div class="title">Lien Småbruk</div>

    <div v-if="user" class="user-menu">
      <button class="button" @click="toggleDropdown">
        {{ user.username }}
      </button>

      <div v-if="showDropdown" class="dropdown">
        <button class="dropdown-button" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSessionUser } from '~/composables/useSessionUser';

const router = useRouter();
const user = useSessionUser();
const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

async function logout() {
  await $fetch('/api/logout', { method: 'POST' });
  user.value = null;
  showDropdown.value = false;
  router.push('/');
}
</script>

<style scoped>
.header-border {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  flex-wrap: nowrap;
}

.title {
  font-size: clamp(50px, 5vw, 90px);
  color: #D1E9F6;
  font-family: 'Inconsolata', sans-serif;
  font-weight: 800;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
}

.user-menu {
  position: relative;
}

.button {
  height: clamp(32px, 5vw, 70px);
  padding: clamp(4px, 1vw, 10px) clamp(8px, 3vw, 20px);
  font-size: clamp(12px, 2vw, 32px);
  background-color: #D1E9F6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-family: 'Inconsolata', sans-serif;
  font-weight: 600;
  white-space: nowrap;
}

.button:hover {
  background-color: #b0d4e3;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 5px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 100;
}

.dropdown-button {
  background: none;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Inconsolata', sans-serif;
  cursor: pointer;
  width: 100%;
  text-align: left;
}

.dropdown-button:hover {
  background-color: #f2f2f2;
}

@media (max-width: 600px) {
  .header-border {
    padding: 5px 10px;
  }

  .title {
    font-size: 50px;
  }

  .button {
    font-size: 14px;
    padding: 5px 10px;
  }
}
</style>
