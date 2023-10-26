<template>
    <div class="container">
        <PhotoList />
    </div>
</template>
<script>
import PhotoList from '@/components/PhotoList.vue';
export default {
    components: {
        PhotoList,
    },
};
</script>
<style>
body {
    box-sizing: border-box;
    background-color: #b4b5be;
    color: #b18742;
}
.container {
    max-width: 860px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #635b6c;
    border-radius: 13px;
}
</style>
