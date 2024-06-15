<template>
  <div class="home-container" style="text-align: center">
    <h1 style="font-size: 2em">TUGAS 3</h1>
    <a href="https://tugas3-fedry-223510349.vercel.app/">klik disini TUGAS 3</a>
    <weather-widget />
  </div>
</template>

<script>
import WeatherWidget from "../components/WeatherWidget.vue";

export default {
  name: "Task3",
  components: {
    WeatherWidget,
  },
};
</script>
