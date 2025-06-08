<template>
  <div class="header-border">
    <div class="title">Lien Småbruk</div>
    <button class="button">Logout</button>
  </div>
</template>

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

.button {
  height: clamp(32px, 5vw, 50px);
  padding: clamp(4px, 1vw, 10px) clamp(8px, 3vw, 20px);
  font-size: clamp(12px, 2vw, 20px);
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
