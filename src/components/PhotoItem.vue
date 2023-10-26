<template>
    <div class="photo-item" @mouseover="showInfo = true" @mouseleave="showInfo = false" @click="openLightbox">
      <img :src="photo.url" :alt="photo.title" />
      <div class="info" v-if="showInfo">
        <p>Название: {{ photo.title }}</p>
        <p>Пользователь: {{ user }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      photo: Object,
      user: String,
    },
    data() {
      return {
        showInfo: false,
      };
    },
    methods: {
      openLightbox() {
        // Здесь вы можете вызвать функцию для открытия фотографии в CoolLightBox
      },
    },
  };
  </script>
  
  <style scoped>
  .photo-item {
    position: relative;
    cursor: pointer; /* Добавьте курсор-указатель, чтобы показать, что элемент кликабелен */
  }
  
  img {
    flex: 1;
    max-width: 100%;
    object-fit: cover;
  }
  
  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 10px;
    display: none;
    width: 100%;
    text-align: center;
  }
  
  .photo-item:hover .info {
    display: block;
  }
  </style>
  