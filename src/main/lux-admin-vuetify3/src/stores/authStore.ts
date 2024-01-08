import { profile } from './../api/mainApi';
import { defineStore } from "pinia";
import { login,getProfile } from "~/src/api/mainApi";

import router from "@/router";

interface Profile {
  id: string;
  name: string;
  email: string;
  roles: string[];
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
        const { data } = await login({ email, password });
        const { name, token } = data;
        localStorage.setItem("user", name);
        localStorage.setItem("token", token);
        console.log(data);
        router.push("/");
        return data;
      } catch (error) {
        return error;
      }
    },

    async getProfile() {
      try {
        const  data = await getProfile() ;
        this.user  = data.email;
        this.setLoggedIn(true)
        this.profile = data
        return data;
      } catch (error) {
        this.logout();
      }
    },

    loginWithGoogle() {
      router.push("/");
    },

    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push({ name: "auth-signin" });
    },
  },
});
