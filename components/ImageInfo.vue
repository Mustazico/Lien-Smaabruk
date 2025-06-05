<template>
    <div class="container">
        <div class="info-container">
            <p><strong>Dato:</strong> {{ date }}</p>
            <p><strong>Soloppgang:</strong> {{ sunrise }}</p>
            <p><strong>Solnedgang:</strong> {{ sunset }}</p>
            <p>
                <strong>Google Maps:</strong>
                <a :href="googleMapsLink" target="_blank">Se stedet på kartet</a>
            </p>
        </div>
        <div class="title-image-container">
            <h1>{{ title }}</h1>
            <img
                class="image"
                :src="imageSrc"
                :alt="imageAlt"
            />
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    date: String,
    sunrise: String,
    sunset: String,
    googleMapsLink: String,
    imageSrc: String,
    imageAlt: String,
});
</script>

<style scoped>
.title-image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    
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
    padding-right: 40px;
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