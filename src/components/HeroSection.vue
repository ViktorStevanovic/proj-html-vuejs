<template>
    <section class="hero-section container-fluid">
        <!-- NAVBAR SECTION -->
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid d-flex justify-content-between">
                <a class="navbar-brand" href="#"><img src="../assets/Logo.png" alt="Lyricsmus main logo"></a>      
                <div class="nav-container">
                    <ul class="navbar-nav gap-5">
                        <li  v-for='link in navLinks' :class="(link.active) ? 'active' : '' || (link.dropdown) ? 'dropdown-toggle dropdown' :'' " :data-bs-toggle="(link.dropdown) ? 'dropdown' :''"> {{ link.name }} </li>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Choral music</a></li>
                            <li><a class="dropdown-item" href="#">Concert Band</a></li>
                            <li><a class="dropdown-item" href="#">Opera concerts</a></li>
                            <li><a class="dropdown-item" href="#">Symphony orchestra</a></li>
                            <li><a class="dropdown-item" href="#">Family concerts</a></li>
                        </ul>
                        <li><svg aria-hidden="true" class="thebase-svg-icon thebase-search2-svg" fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Search</title><path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
			        	</svg>
                        </li>
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
        <section class="jumbo-cards">
            <div class="single-card">
                <div class="my-icon">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" class="smaller-icon" viewBox="0 0 708.98 990.01"><defs></defs><path class="cls-1" d="M34.72,11C22.15,17.36,11.07,31.21,7.24,45.06c-3,10.87-3,889,0,899.9,3.83,13.85,14.91,27.7,27.48,34.09L46,985H663l11.29-6c12.57-6.39,23.65-20.24,27.48-34.09,3-10.87,3-889,0-899.9-3.83-13.85-14.91-27.7-27.48-34.09L663,5H46ZM655.1,49.74c4,2.34,4,9.37,4,445.26s0,442.92-4,445.26c-5.75,3-595.45,3-601.21,0-4-2.34-4-9.38-4-445.26,0-419.48.21-443.13,3.83-445C58.8,47,649.35,46.76,655.1,49.74Z"></path><path class="cls-1" d="M340.65,70.4c-26.43,3.2-49,14.49-69.45,34.73-24.93,24.5-36,50.49-36,84.58,0,52.62,33,97.15,85.22,114.83,8.52,3,17.9,4,34.09,4,34.09,0,60.29-10.65,83.94-34.09a119,119,0,0,0,35.37-85.22c0-34.09-12.14-62.21-37.07-85.64C410.1,78.07,375.16,66.14,340.65,70.4ZM385,119.62c23.22,10.44,42.4,36.64,45.38,62.42,2.55,22.79-9.16,51.77-26.63,65.62-17.47,13.63-24.93,16.19-49.21,16.19s-31.74-2.56-49.21-16.19c-17.48-13.85-29.19-42.82-26.63-65.83,3.41-29.19,25.35-56.24,53-65.19C344.7,112.37,372.17,113.87,385,119.62Z"></path><path class="cls-1" d="M317.22,366.32c-17,2.77-43,10-59.65,16.62C113.76,440.89,51.13,609.4,122.5,746.6c28.33,54.33,77.55,99.06,133.15,121.44,30.89,12.36,54.11,17.26,89.26,18.32,47.93,1.7,85-6.18,125.27-26.2,73.5-36.64,123.35-101.62,141.25-183.43,5.12-23.22,5.12-78.61,0-101.41-22.58-101.84-93.1-176.19-193-203.24-17.47-4.69-25.35-5.54-57.52-6C340.44,365.68,320.84,365.9,317.22,366.32Zm91.6,48.58A216.58,216.58,0,0,1,549.43,530.16c17.68,36.22,21.3,52.2,21.3,95.87,0,31.11-.85,38.78-4.9,54.33-24.07,88.41-97.57,151.69-188.54,162.12C288,852.92,199.61,803.92,159.56,721.9c-17.9-36.43-21.3-52-21.09-96.93,0-44.74,3.2-58.8,20.88-94.8,31.1-63.27,87.56-105.88,158.29-119.3C342.35,406.16,381.77,407.87,408.82,414.9Z"></path><path class="cls-1" d="M333.82,530.15c-37.07,8.1-67.52,38.77-75.41,75.84-4.05,19.17-1.29,42.18,7.24,60.5,17.26,36.43,49.21,56.67,88.84,56.67,73.71,0,119.73-75,87.35-142.1-12.36-25.35-42.83-47.29-72.44-52C352.37,526.53,350.45,526.53,333.82,530.15Zm43.05,46.66c20,9.16,31.53,27.48,31.53,49.21-.21,21.09-9.16,36.43-28.13,47.51-8.31,4.9-12.13,5.75-25.77,5.75-18.75-.21-29.4-4.69-40.48-17.26-9.8-11.08-13.42-21.09-13.42-36s3.62-24.93,13.64-36.22C329.57,572.33,355.77,566.8,376.87,576.81Z"></path></svg>
                </div>
                <h3 class="p-0">Original ideas</h3>
                <p class="p-0">Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.</p>
            </div>
            <div class="single-card">
                <div class="my-icon">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 980"><path d="M490,980C219.8,980,0,760.2,0,490S219.8,0,490,0,980,219.8,980,490,760.2,980,490,980Zm0-919.3C253.3,60.7,60.7,253.3,60.7,490S253.3,919.3,490,919.3,919.3,726.7,919.3,490,726.7,60.7,490,60.7Z"></path><path d="M490,604.2A114.2,114.2,0,1,1,604.2,490,114.29,114.29,0,0,1,490,604.2Zm0-167.7a53.4,53.4,0,1,0,53.4,53.4A53.45,53.45,0,0,0,490,436.5Z"></path><path d="M135.4,524.8c-8.1,0-14.8-7.8-15.2-15.9-.3-5.8-.4-12.3-.4-18.2A15.45,15.45,0,0,1,135,475.2a15,15,0,0,1,15.2,15c0,5.4.1,12.1.4,17.4.4,8.4-6.1,17.2-14.5,17.2Z"></path><path d="M315.2,814.2a14.82,14.82,0,0,1-7.5-2c-97.1-55.1-163.6-149.5-182.5-259.1a15.17,15.17,0,0,1,29.9-5.1c17.3,100.6,78.4,187.2,167.6,237.8a15.2,15.2,0,0,1-7.5,28.4Z"></path><path d="M293.4,690a15.06,15.06,0,0,1-10.8-4.5,242.21,242.21,0,0,1-69.9-170.8,15.2,15.2,0,1,1,30.4,0,211.93,211.93,0,0,0,61.2,149.5,15.18,15.18,0,0,1-.2,21.5A15.38,15.38,0,0,1,293.4,690Z"></path><path d="M343.8,728.8a15.9,15.9,0,0,1-7.5-2c-4.9-2.8-9.7-5.7-14.4-8.9a15.17,15.17,0,1,1,16.9-25.2c4.1,2.7,8.3,5.3,12.6,7.7a15.2,15.2,0,0,1,5.7,20.7A15.48,15.48,0,0,1,343.8,728.8Z"></path><path d="M364.3,640.2a14.82,14.82,0,0,1-7.5-2,122.62,122.62,0,0,1-62.1-106.5,15.2,15.2,0,0,1,30.4,0,92.2,92.2,0,0,0,46.7,80.1,15.2,15.2,0,0,1-7.5,28.4Z"></path><path d="M836.5,530.7a10.87,10.87,0,0,1-1.8-.1,15.2,15.2,0,0,1-13.3-16.9c14.3-121.5-38-241.9-136.4-314.1a15.13,15.13,0,1,1,17.9-24.4A371.28,371.28,0,0,1,851.5,517.4,15,15,0,0,1,836.5,530.7Z"></path><path d="M750.7,503.2a10.87,10.87,0,0,1-1.8-.1,15.2,15.2,0,0,1-13.3-16.9A214,214,0,0,0,650,289a15.13,15.13,0,1,1,17.9-24.4,244.41,244.41,0,0,1,97.8,225.2A15.13,15.13,0,0,1,750.7,503.2Z"></path><path d="M667.2,467.2a10.87,10.87,0,0,1-1.8-.1,15.2,15.2,0,0,1-13.3-16.9,92.16,92.16,0,0,0-36.9-85,15.13,15.13,0,1,1,17.9-24.4,122.62,122.62,0,0,1,49.1,113.1A15,15,0,0,1,667.2,467.2Z"></path></svg>                    
                </div>
                <h3 class="p-0">Music Studio</h3>
                <p class="p-0">Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.</p>
            </div>
            <div class="single-card">
                <div class="my-icon">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 980"><path d="M238.2,770.2H154.3C69.2,770.2,0,701,0,615.9v-42c0-85.1,69.2-154.3,154.3-154.3h83.9A28.38,28.38,0,0,1,266.6,448V741.7A28.4,28.4,0,0,1,238.2,770.2ZM154.3,476.4a97.56,97.56,0,0,0-97.5,97.5v42a97.56,97.56,0,0,0,97.5,97.5h55.6v-237Z"></path><path d="M825.7,770.2H741.8a28.38,28.38,0,0,1-28.4-28.4V448a28.38,28.38,0,0,1,28.4-28.4h83.9c85.1,0,154.3,69.2,154.3,154.3v42C980,701,910.8,770.2,825.7,770.2Zm-55.5-56.8h55.5a97.56,97.56,0,0,0,97.5-97.5v-42a97.56,97.56,0,0,0-97.5-97.5H770.2Z"></path><path d="M115.7,482.7a28.42,28.42,0,0,1-28-23.9A333.57,333.57,0,0,1,84,406C83.9,182.2,266.1,0,490,0S896.1,182.2,896.1,406.1a334.91,334.91,0,0,1-3.7,52.7,28.4,28.4,0,0,1-56.1-8.9,283.31,283.31,0,0,0,3-43.8C839.3,213.5,682.6,56.8,490,56.8S140.7,213.5,140.7,406.1c0,17,.9,31,3,43.8a28.38,28.38,0,0,1-23.5,32.5A36.39,36.39,0,0,1,115.7,482.7Z"></path><path d="M490,980c-82.4,0-112.3-67.2-112.3-112.3S407.6,755.4,490,755.4s112.3,67.2,112.3,112.3a121.38,121.38,0,0,1-9.1,45.2C724.9,884.3,786.3,801.6,814.9,730a28.38,28.38,0,0,1,52.7,21.1C825.9,855.5,726.6,980,490,980Zm0-167.9c-52.9,0-55.6,46.3-55.6,55.5.2,12.9,4.8,55.6,55.6,55.6,52.9,0,55.6-46.3,55.6-55.6C545.4,854.8,540.7,812.1,490,812.1Z"></path></svg>
                </div>
                <h3 class="p-0">Acoustic Covers</h3>
                <p class="p-0">Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.</p>
            </div>
        </section>
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
                    active: false,
                    dropdown: true
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
                    active: false,
                    dropdown: true
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    .hero-section{
        position: relative;
    }
    .nav-container{
        position: relative;
    }
    nav{
        text-transform: uppercase;
        padding: 1rem;
        li{
            cursor: pointer;
            &:hover{
                color: $orange;
                }
        }
        img{
            width: 85%;
        }
        li svg{
            &:hover{
                fill: $orange;
                }
        }
        .active{
            color: $orange;
        }
        .dropdown-menu{
            background-color: #1F1F1F;
            position: absolute;
            top: 180%;
            width: 300px;
            padding: .25rem;
            cursor: pointer;
            li a{
                color: $white;
                border-bottom: 1px solid gray;
                padding: 1rem;
                &:hover{
                    background-color: $orange;
                }
            }
            li:last-child a{
                border: none;
            }
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
        padding-bottom: 25rem;
        background-position: center;
        background-size: cover;
        text-transform: uppercase;

        h1{
            font-size: 5rem;
            font-weight: 500;
        }

    }
    .jumbo-cards{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        gap: 2rem;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        svg{
            width: 65%;
            // margin-bottom: 2rem;
            fill: white;
        }
        .smaller-icon{
            width: 50%;
        }
        .my-icon{
            width: 150px;
            height: 150px;
            margin-bottom: 2rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            &:hover {
                box-shadow: 0 0 40px $orange;
                svg{
                    fill: $orange;
            }
            }
        }
        h3{
            text-transform: uppercase;
            font-size: 1.4rem;
        }
        p{
            color: gray;
        }
        .single-card{
            width: 450px;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            text-align: center;
            padding: 0rem 5rem;
            background-color: #121212;
        }
    }
</style>