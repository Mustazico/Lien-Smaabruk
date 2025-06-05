<template>
    <div class="container">
        <div class="info-container">
            <p><strong>Dato:</strong> 5. juni 2025</p>
            <p><strong>Soloppgang:</strong> 04:32</p>
            <p><strong>Solnedgang:</strong> 22:18</p>
            <p>
                <strong>Google Maps:</strong>
                <a href="https://www.google.com/maps?q=Gryteskar" target="_blank">Se stedet på kartet</a>
            </p>
        </div>
    <div class="title-image-container">
        <h1>Nansybu - Siste bilde fra kamera i Gryteskar</h1>
        <img
            class="image"
            src="/images/Nansybufeed.jpg"
            alt="Bilde fra Nansybu"
        />
    </div>
    </div>
</template>

<style scoped>
.title-image-container {
    display: flex; 
    flex-direction: column;
    align-items: center; 
    margin-bottom: 20px;
    padding-left: 50px;
}
.container {
    display: flex;
    align-items: center;
    font-family: 'Inconsolata', 'sans-serif';
    font-weight: 400;
    margin-top: 20px;
}
.info-container {
    font-size: 25px;
    padding-left: 20px;
}
    h1 {
        text-align: center;
        font-size: 35px;
        color: #000000;
        font-family: 'Inconsolata', 'sans-serif';
        font-weight: 400;
        margin-top: 20px;
    }
    .image {
        width: 100rem;
        height: auto;
        object-fit: cover;
        display: block; 
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
        margin: 20px auto;

    }
</style>