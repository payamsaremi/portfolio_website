<template>
<div class="main">
    <div class="wrapper">
        <div class="container">
            <h2 class="heading">{{ data.title }}</h2>
            <p>{{ data.description }}</p>
        </div>
        <div>
            <div class="gallery">
            <div v-for="item in data.images" :key="item.id">
                <img class="image" :src="item.image" alt="">
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    // transition:'slide-fade',
    async asyncData({ $axios, params }) {
    const data = await $axios.$get(`api/v1/projects/${params.post}`)
    console.log(data)
    return { data }
  },
}
</script>

<style scoped>
.main {
    height: 50vh;
    margin: 6rem 6rem auto;
    justify-content: center;
    align-items: center;
}
@media only screen and (max-width: 600px) {
 .main {
    margin-left: 0;
    margin-right: 0;
    margin: 0;
}
}
.wrapper {
    color: white;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: rgb(0, 0, 0);
    font-family: "Raleway";
    box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0;
}
@media only screen and (max-width: 600px) {
.wrapper {
    display: block;
} }
.container {
    margin: 2rem;
    
}
.heading {
    font-family: "Raleway", sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 2rem;
    text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
    margin-bottom: 1rem;
}
.description {
    font-family: inherit;
    width: 200px;
    height: auto;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-end;
    align-items: center;
}
.image {
    padding: 1rem;
    width: 300px;
    height: 300px;
    object-fit: cover;
}
@media only screen and (max-width: 750px) {
 .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
}
.card {
    width: 300px;
    height: 300px;
}

</style>