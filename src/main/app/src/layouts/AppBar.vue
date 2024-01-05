<template>
  <v-app-bar>
    <v-app-bar-title>
      <router-link
        :to="{ name: 'home' }"
        style="text-decoration: none; color: inherit"
      >
        Application
      </router-link>
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-home" to="/" :exact="true"></v-btn>

      <v-btn icon="mdi-help" to="/about"></v-btn>

      <v-btn icon="mdi-account-multiple" to="/contact"></v-btn>

      <v-btn icon="mdi-key" to="/login"></v-btn>
    </template>
  </v-app-bar>
</template>
