import { enMessages } from "@/locales/en";
import { defineStore } from "pinia";

type MessageType = "" | "info" | "success" | "error" | "warning";

export const useSnackbarStore = defineStore({
  id: "snackbarStore",
  state: () => ({
    isShow: false,
    message: "",
    messages: [],
    type: "",
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: [""] }],
  },

  getters: {},
  actions: {
    showMessage(message) {
      this.isShow = true;
      this.message = message;
      this.type = "";
    },

    showErrorMessage(message, messages) {
      this.isShow = true;
      this.message = message;
      this.messages = messages;
      this.type = "error";
    },
    showSuccessMessage(message) {
      this.isShow = true;
      this.message = message;
      this.type = "success";
    },
    showInfoMessage(message) {
      this.isShow = true;
      this.message = message;
      this.type = "info";
    },
    showWarningMessage(message) {
      this.isShow = true;
      this.message = message;
      this.type = "warning";
    },
  },
});
