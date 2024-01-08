<template>
    <section class="hero-section">
        <!-- NAVBAR SECTION -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid d-flex justify-content-between">
                <a class="navbar-brand" href="#">Navbar</a>      
                <div>
                    <ul class="navbar-nav gap-3">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li> 
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact us</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li >
                            <img src="../assets/image(8).svg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- JUMBOTRON SECTION -->
        <div class="jumbo-class">
            <p class="m-0">Instrumental rock</p>
            <h1 class="m-0">Music in this video</h1>
            <button>Read more</button>
        </div>
        <!-- CARDS SECTION -->
        s
    </section>
</template>
<script>
export default {
    name:'HeroSection',
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    nav{
        text-transform: uppercase;
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
        color: $white;
        p{
            color: $orange;
        }

    }
</style>