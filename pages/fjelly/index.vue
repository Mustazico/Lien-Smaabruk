<template>
    <ImageInfo
        title="Fjelly - Siste bilde fra kamera i Isdalen"
        date="5. juni 2025"
        sunrise="04:32"
        sunset="22:18"
        googleMapsLink="https://www.google.com/maps?q=Isdalen"
        imageSrc="/images/Fjellyfeed.jpg"
        imageAlt="Bilde fra Fjelly"
    />
</template>

<script setup>
import ImageInfo from '@/components/ImageInfo.vue';
definePageMeta({
  maxLevel: 9
});
</script>