<template>
  <div class="home-container" style="text-align: center">
    <h1 style="font-size: 2em">TUGAS 4</h1>
    <a href="https://tugas4-fedry-223510349.vercel.app/">klik disini TUGAS 4</a>
    <weather-widget />
  </div>
</template>

<script>
import WeatherWidget from "../components/WeatherWidget.vue";

export default {
  name: "Task4",
  components: {
    WeatherWidget,
  },
};
</script>
