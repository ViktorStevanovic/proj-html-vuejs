<template>
    <article class="album-card">
        <img :src='album.thumb' alt="">
        <!-- <img src="../assets/gallery1.jpg" alt=""> -->
        <h3>{{ album.title }}</h3>
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

    .album-card{
        width: 100%;
        text-align: center;

        h3{
            font-size: 1.2rem;
            text-transform: uppercase;
            margin: .5rem 0;
        }
    }
    .album-card > img{
            width: 100%;
        }
    .streaming-platform{
        display: flex;
        gap: .75rem;
        justify-content: center;
    }
    .platform-icons img{
        margin: 0px 2px;
    }
</style>