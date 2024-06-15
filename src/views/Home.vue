<template>
  <div class="home-container">
    <h1 style="font-size: 2em">Prakiraan Cuaca Hari Ini</h1>
    <WeatherWidget />
  </div>
</template>

<script>
import WeatherWidget from "../components/WeatherWidget.vue";

export default {
  name: "Home",
  components: {
    WeatherWidget,
  },
};
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5em;
}
</style>
