<script setup lang="ts">
import { Ref } from "vue";
import { listUsers } from "~/src/api/mainApi";

const rows = ref([]);

const loadData = async () => {
  rows.value = await listUsers();
};

onMounted(() => {
  nextTick(() => {
    loadData();
  });
});
</script>

<template>
  <v-card class="ma-5 pa-5">
    <v-data-table :items="rows"></v-data-table>
  </v-card>
</template>
