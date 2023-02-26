<template>
  <squirrel-header />

  <p>{{ mydata }}</p>
  <p id="main-title">Squirrel.js</p>

  <div id="big-section">
    <p>Everything Begins With you</p>
    <p>Join the Framework to Understand your Power</p>

    <div id="big-section-bottom-bar">
      <p>Learn More</p>
    </div>
  </div>

  <div id="our-news">
    <div id="our-news-header">
      <div>
        <img src="../../public./../public/images/nut.svg" width="40" />
        <p>Our News</p>
      </div>
    </div>

    <div id="posts-wrapper">
      <div
        v-for="post in posts"
        :key="post"
        class="post"
        @click="navigateToPost(post.slug_title)"
      >
        <div class="post-header">
          <p>{{ post.title }}</p>
        </div>

        <div class="post-img-container">
          <img :src="post.imagePath" width="100" />
        </div>

        <div class="post-small-content">
          <p>
            {{ post.short_description }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <squirrelLogs />
</template>

<script>
import axios from "axios";
import squirrelHeader from "../components/Squirrel-Header.vue";
import squirrelLogs from "../components/Squirrel-Logs.vue";
export default {
  name: "IndexApp",
  methods: {
    navigateToPost(slug) {
      console.log(slug);
      this.$router.push({ name: "post", params: { slug_title: slug } });
    },
  },
  components: {
    squirrelHeader,
    squirrelLogs,
  },
  data() {
    return {
      posts: "",
    };
  },
  created() {
    axios.get("http://localhost:8000/").then((response) => {
      // handle success
      console.log(response);
      this.posts = response.data;
    });
  },
};
</script>

<style scoped>
@import "../assets/index.css";
</style>
