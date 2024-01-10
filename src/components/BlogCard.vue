<template >
    <article class="blog-card">
        <img :src="blog.thumb" alt="">
        <h3 class="m-0">{{ blog.title }}</h3>
        <p class="m-0 date-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
            </svg>
            {{ blog.date }}
        </p>
        <p class="m-0">{{ blog.info }}</p>
        
    </article>
</template>
<script>
export default {
    name: 'BlogCard',
    props:{
        blog:{
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    .blog-card{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .75rem;
        img{
            width: 100%;
        }
        .date-text{
            color: $orange;
            line-height: 21px;
        }
        h3{
            font-size: 1.2rem;
            text-transform: uppercase;
        }
        p{
            font-size: .9rem;
            color: gray;
        }
    }
</style>