// import axios from "axios";
import { useSnackbarStore } from "@/stores/snackbarStore";
import instance from '@/api/mainApi';

// const instance = axios.create({
//   baseURL: `${import.meta.env.VITE_BASE_API}/api`,
//   timeout: 20000,
// });

// instance.interceptors.request.use(
//   (defaults) => {
//     const config = defaults;
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (errors) => Promise.reject(errors)
// );

interface Person {
  id: string;
  name: string;
}

export const listPersons = async (): Promise<Person[]> => {
  const { data } = await instance.get("/persons");
  return data;
};

export const createPerson = async (formData: Person) => {
  const snackbarStore = useSnackbarStore();
  try {
    const response = await instance.post("/persons", formData);
    const { data } = response;
    snackbarStore.showSuccessMessage("Criado com sucesso");
    return data;
  } catch (error) {
    snackbarStore.showErrorMessage(error.message, null);
    return Promise.reject(error);
  }
};

export const updatePerson = async (id: Number, form: Person) => {
  const snackbarStore = useSnackbarStore();
  try {
    const response = await instance.put(`/persons/${id}`, form);
    const { data } = response;
    snackbarStore.showSuccessMessage("Atualizado com sucesso");
    return data;
  } catch (error) {
    snackbarStore.showErrorMessage(error, null);
    return error;
  }
};

export const deletePerson = async (id: Number) => {
  const snackbarStore = useSnackbarStore();

  const response = await instance.delete(`/persons/${id}`);
  const { data } = response;
  snackbarStore.showSuccessMessage("Excluido com sucesso");
  return data;
};
