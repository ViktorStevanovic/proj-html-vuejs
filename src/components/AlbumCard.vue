<template>
    <article class="album-card">
        <img :src='album.thumb' alt="">
        <!-- <img src="../assets/gallery1.jpg" alt=""> -->
        <h1>{{ album.title }}</h1>
        <div class="streaming-platform">
            <p>Stream on:</p>
            <div class="platform-icons">
                <img src="../../node_modules/bootstrap-icons/icons/spotify.svg" alt="spotify icon">
                <img src="../../node_modules/bootstrap-icons/icons/youtube.svg" alt="youtube icon">
                <img src="../../node_modules/bootstrap-icons/icons/music-note-beamed.svg" alt="music note icon">
                <img src="../../node_modules/bootstrap-icons/icons/cloud.svg" alt="cloud icon">
                <img src="../../node_modules/bootstrap-icons/icons/browser-safari.svg" alt="safari browser icon">
            </div>
        </div>
        
    </article>
</template>
<script>
export default {
    name: 'AlbumCard',
    props: {
        album:{
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .streaming-platform{
        display: flex;
        gap: .75rem;
    }
    .platform-icons img{
        margin: 0px 2px;
    }
</style>