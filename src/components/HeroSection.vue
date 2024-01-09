<template>
    <section class="hero-section">
        <!-- NAVBAR SECTION -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid d-flex justify-content-between">
                <a class="navbar-brand" href="#"><img src="../assets/Logo.png" alt="Lyricsmus main logo"></a>      
                <div>
                    <ul class="navbar-nav gap-5">
                        <li v-for='link in navLinks' :class="(link.active) ? 'active' : ''">{{ link.name }} </li>
                        <li><img src="../assets/image (8).svg" alt="search icon"></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- JUMBOTRON SECTION -->
        <div class="jumbo-class">
            <p class="m-0 my-subtitle">Instrumental rock</p>
            <h1 class="m-0">Music in this video</h1>
            <button class="my-button">Read more</button>
        </div>
        <!-- CARDS SECTION -->
    </section>
</template>
<script>
export default {
    name:'HeroSection',
    data() {
        return {
            navLinks: [
                {
                    name: 'Home',
                    url: '#',
                    active: true
                },
                {
                    name: 'Blog',
                    url: '#',
                    active: false
                },
                {
                    name: 'Events',
                    url: '#',
                    active: false
                },
                {
                    name: 'Gallery',
                    url: '#',
                    active: false
                },
                {
                    name: 'About us',
                    url: '#',
                    active: false
                },
                {
                    name: 'Contacts us',
                    url: '#',
                    active: false
                },
                {
                    name: 'Shop',
                    url: '#',
                    active: false
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    nav{
        text-transform: uppercase;
        img{
            width: 85%;
        }
        li img{
            width: 100%;
        }
        .active{
            color: $orange;
        }
    }
    .jumbo-class{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-image: url(../assets/jumbo.png);
        gap: 3rem;
        padding-top: 10rem;
        padding-bottom: 15rem;
        background-position: center;
        background-size: cover;
        text-transform: uppercase;

        h1{
            font-size: 4rem;
        }

    }
</style>