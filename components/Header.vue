<template>
  <div class="header-border">
    <div class="title">Lien Småbruk</div>
    <button class="button">Logout</button>
  </div>
</template>

  
  <script setup>

  </script>
  
  <style scoped>
.header-border {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap; 
  padding: 10px 20px;
 
}

.title {
  flex: 1 1 100%;
  text-align: center;
  font-size: clamp(24px, 6vw, 100px);
  color: #D1E9F6;
  font-family: 'Inconsolata', 'sans-serif';
  font-weight: 800;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
}

.button {
  height: clamp(36px, 6vw, 50px);
  padding: clamp(6px, 1.5vw, 10px) clamp(12px, 4vw, 30px);
  font-size: clamp(14px, 2.5vw, 22px);
  background-color: #D1E9F6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-family: 'Inconsolata', sans-serif;
  font-weight: 600;
  margin-left: auto;
}

.button:hover {
  background-color: #b0d4e3;
}

  </style>
  