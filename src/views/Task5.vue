<template>
  <div class="home-container" style="text-align: center">
    <h1 style="font-size: 2em">TUGAS 5</h1>
    <a href="https://tugas5-fedry-223510349fx3zt.vercel.app/"
      >klik disini TUGAS 5</a
    >
    <weather-widget />
  </div>
</template>

<script>
import WeatherWidget from "../components/WeatherWidget.vue";

export default {
  name: "Task5",
  components: {
    WeatherWidget,
  },
};
</script>
