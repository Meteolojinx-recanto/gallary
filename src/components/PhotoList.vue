<template>
    <div></div>
    <div>
        <h1>Галерея</h1>
        <div class="gallery">
            <vue-easy-lightbox
                :visible="visibleRef"
                :imgs="lightboxItems"
                :index="lightboxIndex"
                @hide="onHide"
            ></vue-easy-lightbox>
            <PhotoItem
                v-for="(photo, index) in photos"
                :key="photo.id"
                :photo="photo"
                :user="getUserInfo(photo.user)"
                @click="openLightbox(index)"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PhotoItem from './PhotoItem.vue';
import EasyLightbox from 'vue-easy-lightbox';

export default {
    components: {
        PhotoItem,
        EasyLightbox,
    },
    data() {
        return {
            photos: [],
            users: [],
            lightboxItems: [], // Массив элементов для vue-easy-lightbox
            lightboxIndex: null,
            visibleRef: false,
            indexRef: 0,
        };
    },
    mounted() {
        axios
            .get('https://api.slingacademy.com/v1/sample-data/photos', {
                params: {
                    offset: 5,
                    limit: 20,
                },
            })
            .then((response) => {
                this.photos = response.data.photos;
                this.fetchUserDetails(this.photos);
                this.lightboxItems = this.photos.map((photo) => ({
                    src: photo.url, // URL изображения
                    title: photo.title, // Название изображения
                }));
            })
            .catch((error) => {
                console.error('Ошибка при выполнении GET-запроса для фотографий:', error);
            });
    },
    methods: {
        fetchUserDetails(photos) {
            const userIds = photos.map((photo) => photo.user);
            userIds.forEach((userId) => {
                axios
                    .get(`https://api.slingacademy.com/v1/sample-data/users/${userId}`)
                    .then((response) => {
                        this.users.push(response.data.user);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            });
        },
        getUserInfo(userId) {
            const user = this.users.find((user) => user.id === userId);
            if (user) {
                return `${user.first_name} ${user.last_name}`;
            } else {
                return 'Неизвестный пользователь';
            }
        },
        openLightbox(index) {
            this.lightboxIndex = index;
            this.visibleRef = true;
        },
        onHide() {
            this.visibleRef = false;
            this.indexRef = null;
        },
    },
};
</script>

<style>
.gallery {
    display: grid;
    margin: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 1fr;
    grid-gap: 10px;
}
</style>
