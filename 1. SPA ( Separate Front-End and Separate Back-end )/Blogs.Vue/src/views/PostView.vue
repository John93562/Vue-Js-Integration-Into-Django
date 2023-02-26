<template>
  <div id="title">
    <p>{{ post.title }}</p>
    <img :src="post.imagePath" width="80" />
  </div>

  <div id="post-content">
    <p>
      {{ post.description }}
    </p>
  </div>
  <squirrelLogs />
</template>

<script>
import axios from "axios";
import squirrelLogs from "../components/Squirrel-Logs.vue";
export default {
  name: "PostApp",
  props: ["slug_title"],
  components: {
    squirrelLogs,
  },
  data() {
    return {
      post: {},
    };
  },
  created() {
    axios.get("http://localhost:8000/" + this.slug_title).then((response) => {
      // handle success
      this.post = response.data;
    });
  },
};
</script>

<style scoped>
@import "../assets/post.css";
</style>
