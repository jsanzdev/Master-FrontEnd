import { createPersistedState } from "pinia-plugin-persistedstate";
import { defineNuxtPlugin } from "#app";
import type { Pinia } from "pinia";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = nuxtApp.$pinia as Pinia;
  pinia.use(createPersistedState());
});
