<template>
  <div class="home-container" style="text-align: center">
    <h1 style="font-size: 2em">TUGAS 2</h1>
    <a href="https://tugas2-fedry-223510349.vercel.app/">klik disini TUGAS 2</a>
    <weather-widget />
  </div>
</template>

<script>
import WeatherWidget from "../components/WeatherWidget.vue";

export default {
  name: "Task2",
  components: {
    WeatherWidget,
  },
};
</script>
