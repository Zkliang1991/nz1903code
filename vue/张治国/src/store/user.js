import { axios, baseURL } from "@/utils/axios";
import router from "@/router";
export const user = {
  namespaced: true,
  state: {
    username: "",
    mobile: "",
    avatar: "",
    islogin: false
  },
  mutations: {
    setUser(state, payload) {

      if (payload) {
        payload.avatar = payload.avatar.replace(/public/, baseURL);

        state.username = payload.username || '';
        state.mobile = payload.mobile || '';
        state.islogin = true;
        state.avatar = payload.avatar || '';

        sessionStorage.user = JSON.stringify(payload);
        localStorage.user = JSON.stringify(payload);
      }

    },
    clearUser(state) {
      state.username = '';
      state.mobile = '';
      state.islogin = false;
      state.avatar = '';
      sessionStorage.removeItem('user');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    setAvatar(state,payload){
      state.avatar = payload.replace(/public/, baseURL);
      sessionStorage.user = JSON.stringify(state);
      localStorage.user = JSON.stringify(state);
    }
  },
  actions: {
    reqUser(context, payload) {
      let user = {}

      // 判断user的值是否存储在session里面，如果有则不重复取
      if (localStorage.user && localStorage.token) {
        sessionStorage.user = localStorage.user
        user = JSON.parse(sessionStorage.user);
        context.commit('setUser', user);
      } else {
        axios.get("/vue/getuserinfo").then(res => {
          user = res.data.result;
          context.commit('setUser', user);
        })
      }
    },
    reqAvatar(context, payload) {
      axios.get("/vue/getavatar").then(res => {
        console.log(res);
      })
    }
  },
  getters: {

  }
}