<template>
  <v-app>
    <v-main>
      <v-container>
        <v-sheet width="300" class="mx-auto">
          <v-form ref="form">
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-select
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              label="Item"
              required
            ></v-select>

            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>

            <div class="d-flex flex-column">
              <v-btn color="success" class="mt-4" block @click="validate">
                Validate
              </v-btn>

              <v-btn color="error" class="mt-4" block @click="reset">
                Reset Form
              </v-btn>

              <v-btn
                color="warning"
                class="mt-4"
                block
                @click="resetValidation"
              >
                Reset Validation
              </v-btn>
            </div>
          </v-form>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const form = ref();

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const name = ref("");
const nameRules = ref([
  (v) => !!v || "Name is required",
  (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
]);
const select = ref(null);
const checkbox = ref(false);

async function validate() {
  const { valid } = await form.value.validate();

  if (valid) alert("Form is valid");
}
function reset() {
  form.value.reset();
}
function resetValidation() {
  form.value.resetValidation();
}
</script>
