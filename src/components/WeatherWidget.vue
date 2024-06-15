<template>
  <div class="search-container">
    <div class="weather-container">
      <input
        type="text"
        placeholder="Cari Lokasi Suhu..."
        class="search-input"
        v-model="city"
      />
      <button class="search-button" @click="searchWeather">Cari</button>
    </div>
    <div v-if="weatherData" class="temperature-container">
      <div class="temperature">
        <div class="city-name">{{ city }}</div>
        <div class="temperature-value">
          {{ Math.round(weatherData.main.temp) }}
        </div>
        <div class="degree">°C</div>
      </div>
      <div class="description">{{ weatherData.weather[0].description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "", // variabel untuk menyimpan nama kota
      weatherData: null, // variabel untuk menyimpan data cuaca
    };
  },
  methods: {
    async searchWeather() {
      try {
        // Membuat URL untuk mengakses data cuaca berdasarkan kota yang dimasukkan
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=94bf6d59f86ae95e8071e78240546056&units=metric`;

        // Melakukan permintaan ke server untuk mendapatkan data cuaca
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Menyimpan data cuaca dalam variabel weatherData
        this.weatherData = data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-container {
  margin-top: 20px;
}

.search-input {
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  width: 200px;
  font-size: 16px;
}

.search-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background-color: #0056b3;
}

.temperature-container {
  margin-top: 20px;
}

.temperature {
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #007bff;
}

.city-name {
  margin-right: 10px;
}

.temperature-value {
  font-weight: bold;
}

.degree {
  margin-left: 5px;
}

.description {
  margin-top: 10px;
  font-size: 16px;
}
</style>
