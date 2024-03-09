<script setup lang="ts">
import {
  listPersons,
  createPerson,
  updatePerson,
  deletePerson,
} from "./PersonApiService";

import { Ref } from "vue";

interface Person {
  id: string;
  name: string;
}

const rows: Ref<Person[] | undefined> = ref([]);

const loadData = async () => {
  const data: Person[] = await listPersons();
  if (data) {
    rows.value = data;
  }
};

onMounted(() => {
  loadData();
});

const dialog = ref(false);
const search = ref("");
const editedIndex = ref(-1);
const refForm = ref();

const editedItem = ref({
  id: "",
  name: "",
});

const defaultItem = ref({
  id: "",
  name: "",
});

const nameRules = [
  (v) => !!v || "Name is required",
  (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
];

//Methods
// const filteredList = computed(() => {
//   return desserts.value.filter((user: any) => {
//     return user.username.toLowerCase().includes(search.value.toLowerCase());
//   });
// });

function editItem(item: Person) {
  if (rows.value) {
    console.log(item);
    editedIndex.value = rows.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialog.value = true;
  }
}

function close() {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
}

const create = async () => {
  try {
    await createPerson(editedItem.value);
     loadData();
     close();
     rows.value && rows.value.push(editedItem.value);
  } catch (error) {
    console.log("Deu erro");
  } finally{
    console.log("fim");
  }
};

const update = async () => {
  try {
    await updatePerson(Number(editedItem.value.id), editedItem.value);
    close();
    loadData();
  } catch (error) {}
};

function save() {
  if (editedIndex.value > -1) {
    rows.value &&
      Object.assign(rows.value[editedIndex.value], editedItem.value);
    update();
  } else {
    create();
  }
}

const remove = async (id) => {
  console.log(editedItem.value);
  try {
    await deletePerson(Number(id));
    close();
    // loadData();
  } catch (error) {}
};

function deleteItem(item: Person) {
  if (rows.value) {
    console.log(item);
    const index = rows.value.indexOf(item);
    confirm("Are you sure you want to delete this item?") &&
      rows.value.splice(index, 1);
    remove(item.id);
    ``;
  }
}

watch(
  () => editedItem.value.name,
  (name) => {
    if (name) {
      editedItem.value.name = name.toUpperCase();
    }
  }
);

//Computed Property
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "New Person" : "Edit Person";
});
</script>
<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12" lg="4" md="6">
            <v-text-field
              density="compact"
              v-model="search"
              label="Search Contacts"
              hide-details
              variant="outlined"
              color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="8" md="6" class="text-right">
            <v-dialog v-model="dialog" max-width="700">
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props" flat class="ml-auto">
                  <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>Add
                  Person
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="pa-4 bg-secondary">
                  <span class="title text-white">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-form
                    class="mt-5"
                    ref="form"
                    v-model="refForm"
                    lazy-validation
                  >
                    <v-row >
                      <v-col cols="12" v-if="editedItem.id">
                        <v-text-field
                          variant="outlined"
                          color="primary"
                          density="compact"
                          v-model="editedItem.id"
                          label="Id"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          variant="outlined"
                          color="primary"
                          density="compact"
                          :rules="nameRules"
                          :counter="10"
                          required
                          v-model="editedItem.name"
                          label="Name"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="pa-4">
                  <v-spacer></v-spacer>
                  <v-btn color="error" @click="close">Cancel</v-btn>
                  <v-btn
                    color="secondary"
                    :disabled="
                      editedItem.name == ''
                    "
                    variant="flat"
                    @click="save"
                    >Save</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mt-2">
      <v-table class="mt-5">
        <thead>
          <tr>
            <th class="text-subtitle-1 font-weight-semibold">Id</th>
            <th class="text-subtitle-1 font-weight-semibold">Name</th>
            <th class="text-subtitle-1 font-weight-semibold">Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="text-body-1">
          <tr v-for="item in rows" :key="item.id">
            <td class="font-weight-bold">{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>
              <div class="d-flex align-center">
                <v-tooltip text="Edit">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="blue"
                      icon
                      variant="text"
                      @click="editItem(item)"
                      v-bind="props"
                    >
                      <v-icon>mdi-pencil-outline</v-icon>
                      <!-- <img
                        width="26"
                        src="https://img.icons8.com/fluency/48/null/edit.png"
                    /> -->
                    </v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip text="Delete">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon
                      variant="text"
                      @click="deleteItem(item)"
                      v-bind="props"
                      color="error"
                    >
                      <v-icon>mdi-delete-outline</v-icon>
                      <!-- <img
                        width="26"
                        src="https://img.icons8.com/fluency/48/null/filled-trash.png"
                    /> -->
                    </v-btn>
                  </template>
                </v-tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>
