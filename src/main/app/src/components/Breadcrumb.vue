<template>
  <v-breadcrumbs
    v-if="breadcrumbs.length > 0"
    :items="breadcrumbs"
    class="ml-n3 text-body-2"
  >
    <template v-slot:title="{ item }">
      {{ $t(item.title) }}
    </template>
    <!-- <template v-slot:prepend>
      <v-icon size="small" icon="mdi-vuetify" color="blue"></v-icon>
    </template> -->
  </v-breadcrumbs>
</template>

<script setup lang="ts">
const route = useRoute();
import { useI18n } from "vue-i18n";

const breadcrumbs = ref<any>([]);
const i18 = useI18n();

watchEffect(() => {
  // if you go to the redirect page, do not update the breadcrumbs
  //   if (route.path.startsWith('/redirect/')) {
  //     return
  //   }
  if (route.meta && route.meta.title) {
    breadcrumbs.value = [
      {
        title: i18.t(String(route.meta.category)),
        disabled: false,
        to: "/",
      },
      { title: i18.t(String(route.meta.title)), disabled: true },
    ];
    if (route.meta.links) {
      breadcrumbs.value = route.meta.links;
    }
  } else {
    breadcrumbs.value = [];
  }
});
</script>
