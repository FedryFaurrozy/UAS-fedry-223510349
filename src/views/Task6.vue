<template>
  <div class="home-container" style="text-align: center">
    <h1 style="font-size: 2em">TUGAS 6</h1>
    <a href="https://tugas6-fedry-223510349.vercel.app/">klik disini TUGAS 6</a>
    <weather-widget />
  </div>
</template>

<script>
import WeatherWidget from "../components/WeatherWidget.vue";

export default {
  name: "Task6",
  components: {
    WeatherWidget,
  },
};
</script>
