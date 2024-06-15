<template>
  <div class="home-container" style="text-align: center">
    <h1 style="font-size: 2em">TUGAS 1</h1>
    <a href="https://fedryfaurrozyprofile.vercel.app/">klik disini TUGAS 1</a>
    <weather-widget />
  </div>
</template>

<script>
import WeatherWidget from "../components/WeatherWidget.vue";

export default {
  name: "Task1",
  components: {
    WeatherWidget,
  },
};
</script>
