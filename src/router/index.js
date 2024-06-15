import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Task1 from "../views/Task1.vue";
import Task2 from "../views/Task2.vue";
import Task3 from "../views/Task3.vue";
import Task4 from "../views/Task4.vue";
import Task5 from "../views/Task5.vue";
import Task6 from "../views/Task6.vue";
import Task7 from "../views/Task7.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/task1", component: Task1 },
  { path: "/task2", component: Task2 },
  { path: "/task3", component: Task3 },
  { path: "/task4", component: Task4 },
  { path: "/task5", component: Task5 },
  { path: "/task6", component: Task6 },
  { path: "/task7", component: Task7 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
