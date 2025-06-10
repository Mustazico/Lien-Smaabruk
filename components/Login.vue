<template>
    <div class ="login-container">
        <h1 class="h">Login</h1>
        <form class="login-form" @submit.prevent="handleLogin">
        <label class="label" for="brukernavn">Brukernavn</label><br>
            <input
            class="input"
            placeholder="Brukernavn"
            type="text"
            id="brukernavn"
            name="brukernavn"
            v-model="brukernavn"
            required
            />

        <label class="label" for="passord">Passord</label><br>
            <input
            class="input"
            placeholder="Passord"
            type="password"
            id="passord"
            name="passord"
            v-model="passord"
            required
            />

        <button class="button" type="submit">Logg inn</button>

        <p v-if="errorMsg" style="color: red; margin-top: 10px;">{{ errorMsg }}</p>
        </form>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const userState = useSessionUser();
const brukernavn = ref('');
const passord = ref('');
const errorMsg = ref('');

// Funksjon for å håndtere innlogging
async function handleLogin() {
  errorMsg.value = '';

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: brukernavn.value,
        password: passord.value,
      }),
    });

    const data = await response.json();

    if (data.success) {
    userState.value = data.user;
    // Debugging  
    console.log('User state updated:', userState.value);
      alert('Du er nå logget inn!');

      localStorage.setItem('userlevel', data.userlevel);
      router.push('/home');
    } else {
      errorMsg.value = data.message || 'Innlogging feilet';
    }
  } catch (err) {
    errorMsg.value = 'En feil oppstod. Prøv igjen senere.';
  }
}
</script>

<style scoped>
.login-container {
    width: 500px;
    height: 500px;
    border: solid 1px #000;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.658);
}
.h {
    text-align: center;
    font-size: 50px;
    color: #8a8686;
    font-family: 'Inconsolata', sans-serif;
}
.login-form {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    
}
.label {
    font-size: 35px;  
    font-family: 'Inconsolata', sans-serif;
    font-weight: bold;
    margin-top: 20px;
    
}
.input {
    width: 90%;
    height: 30px;
    display: flex;
    align-items: center;
    border: solid 2px #000;
    border-radius: 5px;
    }

    .button {
    background-color: #D1E9F6;
    color: rgb(0, 0, 0);
    padding: 10px;
    text-align: center;
    font-size: 25px;
    width: 90%;
    cursor: pointer;
    font-family: 'Inconsolata', sans-serif;
    align-items: center;
    margin-top: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.658);
    }
</style>