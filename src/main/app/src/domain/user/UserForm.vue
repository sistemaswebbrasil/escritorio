<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

import { register } from "~/src/api/mainApi";

const schema = yup.object({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(6).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required()
    .label("Password confirmation"),
  terms: yup
    .boolean()
    .required()
    .oneOf([true], "You must agree to terms and conditions"),
});

const { defineField, handleSubmit, resetForm } = useForm({
  validationSchema: schema,
});

import { useRouter } from "vue-router";
const router = useRouter();

// Refer to the docs for how to make advanced validation behaviors with dynamic configs
// TODO: Add link
const vuetifyConfig = (state) => ({
  props: {
    "error-messages": state.errors,
  },
});

const [name, nameProps] = defineField("name", vuetifyConfig);
const [email, emailProps] = defineField("email", vuetifyConfig);
const [password, passwordProps] = defineField("password", vuetifyConfig);
const [passwordConfirm, confirmProps] = defineField(
  "passwordConfirm",
  vuetifyConfig
);
const [terms, termsProps] = defineField("terms", vuetifyConfig);

const create = async (form) => {
  try {
    await register({
      email: form.email,
      name: form.name,
      password: form.password,
    });
    router.push({ name: "UserList" });
  } catch (error) {}
};

const onSubmit = handleSubmit((values) => {
  console.log("Submitted with", values);
  create(values);
});
</script>

<template>
  <v-card class="ma-5 pa-5 pa-5">
    <v-row class="mb-1">
      <v-col cols="12">
        <h1>New User</h1>
      </v-col>
    </v-row>
    <v-form @submit="onSubmit" class="px-4">
      <v-text-field v-model="name" v-bind="nameProps" label="Name" />
      <v-text-field
        v-model="email"
        v-bind="emailProps"
        label="Email"
        type="email"
      />
      <v-text-field
        v-model="password"
        v-bind="passwordProps"
        label="Password"
        type="password"
      />
      <v-text-field
        v-model="passwordConfirm"
        v-bind="confirmProps"
        label="Password confirmation"
        type="password"
      />

      <v-checkbox
        v-model="terms"
        v-bind="termsProps"
        label="Do you agree?"
        color="primary"
      />

      <v-btn color="primary" type="submit"> Submit </v-btn>
      <v-btn color="outline" class="ml-4" @click="resetForm()"> Reset </v-btn>
    </v-form>
  </v-card>
</template>
