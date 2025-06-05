<template>
    <div class="header-border">
        <div class="title">
            Lien Småbruk
        </div>
        <button class="button">
          Logout
        </button>
      </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
    .header-border {
      display: flex;
      justify-content: space-between;
      position: relative;
      width: 100%;
      height: 100px;
      margin-bottom: 20px;
      align-content: center;
    
    }

    .title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        font-size: 100px;
        color: #D1E9F6;
        font-family: 'Inconsolata', 'sans-serif';
        font-weight: 800;
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
   }

   .button {
    height: 50px;
    align-self: center;
    margin-left: auto;
    padding: 10px 30px;
    font-size: 16px;
    background-color: #D1E9F6;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    font-family: 'Inconsolata', sans-serif;
    font-weight: 600;
    font-size: 22px;
}

.button:hover {
    background-color: #b0d4e3; /* Add hover effect */
}
  </style>
  