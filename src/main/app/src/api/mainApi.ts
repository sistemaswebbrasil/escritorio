import axios from "axios";
import { useSnackbarStore } from "@/stores/snackbarStore";
import i18n from "@/plugins/i18n";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API}/api`,
  timeout: 20000,
});

instance.interceptors.request.use(
  (defaults) => {
    const config = defaults;
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (errors) => Promise.reject(errors)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const snackbarStore = useSnackbarStore();
    if (error.response) {
      const data = error.response.data;
      let message = data.message;
      if (data.errors) {
        const arr = Object.keys(data.errors).map((k) => {
          return { key: k, data: data.errors[k] };
        });

        const messages = arr.map((e) => {
          return `${e.key}:  ${e.data} `;
        });

        snackbarStore.showErrorMessage(message, messages);
      } else snackbarStore.showErrorMessage(message || error.message, []);
    } else {
      snackbarStore.showErrorMessage("Network Error", null);
    }
    return Promise.reject(error);
  }
);

export const login = async (formData: any) => {
  const snackbarStore = useSnackbarStore();
  try {
    const response = await instance.post("/auth/token", formData);
    const { data } = response;
    const username = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    snackbarStore.showSuccessMessage(
      i18n.global.t("login.welcome", { username })
    );
    return response;
  } catch (error) {
    snackbarStore.showErrorMessage(String(i18n.global.t("login.error")), null);
    return error;
  }
};

interface Profile {
  id: string;
  name: string;
  email: string;
  roles: string[];
}

interface Role {
  id: string;
  name: string;
  description: string;
}

export const getProfile = async (): Promise<Profile> => {
  const { data } = await instance.get("/auth/profile");
  return data;
};

export const listUsers = async (): Promise<Profile> => {
  const { data } = await instance.get("/admin/users");
  return data;
};

export const listRoles = async (): Promise<Role[]> => {
  const { data } = await instance.get("/roles");
  return data;
};

export const createRole = async (formData: Role) => {
  const snackbarStore = useSnackbarStore();
  try {
    const response = await instance.post("/roles", formData);
    const { data } = response;
    snackbarStore.showSuccessMessage("Criado com sucesso");
    return data;
  } catch (error) {
    snackbarStore.showErrorMessage(error, null);
    return error;
  }
};

export const updateRole = async (id: Number, form: Role) => {
  const snackbarStore = useSnackbarStore();
  try {
    const response = await instance.put(`/roles/${id}`, form);
    const { data } = response;
    snackbarStore.showSuccessMessage("Atualizado com sucesso");
    return data;
  } catch (error) {
    snackbarStore.showErrorMessage(error, null);
    return error;
  }
};

export const deleteRole = async (id: Number) => {
  const snackbarStore = useSnackbarStore();
  // try {
  const response = await instance.delete(`/roles/${id}`);
  const { data } = response;
  snackbarStore.showSuccessMessage("Excluido com sucesso");
  return data;
  // } catch (error) {
  //   console.log(error);
  //   snackbarStore.showErrorMessage(error, null);
  //   return error;
  // }
};

interface Query {
  page?: number;
  per_page?: number;
}

// List photos 图片一览
export const getPhotosApi = (query?: Query) => {
  return instance.get("/photos/", { params: query });
};

// Get a photo 获取图片信息
export const getPhotoApi = (id: string) => {
  return instance.get("/photos/" + id);
};

// Get a random photo 获取一张随机图片
export const getRandomPhotoApi = () => {
  return instance.get("/photos/random");
};

// Get a photo’s statistics 获取照片的统计数据
export const getPhotoStatisticsApi = (id: string) => {
  return instance.get("/photos/" + id + "/statistics");
};

// Get a photo’s related 获取照片的相关照片
export const getPhotoRelatedApi = (id: string) => {
  return instance.get("/photos/" + id + "/related");
};

// Track a photo download
// Update a photo
// Like a photo
// Unlike a photo

// Topic
// List topics
export const getTopicsApi = (query?: Query) => {
  return instance.get("/topics", { params: query });
};

// Get a topic
export const getTopicApi = (id_or_slug: string | string[]) => {
  return instance.get("/topics/" + id_or_slug);
};

// Get a topic’s photos
export const getTopicPhotosApi = (
  id_or_slug: string | string[],
  query?: Query
) => {
  return instance.get("/topics/" + id_or_slug + "/photos", { params: query });
};

// Get a user
export const getUserApi = (username: string | string[]) => {
  return instance.get("/users/" + username);
};
// Get a user’s portfolio
export const getUserPortfolioApi = (username: string | string[]) => {
  return instance.get("/users/" + username + "/portfolio");
};
// List a user’s photos
export const getUserPhotosApi = (
  username: string | string[],
  query?: Query
) => {
  return instance.get("/users/" + username + "/photos", { params: query });
};
// List a user’s liked photos
export const getUserLikesApi = (username: string | string[], query?: Query) => {
  return instance.get("/users/" + username + "/likes", { params: query });
};
// List a user’s collections
export const getUserCollectionsApi = (
  username: string | string[],
  query?: Query
) => {
  return instance.get("/users/" + username + "/collections", { params: query });
};
// Get a user’s statistics
export const getUserStatisticsApi = (username: string | string[]) => {
  return instance.get("/users/" + username + "/statistics");
};

// Collections 图集
// List collections 图集一览
export const getCollectionsApi = (query?: Query) => {
  return instance.get("/collections", { params: query });
};

// Get a collection 获取图集信息
export const getCollectionApi = (id: string | string[]) => {
  return instance.get("/collections/" + id);
};
// Get a collection’s photos 获取该图集下所有图片
export const getCollectionPhotosApi = (
  id: string | string[],
  query?: Query
) => {
  return instance.get("/collections/" + id + "/photos", { params: query });
};
// List a collection’s related collections 获取该图集相关联图集
export const getCollectionRelatedApi = (id: string | string[]) => {
  return instance.get("/collections/" + id + "/related");
};
// Create a new collection 新增图集
// Update an existing collection 更新现存图集
// Delete a collection 删除某个图集
// Add a photo to a collection 添加图片到图集
// Remove a photo from a collection 从图集删除图片

// Search
// Search All
export const searchAllApi = (query?: Query) => {
  return instance.get("/search", { params: query });
};

// Search photos
export const searchPhotosApi = (query?: Query) => {
  return instance.get("/search/photos", { params: query });
};

// Search collections
export const searchCollectionsApi = (query?: Query) => {
  return instance.get("/search/collections", { params: query });
};

// Search users
export const searchUsersApi = (query?: Query) => {
  return instance.get("/search/users", { params: query });
};
