<template >
    <article class="blog-card">
        <img :src="blog.thumb" alt="">
        <h3 class="m-0">{{ blog.title }}</h3>
        <p class="m-0 date-text">{{ blog.date }}</p>
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