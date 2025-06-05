<template>
     <div class="nav-container">
        <ul class="ul">
            <li><a href="#home">Lien småbruk hovedside</a></li>
            <li><a href="#about">Lien småbruk miljø</a></li>
            <li><a href="#services">Nansybu hovedside</a></li>
            <li><a href="#contact">Fjelly hovedside</a></li>
            <li><a href="#contact">Fjelly Miljø</a></li>
            <li><a href="#contact">Straumøy hovedside</a></li>
            <li><a href="#contact">Straumøy Miljø</a></li>
            <li><a href="#contact">Straumøy Vann</a></li>
        </ul>
    </div>
</template>

<style scoped>
.nav-container {
    display: flex; /* Use flexbox to align items horizontally */
    justify-content: center; 
    width: 100%;
    background-color: #000000; /* Background color for the navbar */
}
.ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex; 
    width: 100%;
  
}

li {
    flex: 1;
    text-align: center; 
}

li a {
    display: block;
    padding: 28px 30px;
    border-right: solid 1px #0000004d;
    text-decoration: none;
    color: rgb(255, 255, 255);
    background-color: #D1E9F6;
    font-size: 27px;
    color: #000;
    font-family: 'Inconsolata', sans-serif;
    white-space: nowrap;
}

li:last-child a {
    border-right: none;
}

li a:hover {
    background-color: #aaa; /* Add hover effect */
}

</style>