<template>
    <main>
        <!-- STORY SECTION -->
        <section class="container-fluid story-section">
            <p class="my-subtitle">Who we are</p>
            <h1 class="my-title">Sense the jazz</h1>
            <p>The story of Jazz And Blues Society Of Determination, Passion, Idealism, Community, And Of Course, Music. Founded In 1985 And Incorporated In 1986, As A Community Based, Not-For-Profit, Charitable Arts Organization Located In Vancouver, British Columbia, The Society, From The Very Beginning, Has Worked Diligently To Establish Vancouver As A Centre For The Creation And Exchange Of Sounds And Ideas Between The Local, National And International Music Communities.</p>
            <button class="my-button">Read More</button>
        </section>
        <!-- VIDEO PLAYER SECTION -->
        <section class="video-section">
            <img src="../assets/Video.jpg" alt="">
            <div class="player">
                <img src="../assets/play-circle.svg" alt="media player image">
                <h1 class="my-title">New music video</h1>
            </div>
        </section>
        <section class="album-section">
            <div class="text-center">
                <p class="my-subtitle">who we are</p>
                <h1 class="my-title">Sense the jazz</h1>
            </div>
            <article v-for="(album, index) in store.albumList" :key="index">
                <AlbumCard :album="album"/>
            </article>
        </section>
        
    </main>
</template>
<script>
import AlbumCard from './AlbumCard.vue';
import { store } from '../js/store';

export default {
    name:'AppMain',
    components:{
        AlbumCard,
    },
    data() {
        return {
            store
        }
    },
}
</script>
<style lang="scss" scoped>
    .story-section{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        justify-content: end;
        align-items: center;
        text-align: center;
        padding-top: 15rem;
        padding-bottom: 7rem;
        p{
            width: 73ch;
        }
    }
    .video-section{
        position: relative;
        img{
            width: 100%;
        }
        .player{
            position: absolute;
            transform: translate(-50%,-50%);
            top: 50%;
            left: 50%;
            text-align: center;
            img{
                width: 85px;
            }
            h1{
                margin-top: 2rem;
            }
        }
    }
</style>