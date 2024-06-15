<template>
  <div class="navbar">
    <router-link to="/">BERANDA</router-link>
    <router-link to="/task1">TUGAS 1</router-link>
    <router-link to="/task2">TUGAS 2</router-link>
    <router-link to="/task3">TUGAS 3</router-link>
    <router-link to="/task4">TUGAS 4</router-link>
    <router-link to="/task5">TUGAS 5</router-link>
    <router-link to="/task6">TUGAS 6</router-link>
    <router-link to="/task7">TUGAS 7</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  overflow: hidden;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>
