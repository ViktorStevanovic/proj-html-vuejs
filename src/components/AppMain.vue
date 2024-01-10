<template>
    <main>
        <!-- STORY SECTION -->
        <section class="container-fluid story-section">
            <p class="my-subtitle">Who we are</p>
            <h1 class="my-title">Sense the jazz</h1>
            <p class="story-info">The story of Jazz And Blues Society Of Determination, Passion, Idealism, Community, And Of Course, Music. Founded In 1985 And Incorporated In 1986, As A Community Based, Not-For-Profit, Charitable Arts Organization Located In Vancouver, British Columbia, The Society, From The Very Beginning, Has Worked Diligently To Establish Vancouver As A Centre For The Creation And Exchange Of Sounds And Ideas Between The Local, National And International Music Communities.</p>
            <button class="my-button">Read More</button>
        </section>

        <!-- VIDEO PLAYER SECTION -->
        <section class="video-section container-fluid">
            <img src="../assets/Video.jpg" alt="">
            <div class="player">
                <img src="../assets/play-circle.svg" alt="media player image">
                <h1 class="my-title">New music video</h1>
            </div>
        </section>

        <!-- ALBUM CARDS SECTION -->
        <section class="album-section container-fluid">
            <div class="text-center">
                <p class="my-subtitle">who we are</p>
                <h1 class="my-title">Sense the jazz</h1>
            </div>
            <div class="album-container">
                <article v-for="(album, index) in store.albumList" :key="index" class="single-album">
                    <AlbumCard :album="album"/>
                </article>
            </div>
        </section>

        <!-- NEW ALBUM SECTION -->
        <section class="new-album-section container-fluid">
            <div class="new-album-info">
                <p class="my-subtitle">Instrumental rock</p>
                <h1 class="my-title">Album out now</h1>
                <button class="my-button">Read more</button>
            </div>
        </section>

        <!-- STATISTICS SECTION -->
        <section class="statistics-section container-fluid">
            <article class="statistic">
                <img src="../assets/image (13).svg" alt="concerts icon">
                <h1 class="m-0">163</h1>
                <p class="m-0">concerts</p>
            </article>
            <article class="statistic">
                <img src="../assets/image (14).svg" alt="concerts icon">
                <h1 class="m-0">145</h1>
                <p class="m-0">Happy Clients</p>
            </article>
            <article class="statistic">
                <img src="../assets/image (15).svg" alt="concerts icon">
                <h1 class="m-0">72</h1>
                <p class="m-0">Music Awards</p>
            </article>
            <article class="statistic">
                <img src="../assets/image (16).svg" alt="concerts icon">
                <h1 class="m-0">182</h1>
                <p class="m-0">Total songs</p>
            </article>
        </section>

        <!-- BLOG SECTION -->
        <section class="blog-section container-fluid">
            <div class="text-center">
                <p class="my-subtitle">music blog</p>
                <h1 class="my-title">Best music blog</h1>
            </div>
            <div class="blog-container">
                <article v-for="(blog, index) in store.blogList" :key="index" class="single-blog">
                    <BlogCard :blog="blog"/>
                </article>
            </div>
        </section>

        <!-- INSTAGRAM POSTS SECTION -->
        <section class="insta-posts container-fluid">
            <img src="../assets/instagram_img4.jpg" alt="instagram post4" class="single-post">
            <img src="../assets/instagram_img5.jpg" alt="instagram post5" class="single-post">
            <img src="../assets/instagram_img6.jpg" alt="instagram post6" class="single-post">
            <img src="../assets/instagram_img7.jpg" alt="instagram post7" class="single-post">
            <img src="../assets/instagram_img8.jpg" alt="instagram post8" class="single-post">
            <img src="../assets/instagram_img9.jpg" alt="instagram post9" class="single-post">
            <img src="../assets/instagram_img10.jpg" alt="instagram post10" class="single-post">
            <img src="../assets/instagram_img1.jpg" alt="instagram post1" class="single-post">
        </section>
    </main>
</template>
<script>
import AlbumCard from './AlbumCard.vue';
import BlogCard from './BlogCard.vue';
import { store } from '../js/store';

export default {
    name:'AppMain',
    components:{
        AlbumCard,
        BlogCard,
    },
    data() {
        return {
            store
        }
    },
}
</script>
<style lang="scss" scoped>
    .album-section, .blog-section{
        width: 80%;
        margin: 5rem auto;
        h1{
            margin-bottom: 2rem;
        }
    }
    .album-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        .single-album{
            width: calc((100% / 3) - 2rem);
        }
   }
   .blog-container{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 2rem;
    .single-blog{
        width: 30%;
    }
   }
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
        .story-info{
            color: gray;
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
    .new-album-section{
        background-image: url(../assets/cms_parallax.jpg);
        background-position: center;
        background-size: cover;
    }
    .new-album-info{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 2rem;
        padding: 10rem 0rem;
        width: 80%;
        margin: 0 auto;
    }
    .statistics-section{
        display: flex;
        justify-content: space-around;
        padding: 6rem 7.5rem;
        background-image: url(../assets/counter_parallax.jpg);
        background-position: top;
        background-size: cover;
    }
    .statistic{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        img{
            width: 55px;
        }
        p{
            text-transform: uppercase;
        }
    }
    .single-post{
        width: calc(100% / 8);
    }
</style>