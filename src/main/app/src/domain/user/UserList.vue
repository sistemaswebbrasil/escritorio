<script setup lang="ts">
import { Ref } from "vue";
import { listUsers } from "~/src/api/mainApi";

const rows = ref([]);

const search = ref("");

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
    <v-row>
      <v-col cols="12" lg="4" md="6">
        <v-text-field
          density="compact"
          v-model="search"
          label="Search Users"
          hide-details
          variant="outlined"
          color="primary"
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="8" md="6" class="text-right">
        <v-btn color="primary" flat class="ml-auto" :to="{ name: 'UserForm' }">
          <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>Add User
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table :items="rows"></v-data-table>
  </v-card>
</template>
