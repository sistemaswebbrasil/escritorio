import { defineStore } from "pinia";
import { login } from "~/src/api/mainApi";

import router from "@/router";

interface Profile {
  id: string;
  name: string;
  avatar: string;
  created: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    user: null,
    profile: null as Profile | null,
  }),

  persist: {
    enabled: true,
    strategies: [
      { storage: localStorage, paths: ["isLoggedIn"] },
      // { storage: sessionStorage, paths: ["profile"] }
    ],
  },

  getters: {},

  actions: {
    setLoggedIn(payload: boolean) {
      this.isLoggedIn = payload;
    },

    registerWithEmailAndPassword(email: string, password: string) {
      router.push("/");
    },

    async loginWithEmailAndPassword(email: string, password: string) {
      try {
        const response = await login({ email, password });
        console.log("?????????????????????");
        console.log(response);
        return response;
      } catch (error) {
        return error;
      }
      // localStorage.setItem("user", "Usuário Temporário");
      // router.push("/");
    },

    loginWithGoogle() {
      router.push("/");
    },

    logout() {
      router.push({ name: "auth-signin" });
    },
  },
});
