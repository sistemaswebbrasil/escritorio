<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from "./AppBar.vue";
</script>
